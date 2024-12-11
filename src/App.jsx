import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        <header className="app-header">
          <h1>Prueba de Componentes</h1>
          <button
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--text-color)",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={toggleTheme}
          >
            Cambiar a {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
          </button>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>

      <footer className="app-footer">
        <p>Pruebas de IU Nexeus Big Data © 2024</p>
      </footer>
    </div>
  );
};

export default App;
