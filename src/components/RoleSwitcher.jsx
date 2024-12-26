import React from "react";
import { useUser } from "./UserContext";

const RoleSwitcher = () => {
  const { login } = useUser();

  return (
    <div style={{ padding: "10px", background: "#f0f0f0", marginBottom: "10px" }}>
      <h3>Cambiar Rol de Usuario</h3>
      <button
        onClick={() => login({ username: "AdminUser", role: "admin" })}
        style={{ marginRight: "10px" }}
      >
        Admin
      </button>
      <button
        onClick={() => login({ username: "DevUser", role: "desarrollador" })}
        style={{ marginRight: "10px" }}
      >
        Desarrollador
      </button>
      <button
        onClick={() => login({ username: "ClientUser", role: "cliente" })}
      >
        Cliente
      </button>
    </div>
  );
};

export default RoleSwitcher;
