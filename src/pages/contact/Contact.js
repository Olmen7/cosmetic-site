import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <form
        className="form-container"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <label className="name">Your Name:</label>
        <input type="text" name="name" required />
        <label className="email">Your Email:</label>
        <input type="email" name="email" required />
        <label className="text-area">Message: </label>
        <textarea cols="39" rows="4" name="message" required></textarea>
        <div className="button-container">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
