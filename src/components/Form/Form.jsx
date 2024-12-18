import React, { useState } from "react";
import "../../styles/Form.css";
import ErrorMensajes from "../ErrorMensajes/ErrorMensajes";
import "../../styles/Form.css";
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo válido.";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "La contraseña debe tener al menos 6 caracteres, incluyendo una letra y un número.";
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
      <h2>Formulario</h2>

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
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMensajes simpleMessage={errors.password} />}
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
            <option value="+34">+34 (España)</option>
            <option value="+1">+1 (EE.UU.)</option>
            <option value="+44">+44 (Reino Unido)</option>
            <option value="+91">+91 (India)</option>
            {/* Agrega más prefijos */}
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