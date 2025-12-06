// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Make sure you set OPENAI_API_KEY=your_key in a .env file
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/ask-crash", async (req, res) => {
  const { question } = req.body;

  if (!question || !question.trim()) {
    return res.status(400).json({ error: "Question is required." });
  }

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // good cheap general model :contentReference[oaicite:0]{index=0}
      messages: [
        {
          role: "system",
          content:
            "You answer general, educational questions about car crashes and public legal information. " +
            "You are NOT a lawyer and cannot give legal advice. " +
            "Always include this disclaimer at the end of your answer: " +
            "'This is not legal advice. For advice about your specific situation, talk to a licensed attorney in your area.' " +
            "Do not tell users what they 'should' do legally, and do not estimate case value or odds of winning. " +
            "Focus on explaining general concepts, typical processes, and public info about cases.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer = completion.choices[0]?.message?.content || "";
    res.json({ answer });
  } catch (err) {
    console.error("OpenAI error:", err);
    res
      .status(500)
      .json({ error: "Something went wrong talking to the AI. Please try again." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`AI server listening on http://localhost:${PORT}`);
});
