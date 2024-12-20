import React from "react";
import { useTranslation } from 'react-i18next';

const Productos = () => {
  const { t } = useTranslation();
    return (
      <div className="productos-container">
        <h1>Blog</h1>
        <p>{t("blogP")}</p>
      </div>
    );
  };
  
  export default Productos;
  