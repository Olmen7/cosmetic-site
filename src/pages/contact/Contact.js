import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <form
        className="form-container"
        name="Eyebrow-appointment"
        action="/thank-you"
        method="POST"
        data-netlify="true"
      >
        <label className="name">Name:</label>
        <input placeholder="name" type="text" name="name" required />
        <label className="email">Email:</label>
        <input placeholder="email" type="email" name="email" required />
        <label className="text-area">Message: </label>
        <textarea
          placeholder="Type your message here..."
          cols="39"
          rows="4"
          name="message"
          required
        ></textarea>
        <div className="button-container">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
