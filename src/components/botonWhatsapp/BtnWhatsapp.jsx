import React from "react";
import "./whatsapp.css";

function BtnWhatsapp() {
  function redirigirUsuario() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const numeroTelefono = "5493814186084";
    const mensaje = "¡Hola, quiero saber más de UHMO!";
    let url;

    if (isMobile) {
      url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;
    } else {
      url = `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;
    }

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <div>
      <a className="float" onClick={redirigirUsuario}>
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default BtnWhatsapp;
