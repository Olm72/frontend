import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ErrorMensajes.css";

const Error404 = () => {
  const navigate = useNavigate(); 

  return (
    <div className="error-page">
      <h1>La web no está disponible</h1>
      <p>Lo sentimos, no hemos podido encontrar la página que buscas.</p>
      <button
        onClick={() => navigate("/")}
        className="primary-button"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Error404;

