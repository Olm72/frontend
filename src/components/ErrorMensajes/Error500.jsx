import React from "react";
import { Link } from "react-router-dom";
import "./ErrorMensajes.css";

const Error500 = () => {
  return (
    <div className="error-page">
      <h1>Error 500</h1>
      <p>Hubo un problema en el servidor.</p>
      <Link to="/" className="back-home">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error500;
