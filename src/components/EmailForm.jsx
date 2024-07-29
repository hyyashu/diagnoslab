"use client";
import React, { useState } from "react";

const GenericForm = () => {
  const [formData, setFormData] = useState({
    to: "",
    type: "individual",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendWhatsApp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ success: false, message: "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          name="to"
          value={formData.to}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="individual">Individual</option>
          <option value="group">Group</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        Send
      </button>
      {response && <p>{response.message}</p>}
    </form>
  );
};

export default GenericForm;
