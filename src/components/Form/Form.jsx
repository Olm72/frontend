import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "El correo electrónico es obligatorio.";
    if (!formData.password) newErrors.password = "La contraseña es obligatoria.";
    if (!formData.name) newErrors.name = "El nombre es obligatorio.";
    if (!formData.phone) newErrors.phone = "El teléfono es obligatorio.";
    else if (!/^\d+$/.test(formData.phone))
      newErrors.phone = "El teléfono solo debe contener números.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && <div className="form-error">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && <div className="form-error">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
        />
        {errors.password && <div className="form-error">{errors.password}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
        />
        {errors.phone && <div className="form-error">{errors.phone}</div>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
