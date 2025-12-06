import { useState } from "react";

export default function CrashAIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!question.trim()) return;

  setLoading(true);
  setError("");
  setAnswer("");

  try {
    const res = await fetch("http://localhost:4000/api/ask-crash", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ question }),
});


    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Request failed");
    }

    const data = await res.json();
    setAnswer(data.answer || "");
  } catch (err) {
    console.error(err);
    setError("Sorry, something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Car Accident AI Assistant
      </h2>

      {/* On-screen disclaimer */}
      <p className="text-xs text-gray-600 mb-4 text-center">
        <strong>Important:</strong> This tool provides general educational
        information only. It does <span className="font-semibold">not</span> constitute
        legal advice. Always consult a licensed attorney about your specific
        situation.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-2">
          Ask about your car crash (make sure to include city and state):
        </label>

        <textarea
          className="w-full h-32 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Example: Can you explain what usually happens after a rear-end crash on the 405 in Los Angeles, CA?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:opacity-90 disabled:opacity-70 transition"
        >
          {loading ? "Asking AI..." : "Ask AI"}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {answer && (
        <div className="mt-4 p-3 border rounded-xl bg-gray-50 text-sm whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </div>
  );
}
