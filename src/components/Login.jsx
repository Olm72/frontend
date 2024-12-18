import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../assets/images/fondo-pantalla-productos-nexeus-big-data.jpg";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false); 
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Validación básica
        if (!email || !password || (isSignUp && (!name || !lastName))) {
            setError("Por favor completa todos los campos.");
            toast.error("Por favor completa todos los campos.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Introduce una dirección de correo electrónico válida.");
            toast.error("Correo inválido.");
            return;
        }

        if (isSignUp && password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        if (isSignUp) {
            toast.success("¡Registro exitoso!");
            console.log("Registrando usuario:", { name, lastName, email, password });
        } else {
            toast.success("¡Inicio de sesión exitoso!");
            console.log("Iniciando sesión con:", { email, password });
        }
    };

    return (
        <div
            className="login-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <form onSubmit={handleSubmit} className="login-form">
                <h2>{isSignUp ? "Registrarse" : "Iniciar Sesión"}</h2>
                {error && <p className="error-message">{error}</p>}

                {isSignUp && (
                    <>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Apellidos"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </>
                )}

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

                {isSignUp && (
                    <input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}

                <button type="submit">{isSignUp ? "Registrarse" : "Iniciar Sesión"}</button>

                <p style={{ textAlign: "center", marginTop: "10px" }}>
                    {isSignUp ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                    <span
                        style={{ color: "#007BFF", cursor: "pointer", fontWeight: "bold" }}
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? "Inicia Sesión" : "Regístrate"}
                    </span>
                </p>
            </form>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default Login;
