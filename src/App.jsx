import React from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const handleButtonClick = (type) => {
    alert(`Botón ${type} presionado`);
  };

  return (
    <div className="app-container">
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
        <p>Pruebas de IU Nexeus Big Data © 2024</p>
      </footer>
    </div>
  );
};

export default App;
