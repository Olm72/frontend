import React from 'react';
import '/ErrorMensajes.css' // Aquí tendremos lso estilos, se encuentra en carpeta SRC

const ErrorMensajes = ({titulo, descripcion, tranquilidad, solucion, alternativa }) => {
    return (
        <div className='mensajes-error'>
            <h3>{titulo}</h3>
            <p><strong>Por qué ha sucedido:</strong> {descripcion}</p>
            <p><strong>Tranquilidad</strong> {tranquilidad}</p>
            <p><strong>Cómo resolverlo:</strong> {solucion}</p>
            {alternativa && <p><strong>Alternativa:</strong> {alternativa}</p>}
        </div>
    );
};

export default MensajesError;