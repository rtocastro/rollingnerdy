import { useState } from "react";
import "./JournalTemp.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

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
      const res = await fetch(`${API_BASE_URL}/api/ask-crash`, {
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
    <div className="journal-shell">
      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Crash assistant</span>
          <h2>Car Accident AI Assistant</h2>
          <p>
            Ask general crash-related questions and get educational information
            in a calmer, cleaner layout.
          </p>
        </div>

        <div
          style={{
            marginBottom: "16px",
            padding: "14px 16px",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            color: "#fbcfe8",
            lineHeight: "1.5",
          }}
        >
          <strong>Important:</strong> This tool provides general educational
          information only. It does not constitute legal advice. Always consult
          a licensed attorney about your specific situation.
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field-grid">
            <div className="field full">
              <label htmlFor="crashQuestion">
                Ask about your car crash
              </label>
              <textarea
                id="crashQuestion"
                placeholder="Example: Can you explain what usually happens after a rear-end crash on the 405 in Los Angeles, CA?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ minHeight: "180px" }}
              />
            </div>
          </div>

          <div className="journal-actions" style={{ marginTop: "16px" }}>
            <button type="submit" disabled={loading} className="action-btn">
              {loading ? "Asking AI..." : "Ask AI"}
            </button>
          </div>
        </form>
      </section>

      {error && (
        <section className="journal-section">
          <div className="section-heading">
            <span className="section-kicker">Error</span>
            <h2>Something went wrong</h2>
          </div>
          <div
            style={{
              padding: "14px 16px",
              borderRadius: "16px",
              border: "1px solid rgba(248,113,113,0.35)",
              background: "rgba(127,29,29,0.18)",
              color: "#fecaca",
            }}
          >
            {error}
          </div>
        </section>
      )}

      {answer && (
        <section className="journal-section">
          <div className="section-heading">
            <span className="section-kicker">Response</span>
            <h2>Assistant answer</h2>
            <p>Review carefully and verify anything important.</p>
          </div>

          <div className="field-grid">
            <div className="field full">
              <label htmlFor="assistantAnswer">Answer</label>
              <textarea
                id="assistantAnswer"
                readOnly
                value={answer}
                className="output-textarea"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}