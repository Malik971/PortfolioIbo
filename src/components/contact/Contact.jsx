import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jxtv4xm",
        "template_gnxwcoq",
        e.target,
        "8y4tCAA_-K1JlPEk8"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };

  return (
    <section id="contact">
      <h5>entrer en contact</h5>
      <h2>Me Contacter</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>malik97un@gmail.com</h5>
            <a href="mailto:malik97un@gmail.com">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Malik Ibo</h5>
            <a href="https://www.linkedin.com/in/malik-ibo-086693261/">
              Envoyer un message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {emailIsSent ? (
          <h2 id="Contact__sent-message">
            Votre message a bien été envoyé !
          </h2>
        ) : (
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="votre nom complet"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="votre Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="votre Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Envoyer message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
