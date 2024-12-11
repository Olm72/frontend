import React from "react";
import Form from "../components/Form/Form";

const Login = () => {
    const handleFormSubmit = (data) => {
        console.log("Datos de inicio de sesion enviados:", data);
        localStorage.setItem("token", "dummy_token"); //Simular inicio de sesion
    };

    return (
        <div>
            <h1>Inicio de sesion</h1>
            <Form onSubmit={handleFormSubmit} />
        </div>
    );
};

export default Login;
