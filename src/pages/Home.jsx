import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import headerImage from "../assets/images/fondo-pantalla-nexeus-big-data-inicio.jpg";
import { useTranslation } from "react-i18next";

const Home = ({ toggleTheme, theme }) => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="home-hero"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <div className="hero-text">
          <h1>NEXEUS Big Data</h1>
          <p>{t("homep")}</p>
          <Link to="/login">
            <button className="cta-button">{t("home_button")}</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
