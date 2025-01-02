import React, { createContext, useState, useContext, useEffect } from "react";

const LoadingContext = createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Cambiado a true por defecto

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Ocultar automáticamente 
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
