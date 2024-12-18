import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Error404 from "./components/ErrorMensajes/Error404";
import Error500 from "./components/ErrorMensajes/Error500";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Productos from "./pages/Productos";
import Expertos from "./pages/Expertos";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import "./styles/App.css";
import logo from "./assets/images/nexeus-big-data-logo.png";
import facebookIcon from "./assets/images/logo-facebook-nexeus-big-data.png";
import instagramIcon from "./assets/images/logo-instagram-nexeus-big-data.png";
import twitterIcon from "./assets/images/logo-x-twitter-nexeus-big-data.png";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <Router>
      <div className="app-container">
        {/* Header Responsivo */}
        <header className="app-header">
          {/* Logo y menú desplegable */}
          <div className="header-left">
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
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      className="theme-toggle-button"
                      onClick={() => {
                        toggleTheme();
                        closeMenu(); // Cierra el menú después de cambiar el tema
                      }}
                    >
                      {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
                    </button>
                  </li>
                </ul>
              )}
            </nav>
          </div>

          {/* Enlaces a la derecha */}
          <nav className="header-right">
            <ul className="nav-links">
              <li>
                <Link to="/productos">Productos de IA</Link>
              </li>
              <li>
                <Link to="/expertos">Expertos</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido principal */}
        <div className="main-content">
          <main className="app-main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home toggleTheme={toggleTheme} theme={theme} />
                    <section className="button-section">
                      <div className="button-group">
                        <Button
                          text="Primario"
                          type="primary"
                          onClick={() => console.log("Primario")}
                        />
                        <Button
                          text="Secundario"
                          type="secondary"
                          onClick={() => console.log("Secundario")}
                        />
                      </div>
                    </section>
                  </>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/error404" element={<Error404 />} />
              <Route path="/error500" element={<Error500 />} />
              <Route path="*" element={<Error404 />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/expertos" element={<Expertos />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="app-footer">
          <p>© 2024 NEXEUS Big Data | Todos los derechos reservados</p>
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
    </Router>
  );
};

export default App;
