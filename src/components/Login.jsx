import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../assets/images/fondo-pantalla-productos-nexeus-big-data.jpg";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Por favor completa todos los campos.");
            toast.error("Por favor completa todos los campos.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Introduce una direccion de correo electronico valida.");
            toast.error("Introduce una direccion de correo electronico valida.");
            return;
        }

        setError("");
        toast.success("Inicio de sesión exitoso!");
        console.log("Iniciando sesión con:", { name, email, password });
    };

    return (
        <div
            className="login-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                padding: 0,
            }}
        >
            <form onSubmit={handleSubmit} className="login-form" style={{ 
                background: "rgba(255, 255, 255, 0.8)", 
                backdropFilter: "blur(8px)", 
                padding: "30px", 
                borderRadius: "12px", 
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                width: "100%"
            }}>
                <h2>Iniciar Sesión</h2>
                {error && <p className="error-message">{error}</p>}

                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Iniciar Sesión</button>
            </form>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default Login;
