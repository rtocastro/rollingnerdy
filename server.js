// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

console.log("Has API key?", !!process.env.OPENAI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const allowedOrigins = [
  "http://localhost:5173",                       // dev
  "https://rollingnerdy.onrender.com",    // prod frontend URL
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

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
    res.status(500).json({
      error: "AI request failed.",
      detail: err.message || "Unknown error",
    });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ AI server running at http://localhost:${PORT}`);
});
