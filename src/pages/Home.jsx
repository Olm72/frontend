import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import headerImage from "../assets/images/ai-generated-8540915_1920.jpg";
import featureImage from "../assets/images/technology-7111799_1920.jpg";

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className="home-container">
      {/* Sección del Hero */}
      <section className="home-hero">
        <img src={headerImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>NEXEUS Big Data</h1>
          <p>Innovación en Inteligencia Artificial y análisis de datos.</p>
          <Link to="/login">
            <button className="cta-button">Iniciar Sesión</button>
          </Link>
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
    </div>
  );
};

export default Home;
