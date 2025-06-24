import React, { useState } from "react";
// Giả sử component này nằm trong src/components và css nằm trong src/css
import "../css/section_six.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
    alert(`Thank you, ${formData.name}! Your message has been sent.`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="section-six">
      <div id="section-six-left">
        <p id="section-six-left-title-one">
          We are always open to communication with you!
        </p>
        <p id="section-six-left-title-two">
          Your opinion is important to us, and we are ready to provide you with
          the necessary support. You can contact us through the feedback form on
          our website or use the contact details provided.
        </p>
      </div>

      <div id="section-six-right">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" style={{ marginTop: "16px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message" style={{ marginTop: "16px" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" id="sumbit">
            Contact us<i className="ri-telegram-2-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
