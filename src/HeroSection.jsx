import React from "react";
import './HeroSection.css';
import heroImage from '../assets/images/artificial-intelligence-7450797_1920.jpg';

const HeroSection = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: 'url(${heroImages})' }}>
            <div className="hero-content">
                <h1>Bienvenido a Nexeus Big Data</h1>
                <p>Explorando el futuro de la Inteligencia Artificial</p>
                <button className="cta-button">Iniciar Sesion</button>
            </div>
        </section>
    );
};

export default HeroSection;