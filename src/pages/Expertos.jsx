import React from "react";
import { useTranslation } from 'react-i18next';

const Productos = () => {
    const { t } = useTranslation();
    return (
      <div className="productos-container">
        <h1>{t("expertosT")} </h1>
        <p> {t("expertosP")} </p>
      </div>
    );
  };
  
  export default Productos;
  