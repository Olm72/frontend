import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

// Hook personalizado para acceder al contexto
export const useUser = () => {
  return useContext(UserContext);
};

// Proveedor del contexto para manejar el estado del usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Por defecto no hay usuario logueado

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
