import React from "react";
import "./Home.css";
import headerImage from "../assets/images/ai-generated-8540915_1920.jpg";
import featureImage from "../assets/images/technology-7111799_1920.jpg";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/gorjeo.png";

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className="home-container">
      {/* Sección del Hero */}
      <section className="home-hero">
        <img src={headerImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>NEXEUS Big Data</h1>
          <p>Innovación en Inteligencia Artificial y análisis de datos.</p>
          <button className="cta-button">Iniciar Sesión</button>
        </div>
      </section>

      {/* Sección de Features */}
      <section className="home-features">
        <h2>Nuestros servicios</h2>
        <div className="feature">
          <img src={featureImage} alt="Feature" />
          <p>Descubre cómo la inteligencia artificial puede mejorar tu negocio.</p>
        </div>
      </section>

      {/* Sección del Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 NEXEUS Big Data | Todos los derechos reservados</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
