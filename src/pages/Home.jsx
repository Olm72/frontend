import React from "react";
import "./Home.css";
import logo from "../assets/images/nexeus-logo.png";
import headerImage from "../assets/images/ai-generated-8540915_1920.jpg";
import featureImage from "../assets/images/technology-7111799_1920.jpg";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/gorjeo.png";

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className="home-container">
      {/* Sección del header */}
      <header className="home-header">
        <img src={logo} alt="Nexeus Logo" className="logo" />
        <nav className="home-nav">
          <ul>
            <li><a href="#products">Productos</a></li>
            <li><a href="#experts">Expertos</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        {/* Botón para cambiar el tema */}
        <button
          className="theme-toggle-button"
          onClick={toggleTheme}
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--text-color)",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cambiar a {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
        </button>
      </header>

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
