import React from "react";
import Form from "../components/Form/Form";
import "../styles/Form.css"; 
import "../styles/App.css"; 
import fondoContacto from "../assets/images/fondo-pantalla-nexeus-big-data-contacto.jpg";

const Contacto = () => {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${fondoContacto})`,
      }}
    >
      
    <Form
        onSubmit={(data) =>
        alert(`Formulario enviado con los datos: ${JSON.stringify(data)}`)
        }
    />
    </div>
  );
};

export default Contacto;
