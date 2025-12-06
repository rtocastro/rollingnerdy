import { useState } from "react";

export default function CrashAIAssistant() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    console.log("User Question:", question);
    // 🔗 This is where you'll later connect your AI API call

    setQuestion("");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Car Accident AI Assistant
      </h2>

      <p className="text-sm text-gray-600 mb-4 text-center">
        <strong>Disclaimer:</strong> This AI does NOT provide legal advice.
        Information is for educational purposes only. You should always seek
        advice from a licensed attorney.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-2">
          Ask about your car crash (make sure to include city and state):
        </label>

        <textarea
          className="w-full h-32 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Example: What happened in the 2022 I-405 crash in Los Angeles, CA?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:opacity-90 transition"
        >
          Ask AI
        </button>
      </form>
    </div>
  );
}
