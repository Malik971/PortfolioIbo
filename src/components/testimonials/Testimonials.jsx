import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/bastian.jpg";
import AVTR2 from "../../assets/marie.jpg";
import AVTR3 from "../../assets/ksenia.jpg";
import AVTR4 from "../../assets/iselin.jpg";
import AVTR5 from "../../assets/balraj.jpg";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Bastian",
    review:
      "Malik se distingue par sa capacité à générer des idées innovantes et sa remise en question constante du statu quo. Au quotidien, il dynamise notre équipe avec sa contribution ininterrompue et son esprit visionnaire.",
  },
  {
    avatar: AVTR2,
    name: "Marie",
    review:
      "Collaborant étroitement pendant quatre mois, Malik s'est révélé être un collègue inestimable. Sa dévotion et sa capacité à poser systématiquement les bonnes questions assurent notre succès commun.",
  },
  {
    avatar: AVTR3,
    name: "Ksenia",
    review:
      "Travailler avec Malik sur un projet d'envergure a été un réel plaisir. Organisé, méthodique et toujours à la recherche de solutions optimales, il a été un partenaire précieux dont les conseils ont été très bénéfiques.",
  },
  {
    avatar: AVTR4,
    name: "Iselin",
    review:
      "Malik a été un collaborateur clé dans un projet d'analyse de tendances complexe. Sa capacité à s'adapter et à trouver des solutions, alliée à sa créativité et son talent pour le design, fait de lui un collaborateur exceptionnel.",
  },
  {
    avatar: AVTR5,
    name: "Balraj",
    review:
      "Collaborer avec Malik sur un projet difficile a été une expérience formidable. Il excelle à dénouer les problèmes complexes avec des solutions simples et créatives, et son engagement, sa motivation et sa grande capacité de travail sont remarquables.",
  },
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Avis de collègues</h5>
      <h2>Témoignages</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
