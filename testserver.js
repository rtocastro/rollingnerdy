// test-server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ ok: true, msg: "Server is working!" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ TEST server running at http://localhost:${PORT}`);
});
