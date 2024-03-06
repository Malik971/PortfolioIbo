import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.youtube.com/@howtobecomeadeveloper">
        <BsArrowLeft />
      </a>
      <a href="https://www.linkedin.com/in/malik-ibo-086693261/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Malik971">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
