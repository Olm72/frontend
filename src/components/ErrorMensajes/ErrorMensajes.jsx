import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    return (
      <div className="mensajes-error" role="alert" aria-live="polite">
        {simpleMessage ? (
          // Si se pasa un mensaje simple, solo muestra esto
          <p className="mensaje-simple">{simpleMessage}</p>
        ) : (
          // Caso general con título y detalles
          <>
            {titulo && <h3>{titulo}</h3>}
            {descripcion && <p><strong>{t("errorDescripcion")}</strong> {descripcion}</p>}
            {tranquilidad && <p><strong>{t("errorTranquilidad")}</strong> {tranquilidad}</p>}
            {solucion && <p><strong>{t("errorSolucion")}</strong> {solucion}</p>}
            {alternativa && <p><strong>{t("errorAlternativa")}</strong> {alternativa}</p>}
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