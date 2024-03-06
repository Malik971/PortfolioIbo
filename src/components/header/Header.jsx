import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/Malik_photo-removebg.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Malik Ibo</h1>
        <h5 className="text-light">Frontend Developer and data scientist</h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="Malik Ibo" />
        </div>
        <a href="#contact" className="scroll__down">
  <span className="scroll__down-text">défiler vers le bas</span>
</a>
      </div>
    </header>
  );
};

export default header;
