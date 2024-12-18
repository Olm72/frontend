import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/ErrorMensajes.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate(); 

  return (
    <div className="error-page">
      <div className="hero-text1">
          <h1>Error 404 - Página no encontrada</h1>
          <p>Lo sentimos, no hemos podido encontrar lo que buscas.</p>
          <Link to="/">
            <button className="cta-button">Volver a Inicio</button>
          </Link>
      </div>
    </div>
  );
};

export default Error404;

