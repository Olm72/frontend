import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Error404 from "./components/ErrorMensajes/Error404";
import Error500 from "./components/ErrorMensajes/Error500";
import "./App.css";

const App = () => {
  const handleButtonClick = (type) => {
    alert(`Botón ${type} presionado`);
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
                    <section className="button-section">
                      <h2>Botones</h2>
                      <div className="button-group">
                        <Button
                          text="Primario"
                          type="primary"
                          onClick={() => handleButtonClick("Primario")}
                        />
                        <Button
                          text="Secundario"
                          type="secondary"
                          onClick={() => handleButtonClick("Secundario")}
                        />
                      </div>
                    </section>

                    <section className="form-section">
                      <h2>Formulario</h2>
                      <Form
                        onSubmit={(data) =>
                          alert(
                            `Formulario enviado con los datos: ${JSON.stringify(
                              data
                            )}`
                          )
                        }
                      />
                    </section>
                  </>
                }
              />
              <Route path="/error404" element={<Error404 />} />
              <Route path="/error500" element={<Error500 />} />
              <Route path="*" element={<Error404 />} />
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
