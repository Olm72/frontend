import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";

const ProtectedRoute = ({ component: Component }) => {
  return localStorage.getItem("token") ? <Component /> : <Navigate to="/login" replace />;
};

const App = () => {
  const handleButtonClick = (type) => {
    alert(`Botón ${type} presionado`);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>

        <header className="app-header">
          <h1>Prueba de Componentes</h1>
        </header>

        <main className="app-main">
          <section className="button-section">
            <h2>Botones</h2>
            <div className="button-group">
              <Button
                text="Primario"
                type="primary"
                onClick={() => handleButtonClick("Primario")}
                aria-label="Botón Primario"
              />
              <Button
                text="Secundario"
                type="secondary"
                onClick={() => handleButtonClick("Secundario")}
                aria-label="Botón Secundario"
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
        </main>

        <footer className="app-footer">
          <p>Pruebas de UI © 2024</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
