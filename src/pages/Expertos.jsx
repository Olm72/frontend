import React, { useState } from "react";
import "../styles/Expertos.css";
import FotoUsuarioUno from "../assets/images/foto-usuario-uno-nexeseus-big-data.jpg";
import FotoUsuarioDos from "../assets/images/foto-usuario-dos-nexeseus-big-data.png";

const Expertos = () => {
  const [slogan, setSlogan] = useState(
    "«Nexeus me ha permitido desarrollar mis habilidades en tecnologías emergentes, impulsando mi carrera y ampliando mi horizonte profesional.»"
  );

  const handleSloganChange = (newSlogan) => {
    setSlogan(newSlogan);
  };

  return (
    <main className="app-main">
      <div className="expertos-container">
        <div className="expert-image-container">
          <img
            src={FotoUsuarioUno}
            alt="Usuario Uno"
            className="expert-image"
            onClick={() =>
              handleSloganChange(
                "«Mario Casillas Rodríguez: Gracias a Nexeus, logré mejorar mi rendimiento y trabajar en soluciones tecnológicas innovadoras.»"
              )
            }
          />
        </div>
        <div className="expertos-box">
          <h1>Los Mejores Expertos en Big Data e Innovación Continua</h1>
          <p>
            En Nexeus Big Data, contamos con un equipo de expertos de clase
            mundial, comprometidos con la excelencia y la innovación constante.
            Nuestros profesionales están a la vanguardia de las tecnologías más
            avanzadas, como la inteligencia artificial, el machine learning y
            la analítica predictiva, lo que nos permite ofrecer soluciones que
            realmente marcan la diferencia para nuestros clientes. Trabajar en
            Nexeus significa estar en un entorno donde el aprendizaje continuo
            es clave y la innovación es parte de nuestro ADN. Nos enorgullece
            ser un lugar donde los desarrolladores y programadores pueden crecer
            profesionalmente y liderar proyectos que transforman industrias.
          </p>
          <div className="expertos-slogan">{slogan}</div>
        </div>
        <div className="expert-image-container">
          <img
            src={FotoUsuarioDos}
            alt="Usuario Dos"
            className="expert-image"
            onClick={() =>
              handleSloganChange(
                "«Helena Pérez Rueda: Nexeus me brindó las herramientas para liderar proyectos de vanguardia y transformar mi carrera profesional.»"
              )
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Expertos;
