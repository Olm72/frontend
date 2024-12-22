import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import headerImage from "../assets/images/fondo-pantalla-nexeus-big-data-inicio.jpg";
import featureImage from "../assets/images/tecnologia-nexeus-big-data.jpg";
import { useTranslation } from 'react-i18next';

const Home = ({ toggleTheme, theme }) => {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      {/* Sección del Hero */}
      <section className="home-hero">
        <img src={headerImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>NEXEUS Big Data</h1>
          <p>{t("homep")} </p>
          <Link to="/login">
            <button className="cta-button">{t("home_button")}</button>
          </Link>
        </div>
      </section>

      {/* Sección de Features */}
      <section className="home-features">
        <h2 className="features-title">{t("srvicios")}</h2>
        <div className="feature">
          <img src={featureImage} alt="Feature" />
          <p>Descubre cómo la inteligencia artificial puede mejorar tu negocio.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
