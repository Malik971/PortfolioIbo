import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/carnaval.jpg";
import IMG2 from "../../assets/blog.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/jeuchess.png";
import IMG5 from "../../assets/Portfolio3.png";
import IMG6 from "../../assets/burger-baner.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Site Carnaval Montpellier",
    github: "https://github.com/Ade-mir/MERN-social-media-platform",
    demo: "https://peaceful-cranachan-56056a.netlify.app/",
    brief:
      "https://www.canva.com/design/DAFapZZx0GI/205p6bLMxmlp8Z4OjkvcMw/view?utm_content=DAFapZZx0GI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Python | Machine Learning",
    github: "https://github.com/Malik971/CoursPython6",
    demo: "https://musical-puffpuff-ff26f2.netlify.app/",
    brief: "https://github.com/Ade-mir/nextjs-blog/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/Malik971/calculatrices",
    demo: "https://fabulous-otter-35c137.netlify.app/",
    brief:
      "https://github.com/Ade-mir/javascript-calculator/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "JavaScript | HTML | Jeu d'échec",
    github: "https://github.com/Malik971/jeuChess",
    demo: "https://jeuchess.netlify.app/",
    brief: "https://github.com/Ade-mir/brochure-site/blob/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "JavaScript | HTML | CSS Portfolio",
    github: "https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2",
    demo: "https://thriving-dragon-a3fcd9.netlify.app/",
    brief: "https://youtu.be/ldwlOzRvYOU",
  },
  {
    id: 6,
    image: IMG6,
    title: "JavaScript | HTML | CSS SiteBurger",
    github: "https://github.com/Malik971/SiteBurger",
    demo: "https://animated-head-portfolio.netlify.app/",
    brief: "https://youtu.be/pcFF_IIpMbc",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mon travail le plus récent se trouve sur Github</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
