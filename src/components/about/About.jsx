import React from "react";
import "./about.css";
import profile_picture from "../../assets/img_Malik.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>En savoir plus</h5>
      <h2>Sur Moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="sur Malik Ibo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                2 ans <br /> d'expérience de développement
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
              Mastère Dev, Big data & IA
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                +25 terminé
                <br />
                et plein d'autre a venir
              </small>
            </article>
          </div>
          <p>
          Je suis un data scientist passionné, actuellement impliqué dans l'analyse et le traitement de données complexes pour des systèmes de gestion de l'information produit à grande échelle, en utilisant des technologies avancées telles que Python, SQL, et des librairies de machine learning. Mes tâches quotidiennes sont centrées sur l'extraction de données pertinentes, l'optimisation d'algorithmes de machine learning et la conception d'interfaces intuitives pour la visualisation des données.
          </p>
          <p>
          Je suis un passionné des nouvelles technologies, c'est pour cela que je m'entraîne quotidiennement avec le langage de programmation Python pour m'améliorer en machine learning, via le site
            <a href="https://www.france-ioi.org/user/perso.php?sLogin=islandboy"> france-ioi.org.</a>
          </p>
          <p>
          Avec un fond solide en ingénierie et une expérience en conception de produits et entrepreneuriat, j'ai notamment fondé une start-up durant mes études, exploitant les médias sociaux pour commercialiser des produits innovants. Mon parcours inclut également un rôle de consultant en développement de produits et technologies avancées.
          </p>
          <p>
          En 2023, décidant de me consacrer pleinement à la data science, j'ai suivi une formation intensive en Python et machine learning, renforçant ainsi mon expertise technique. Cette transition a marqué le début de ma carrière en tant que data scientist, me permettant d'appliquer ma passion pour les données et l'analyse dans des projets impactant significativement le monde de la tech.
          </p>
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
