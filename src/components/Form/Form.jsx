import React, { useState } from "react";
import "../../styles/Form.css";
import ErrorMensajes from "../ErrorMensajes/ErrorMensajes";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName:"",
    email: "",
    password: "",
    phone: "",
    countryCode: "+34",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 letras.";
    }

    if (!formData.lastName || formData.lastName.length < 3) {
      newErrors.lastName = "Los apellidos deben tener al menos 3 letras.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo válido.";
    }

    const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
    const phoneRegex = /^\+\d{1,3}\d{7,12}$/; // Validar el número completo con el prefijo
    if (!phoneRegex.test(fullPhoneNumber)) {
      newErrors.phone = "Introduce un número de teléfono válido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Contacto</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMensajes simpleMessage={errors.name} />}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Apellidos</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <ErrorMensajes simpleMessage={errors.lastName} />}
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMensajes simpleMessage={errors.email} />}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="+374">+374 (Հայաստան - Armenia)</option>
            <option value="+43">+43 (Österreich - Austria)</option>
            <option value="+994">+994 (Azərbaycan - Azerbaiyán)</option>
            <option value="+375">+375 (Беларусь - Bielorrusia)</option>
            <option value="+32">+32 (België - Bélgica)</option>
            <option value="+359">+359 (България - Bulgaria)</option>
            <option value="+86">+86 (中国 - China)</option>
            <option value="+357">+357 (Κύπρος - Chipre)</option>
            <option value="+385">+385 (Hrvatska - Croacia)</option>
            <option value="+420">+420 (Česká republika - República Checa)</option>
            <option value="+45">+45 (Danmark - Dinamarca)</option>
            <option value="+299">+299 (Kalaallit Nunaat - Groenlandia)</option>
            <option value="+372">+372 (Eesti - Estonia)</option>
            <option value="+358">+358 (Suomi - Finlandia)</option>
            <option value="+33">+33 (France - Francia)</option>
            <option value="+350">+350 (Gibraltar)</option>
            <option value="+49">+49 (Deutschland - Alemania)</option>
            <option value="+30">+30 (Ελλάδα - Grecia)</option>
            <option value="+91">+91 (भारत - India)</option>
            <option value="+354">+354 (Ísland - Islandia)</option>
            <option value="+353">+353 (Éire - Irlanda)</option>
            <option value="+39">+39 (Italia)</option>
            <option value="+383">+383 (Kosovë - Kosovo)</option>
            <option value="+371">+371 (Latvija - Letonia)</option>
            <option value="+423">+423 (Liechtenstein)</option>
            <option value="+370">+370 (Lietuva - Lituania)</option>
            <option value="+352">+352 (Lëtzebuerg - Luxemburgo)</option>
            <option value="+389">+389 (Северна Македонија - Macedonia del Norte)</option>
            <option value="+356">+356 (Malta)</option>
            <option value="+373">+373 (Moldova - Moldavia)</option>
            <option value="+382">+382 (Crna Gora - Montenegro)</option>
            <option value="+377">+377 (Monaco - Mónaco)</option>
            <option value="+31">+31 (Nederland - Países Bajos)</option>
            <option value="+47">+47 (Norge - Noruega)</option>
            <option value="+48">+48 (Polska - Polonia)</option>
            <option value="+351">+351 (Portugal)</option>
            <option value="+40">+40 (România - Rumanía)</option>
            <option value="+7">+7 (Россия - Rusia)</option>
            <option value="+378">+378 (San Marino)</option>
            <option value="+381">+381 (Србија - Serbia)</option>
            <option value="+421">+421 (Slovensko - Eslovaquia)</option>
            <option value="+386">+386 (Slovenija - Eslovenia)</option>
            <option value="+34">+34 (España)</option>
            <option value="+354">+354 (Føroyar - Islas Feroe)</option>
            <option value="+46">+46 (Sverige - Suecia)</option>
            <option value="+41">+41 (Schweiz - Suiza)</option>
            <option value="+90">+90 (Türkiye - Turquía)</option>
            <option value="+380">+380 (Україна - Ucrania)</option>
            <option value="+1">+1 (United States - EE.UU.)</option>
            <option value="+44">+44 (United Kingdom - Reino Unido)</option>
            <option value="+39">+39 (Città del Vaticano - Ciudad del Vaticano)</option>

          </select>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Número de teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        {errors.phone && <ErrorMensajes simpleMessage={errors.phone} />}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;