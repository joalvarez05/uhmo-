import { React, useState } from "react";
import emailjs from "emailjs-com";

function FormRapido() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    telefono: "",
  });

  const serviceId = import.meta.env.REACT_APP_SERVICE_ID;
  const templateId = import.meta.env.REACT_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.REACT_APP_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("Correo enviado:", response.status, response.text);
        alert("Formulario enviado con éxito!");
      },
      (error) => {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar el formulario.");
      }
    );
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            minLength={3}
            maxLength={40}
          />
          <span>Nombre completo (*)</span>
        </label>

        <label htmlFor="email">
          <input
            required
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>Email (*)</span>
        </label>

        <label htmlFor="telefono">
          <input
            required
            type="tel"
            className="input"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <span>Telefono (*)</span>
        </label>
        <label htmlFor="mensaje">
          <textarea
            required
            rows="3"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ingresa tu mensaje aqui (*)"
            className="input01"
          ></textarea>
        </label>

        <button className="fancy" type="submit">
          <span className="top-key"></span>
          <span className="text">Enviar</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </>
  );
}

export default FormRapido;
