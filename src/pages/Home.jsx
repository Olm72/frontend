import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import headerImage from "../assets/images/fondo-pantalla-nexeus-big-data-inicio.jpg";
import featureImage from "../assets/images/tecnologia-nexeus-big-data.jpg";

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
        <h2 className="features-title">Nuestros servicios</h2>
        <div className="feature">
          <img src={featureImage} alt="Feature" className="feature-image" />
          <p className="feature-description">
            Descubre cómo la inteligencia artificial puede mejorar tu negocio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
