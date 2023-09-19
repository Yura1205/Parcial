import React from "react";
import "../style/BotonLogin.css"

const BuutonLogin = ({ fnIniciarSesion, label }) => {
  return (
    <button
      onClick={fnIniciarSesion}
      className="boton-login"
    >
      {label}
    </button>
  );
};

export default BuutonLogin;