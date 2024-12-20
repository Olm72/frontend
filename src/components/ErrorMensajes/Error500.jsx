import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/ErrorMensajes.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Error500 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div className="error-page">
      <div className="hero-text">
          <h1>Error 505</h1>
          <p>{t("respuesta505")}</p>
          <div>
            <Link to="/">
              <button className="cta-button">{t("inicio_boton")}</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Error500;
