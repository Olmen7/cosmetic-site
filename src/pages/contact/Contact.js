import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <form
        className="form-container"
        action="https://formsubmit.co/your@sethvicente1@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Servin Brow Looks"></input>
        <input
          type="hidden"
          name="_next"
          value="https://olmentestsite1.netlify.app/thank-you"
        ></input>
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
