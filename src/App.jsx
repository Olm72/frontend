import React, {useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Error404 from "./components/ErrorMensajes/Error404";
import Error500 from "./components/ErrorMensajes/Error500";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Contacto from "./pages/Contacto";
import Projects from "./pages/Projects.jsx";

import "./styles/App.css";
import "./styles/Button.css";
import logo from "./assets/images/nexeus-big-data-logo.png";
import facebookIcon from "./assets/images/logo-facebook-nexeus-big-data.png";
import linkedInIcon from "./assets/images/logo-linkedin-nexeus-big-data.png";
import xtwitterIcon from "./assets/images/logo-x-twitter-nexeus-big-data.png";
import emailIcon from "./assets/images/logo-correo-electronico-nexeus-big-data.png";


import DropdownTranslate from './DropdownTranslate.js'; 

import { useTranslation } from 'react-i18next';

import LoadingScreen from "./components/LoadingScreen.jsx";
import { LoadingProvider, useLoading } from "./components/LoadingContext.jsx";
import { UserProvider } from "./components/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleSwitcher from "./components/RoleSwitcher";


const AppContent = () => {
  const { isLoading } = useLoading();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [pingMessage, setPingMessage] = useState(""); // Estado para guardar el mensaje de ping 
  
  const { t } = useTranslation(); 
  
  useEffect(() => { 
    // Hacer solicitud al backend para obtener el mensaje de ping
   fetch("http://127.0.0.1:8000/ping") 
    .then(response => { 
      if (!response.ok) { 
        throw new Error('Network response was not ok'); 
      } 
      return response.json(); 
    }) 
    .then(data => { 
      console.log("Ping response:", data);
       setPingMessage(data.message); 
      }) 
      .catch(error => console.error("Error fetching ping:", error)); 
    }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => { 
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      {isLoading && <LoadingScreen />}
      <header className="app-header">
        <div className="header-left">
          {/* Mostrar RoleSwitcher para pruebas */}
          <RoleSwitcher />
          <Link to="/" className="logo-container">
            <img src={logo} alt="Nexeus Logo" className="logo" />
          </Link>
        </div>
        <div>
          <nav className="dropdown-menu">
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            {menuOpen && (
              <ul className="dropdown-content" style={{ position: "absolute" }}>
                <li>
                  <Link to="/dashboard" onClick={closeMenu}>
                    {t('Dashboard')}
                  </Link>
                </li>
                <li>
                  <button
                    className="theme-toggle-button"
                    onClick={() => {
                      toggleTheme();
                      closeMenu();
                    }}
                  >
                    {theme === "light" ? t("Modo_Oscuro") : t("Modo_Claro")}
                  </button>
                </li>
              </ul>
            )}
          </nav>
        </div>
        <nav className="header-right">
          <ul className="nav-links">
            <li><Link to="/proyectos">{t('proyectos')}</Link></li>
            <li><Link to="/contacto">{t('contact')}</Link></li>
          </ul>
        </nav>
        <div className="App">
          <DropdownTranslate />
        </div>
      </header>
      <div className="main-content">
        <main className="app-main">
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme} />} />  {/* Home como página principal */}
            <Route path="/login" element={<Login />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Rutas Protegidas */}
            <Route
              path="/proyectos"
              element={
                <ProtectedRoute allowedRoles={["cliente", "desarrollador"]}>
                  <Projects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Rutas de Error */}
            <Route path="/error404" element={<Error404 />} />
            <Route path="/error500" element={<Error500 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>

          {/* Mostrar el mensaje de ping en la página principal */} 
          <div> 
            <h1>Ping Response</h1> 
            <p>{pingMessage}</p> 
          </div>
        </main>
      </div>
      <footer className="app-footer">
        <p>© 2024 NEXEUS Big Data | {t("derechos")}</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={xtwitterIcon} alt="Twitter" />
          </a>
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <LoadingProvider>
    <UserProvider>
      <Router>
        <LoadingScreen />
        <AppContent />
      </Router>
    </UserProvider>
  </LoadingProvider>
);

export default App;
