// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// CORS – fine to keep open for now, we can tighten later
app.use(cors());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ---- API ROUTE ----
app.post("/api/ask-crash", async (req, res) => {
  const { question } = req.body;

  if (!question || !question.trim()) {
    return res.status(400).json({ error: "Question is required." });
  }

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You provide general educational information about car accidents and public legal processes. " +
            "You are not a lawyer and must not give legal advice. " +
            "Always include this disclaimer at the end of every answer: " +
            "'This is not legal advice. For legal advice about your situation, consult a licensed attorney in your jurisdiction.' " +
            "Never estimate payouts, blame, or chances of winning.",
        },
        { role: "user", content: question },
      ],
    });

    res.json({ answer: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI error:", err);

    if (err.status === 429 || err.code === "insufficient_quota") {
      return res.status(429).json({
        error:
          "The AI service is temporarily unavailable because the usage limit was reached. Please try again later.",
      });
    }

    res.status(500).json({
      error: "AI request failed. Please try again later.",
    });
  }
});

// ---- SERVE FRONTEND BUILD ----
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ---- START SERVER ----
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
