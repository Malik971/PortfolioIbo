import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/carnaval.jpg";
import IMG2 from "../../assets/1-removebg-preview.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/jeuchess.png";
import IMG5 from "../../assets/image_t-shirt_3D.jpg";
import IMG6 from "../../assets/burger-baner.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "HTML | CSS Site Carnaval Montpellier",
    github: "https://github.com/Malik971/carnavalMontpellier",
    demo: "https://carnaval-montpellier.netlify.app/",
    brief:
      "https://www.youtube.com/watch?v=P0HkigVqqLM",
  },
  {
    id: 2,
    image: IMG2,
    title: "Wordpress | PHP | javascript Site Web",
    github: "https://github.com/Malik971/CoursPython6",
    demo: "https://workinmusic.fr/",
    brief: "https://www.youtube.com/@wimvideo1926",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/Malik971/calculatrices",
    demo: "https://fabulous-otter-35c137.netlify.app/",
    brief:"https://www.youtube.com/watch?v=ybEAMlq_2Yk",
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
    image: IMG6,
    title: "JavaScript | HTML | CSS SiteBurger",
    github: "https://github.com/Malik971/SiteBurger",
    demo: "https://main--site-burger.netlify.app/",
    brief: "https://www.youtube.com/watch?v=V5w1OGknhlc",
  },
  {
    id: 6,
    image: IMG5,
    title: "Node.js | React | OpenAI API",
    github: "https://github.com/Malik971/T-Shirt-3D",
    demo: "t-shirt3d.netlify.app",
    brief: "https://youtu.be/ldwlOzRvYOU",
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
                {/* <a href={brief} className="btn">
                  Project Brief
                </a> */}
              
                <a href={demo} className="btn btn-primary">
                  Site Web
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
