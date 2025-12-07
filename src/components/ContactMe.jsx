import React, { useState } from "react";

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

    // mailto link generator
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  const sectionStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "600px",
    margin: "0 auto",
  
  };

  const inputStyle = {
    width: "95%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
        Contact the Developer
      </h2>

      <input
        style={inputStyle}
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        style={inputStyle}
        type="text"
        name="contact"
        placeholder="Phone / Social Handle / Email"
        value={form.contact}
        onChange={handleChange}
      />

      <textarea
        style={{ ...inputStyle, height: "120px" }}
        name="comments"
        placeholder="Comments (optional)"
        value={form.comments}
        onChange={handleChange}
      />

      <button style={buttonStyle} onClick={handleSubmit}>
        Send Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
