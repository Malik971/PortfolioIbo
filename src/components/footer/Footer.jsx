import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Malik Ibo
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">Sur moi</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Témoignages</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        {/* <a href="https://www.youtube.com/@howtobecomeadeveloper">
          <BsYoutube />
        </a> */}
        <a href="https://www.linkedin.com/in/malik-ibo-086693261/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Malik971">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Malik Ibo. tous droits réservés</small>
      </div>
    </footer>
  );
};

export default Footer;
