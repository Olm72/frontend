import React, { useState } from "react";
import "./Form.css";
import ErrorMensajes from "../ErrorMensajes/ErrorMensajes";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "El teléfono debe tener exactamente 9 dígitos.";
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
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <ErrorMensajes simpleMessage={errors.phone} />}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;