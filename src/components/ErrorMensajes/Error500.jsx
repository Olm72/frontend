import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./ErrorMensajes.css";
import { Link } from "react-router-dom";

const Error500 = () => {
  const navigate = useNavigate(); 

  return (
    <div className="error-page">
      <div className="hero-text">
          <h1>Error 505</h1>
          <p>Ha habido un problema con el servidor</p>
          <div>
            <Link to="/">
              <button className="cta-button">Volver a Inicio</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Error500;
