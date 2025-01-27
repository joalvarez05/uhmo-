import React from "react";
import "./whatsapp.css";

function BtnWhatsapp() {
  const numeroTelefono = "5493814186084";
  const mensaje = "¡Hola, quiero saber más de UHMO!";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const url = isMobile
    ? `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`
    : `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;

  return (
    <div>
      <a className="float" href={url} target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default BtnWhatsapp;
