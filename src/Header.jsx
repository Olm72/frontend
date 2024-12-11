import React from "react";
import './Header.css';
import logo from '../assets/images/nexeus-logo.png';
import facebookIcon from '../assets/images/facebook.png';
import twitterIcon from '../assets/images/gorjeo.png';
import instagramIcon from '../assets/images/instagram.png';
import emailIcon from '../assets/images/correo-electronico.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Nexeus Logo" className="logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos de Inteligencia Artificial</a></li>
                    <li><a href="/expertos">Expertos</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="mailto:info@nexeus.com">
                    <img src={emailIcon} alt="Email" />
                </a>
            </div>
        </header>
    );
};

export default Header;