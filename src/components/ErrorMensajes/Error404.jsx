import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/ErrorMensajes.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Error404 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div className="error-page">
      <div className="hero-text1">
          <h1>{t("error404")}</h1>
          <p>{t("respuesta404")} </p>
          <Link to="/">
            <button className="cta-button">{t("inicio_boton")}</button>
          </Link>
      </div>
    </div>
  );
};

export default Error404;

