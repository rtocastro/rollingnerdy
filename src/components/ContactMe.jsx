import React, { useState } from "react";
import "../components/JournalTemp.css";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("Feedback for Developer of CARE");

    const body = encodeURIComponent(`
Name: ${form.name}
Contact (Phone / Social / Email): ${form.contact}
Comments: ${form.comments || "None provided"}
    `);

    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="journal-shell">
      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Contact</span>
          <h2>Contact the Developer</h2>
          <p>
            Send feedback, suggestions, bug notes, or anything that could help
            improve the recovery journal.
          </p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="contact">Phone / Social / Email</label>
            <input
              id="contact"
              type="text"
              name="contact"
              placeholder="Phone / Social Handle / Email"
              value={form.contact}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Comments, suggestions, bugs, or ideas"
              value={form.comments}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="journal-actions" style={{ marginTop: "16px" }}>
          <button className="action-btn" onClick={handleSubmit}>
            Send Feedback
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeedbackForm;