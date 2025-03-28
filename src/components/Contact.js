import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact"><h2 >Contact Me</h2></div>
      <div className="contact-links">
        <a href="mailto:shashiranjankumar494@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="contact-icon" />
        </a>
        <a href="www.linkedin.com/in/shashi-ranjan-kumar-254b54227" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="https://github.com/shashi-bot" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
