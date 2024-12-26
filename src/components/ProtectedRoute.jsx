import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useUser();

    // Si no hay usuario, redirigir al login
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Admin siempre tiene acceso a cualquier ruta
    if (user.role === "admin") {
        return children;
    }

    // Si el usuario no tiene un rol permitido, redirigir a error
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/error404" />;
    }

    // Si el usuario tiene acceso, renderiza el componente hijo
    return children;
};

export default ProtectedRoute;
