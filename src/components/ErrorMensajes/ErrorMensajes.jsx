import React from 'react';
import PropTypes from "prop-types";
import '../../styles/ErrorMensajes.css'; // Aquí tendremos los estilos, se encuentra en carpeta styles dentro de la carpeta SRC

const ErrorMensajes = ({
    titulo,
    descripcion,
    tranquilidad,
    solucion,
    alternativa,
    simpleMessage,
  }) => {
    return (
      <div className="mensajes-error" role="alert" aria-live="polite">
        {simpleMessage ? (
          // Si se pasa un mensaje simple, solo muestra esto
          <p className="mensaje-simple">{simpleMessage}</p>
        ) : (
          // Caso general con título y detalles
          <>
            {titulo && <h3>{titulo}</h3>}
            {descripcion && <p><strong>Por qué ha sucedido:</strong> {descripcion}</p>}
            {tranquilidad && <p><strong>Tranquilidad:</strong> {tranquilidad}</p>}
            {solucion && <p><strong>Cómo resolverlo:</strong> {solucion}</p>}
            {alternativa && <p><strong>Alternativa:</strong> {alternativa}</p>}
          </>
        )}
      </div>
    );
  };

// Comprobaciones en React
ErrorMensajes.propTypes = {
    titulo: PropTypes.string, // 'titulo' debería ser string, opcional
    descripcion: PropTypes.string, // 'descripcion' debería ser string, opcional
    tranquilidad: PropTypes.string, // 'tranquilidad' debería ser string, pero es opcional
    solucion: PropTypes.string, // 'solucion' debería ser string, opcional
    alternativa: PropTypes.string, // 'alternativa' debería ser string, pero es opcional
};

export default ErrorMensajes;