import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Error404 from "./components/ErrorMensajes/Error404";
import Error500 from "./components/ErrorMensajes/Error500";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header Responsivo */}
        <header className="app-header">
          <nav className="header-nav">
            <ul className="nav-list">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
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
                      <h2>Botones</h2>
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

                    <section className="form-section">
                      <h2>Formulario</h2>
                      <Form
                        onSubmit={(data) =>
                          alert(`Formulario enviado con los datos: ${JSON.stringify(data)}`)
                        }
                      />
                    </section>
                  </>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/error404" element={<Error404 />} />
              <Route path="/error500" element={<Error500 />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="app-footer">
            <p>Pruebas de UI © 2024</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;

