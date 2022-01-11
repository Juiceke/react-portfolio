import React, { useState } from "react";
import { vaildateEmail } from "../../utils/helpers";

function Contact() {
  const [contactState, setContactState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = contactState;

  const handleSubmit = (prop) => {
    prop.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", contactState);
    }
  };

  const handleChange = (prop) => {
    if (prop.target.name === "email") {
      const isVaild = vaildateEmail(prop.target.value);
      if (!isVaild) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!prop.target.value.length) {
        setErrorMessage(`${prop.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setContactState({
        contactState,
        [prop.target.name]: prop.target.value,
      });
      console.log("Handle Form", contactState);
    }
  };

  return (
    <section className="contact-section">
      <h1 data-testid="h1tag" className="contact-me">
        Contact me
      </h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
