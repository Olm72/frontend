import React from "react";
import { Link } from "react-router-dom"; 
import "./ErrorMensajes.css";


const Error404 = () => {
  return (
    <div className="error-page">
      <h1>Error 404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="back-home">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
