import React from "react";
import CV from "../../assets/CV_Malik_Ibo.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Voir CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Info
      </a>
    </div>
  );
};

export default CTA;
