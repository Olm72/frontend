import React from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const handleButtonClick = (type) => {
    console.log(`Botón ${type} presionado`);
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
          <Form onSubmit={(data) => console.log("Formulario enviado:", data)} />
        </section>
      </main>
      <footer className="app-footer">
        <p>Pruebas de UI © 2024</p>
      </footer>
    </div>
  );
};

export default App;
