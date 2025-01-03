import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";
import backgroundImage from "../assets/images/fondo-pantalla-productos-nexeus-big-data.jpg";
import { useTranslation } from 'react-i18next';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false); 
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password || (isSignUp && (!name || !lastName))) {
            setError(t("todoVacio"));
            toast.error(t("todoVacio"));
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError(t("email_invalido"));
            toast.error(t("email_invalidoFlash"));
            return;
        }

        if (isSignUp && password !== confirmPassword) {
            setError(t("contraseñaInvalida"));
            toast.error(t("contraseñaInvalida"));
            return;
        }

        if (isSignUp) {
            toast.success(t("registroExitoso"));
            console.log("Registrando usuario:", { name, lastName, email, password });
        } else {
            toast.success(t("InicioExitiso"));
            console.log("Iniciando sesión con:", { email, password });
        }
    };

    return (
        <div
            className="main-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <form onSubmit={handleSubmit} className="form-container">
                <h2>{isSignUp ? t("registrarse") : t("iniciarSesion")}</h2>
                {error && <p className="error-message">{error}</p>}

                {isSignUp && (
                    <>
                        <input
                            type="text"
                            placeholder= {t("name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder= {t("lastname")}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </>
                )}

                <input
                    type="email"
                    placeholder= {t("email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder= {t("password")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isSignUp && (
                    <input
                        type="password"
                        placeholder= {t("confirm_password")}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}

                <button type="submit">{isSignUp ? t("registrarse") : t("iniciarSesion")}</button>

                <p>
                    {isSignUp ? t("preguntaRegistro1") : t("preguntaRegistro2")}{" "}
                    <span onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? t("iniciarSesion") : t("registrarse")}
                    </span>
                </p>
            </form>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default Login;
