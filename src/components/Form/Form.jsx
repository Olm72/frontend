import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import Button from "../Button/Button";


const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const tempErrors = {};
    let isValid = true;

    if (!email) {
      tempErrors.email = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Introduce un correo electrónico válido.";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "La contraseña es obligatoria.";
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="emailError"
        />
        {errors.email && (
          <small id="emailError" className="form-error">
            {errors.email}
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="passwordError"
        />
        {errors.password && (
          <small id="passwordError" className="form-error">
            {errors.password}
          </small>
        )}
      </div>

      <Button text="Enviar" type="primary" onClick={handleSubmit} />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
