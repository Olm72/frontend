import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./ErrorMensajes/Error404";
import Error500 from "./ErrorMensajes/Error500";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Error404 />} /> {/* Página principal */}
      <Route path="/error500" element={<Error500 />} /> {/* Ruta específica */}
      <Route path="*" element={<Error404 />} /> {/* Página para rutas no encontradas */}
    </Routes>
  );
}

export default App;
