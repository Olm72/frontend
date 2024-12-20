import React from "react";
import { useTranslation } from 'react-i18next';
import Form from "../components/Form/Form";
import "../styles/Form.css"; 
import "../styles/App.css"; 
import fondoContacto from "../assets/images/fondo-pantalla-nexeus-big-data-contacto.jpg";

const Contacto = () => {
  const { t } = useTranslation();
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${fondoContacto})`,
      }}
    >
      
    <Form
        onSubmit={(data) =>
        alert(`${t('form_submit_alert')}${JSON.stringify(data)}`)
        }
    />
    </div>
  );
};

export default Contacto;
