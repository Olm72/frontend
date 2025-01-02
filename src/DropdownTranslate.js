import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Dropdown.css'; // Archivo de estilos CSS
import gb from "./assets/icons/gb.svg";
import es from "./assets/icons/es.svg";
import idioma from "./assets/images/idioma.PNG"

function DropdownTranslate() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownTranslate = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="dropdownTranslate">
      <button onClick={toggleDropdownTranslate} className="dropdown-buttonTranslate">
        <img src={idioma} alt="" />
      </button>
      {isOpen && (
        <div className="dropdown-menuTranslate">
          <a href='#' onClick={() => changeLanguage('en')} className="dropdown-itemTranslate"> 
            <img src={gb} alt="English" /> 
            <span>{t("span_en")}</span> 
          </a> 
          <a href='#' onClick={() => changeLanguage('es')} className="dropdown-itemTranslate"> 
            <img src={es} alt="Spanish" /> 
            <span>{t("span_es")} </span> 
            </a>
        </div>
      )}
    </div>
  );
}

export default DropdownTranslate;

