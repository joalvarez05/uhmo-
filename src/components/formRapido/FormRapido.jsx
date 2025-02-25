import { React, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./formulario.css";
import { LanguageContext } from "@/hooks/LanguageContext";
const translations = {
  es: {
    name: "Nombre completo (*)",
    nameRequired: "El nombre es obligatorio",
    nameMin: "Tu nombre debe contener mínimo 3 caracteres",
    nameMax: "Tu nombre es demasiado largo",
    namePattern: "Solo se permiten letras y espacios",

    email: "Email (*)",
    emailRequired: "El correo electrónico es obligatorio",
    emailInvalid: "Ingresa un correo válido",

    phone: "Teléfono (*)",
    phoneRequired: "El Teléfono es obligatorio",
    phonePattern: "Solo se permiten números",
    phoneMin: "Número demasiado corto",
    phoneMax: "Número demasiado largo",

    message: "Ingresa tu mensaje aquí (*)",
    messageRequired: "El mensaje es obligatorio",
    messageMin: "El mensaje debe contener al menos 10 caracteres",
    messageMax: "El mensaje es demasiado largo",

    submit: "Enviar",
    sending: "Enviando",
    successTitle: "Formulario enviado con éxito!",
    successText: "Te responderemos a la brevedad.",
    errorTitle: "Hubo un error!",
    errorText: "Inténtalo nuevamente.",
  },
  en: {
    name: "Full Name (*)",
    nameRequired: "Name is required",
    nameMin: "Your name must contain at least 3 characters",
    nameMax: "Your name is too long",
    namePattern: "Only letters and spaces are allowed",

    email: "Email (*)",
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email",

    phone: "Phone (*)",
    phoneRequired: "Phone number is required",
    phonePattern: "Only numbers are allowed",
    phoneMin: "Number is too short",
    phoneMax: "Number is too long",

    message: "Enter your message here (*)",
    messageRequired: "Message is required",
    messageMin: "Message must be at least 10 characters long",
    messageMax: "Message is too long",

    submit: "Send",
    sending: "Sending",
    successTitle: "Form sent successfully!",
    successText: "We will get back to you shortly.",
    errorTitle: "There was an error!",
    errorText: "Please try again.",
  },
};

function FormRapido() {
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  const sendEmail = async (data) => {
    setIsLoading(true);
    try {
      await emailjs.send(serviceId, templateId, data, publicKey);
      reset();
      Swal.fire({
        title: t.successTitle,
        text: t.successText,
        icon: "success",
      }).then(() => navigate("/"));
    } catch {
      Swal.fire({
        title: t.errorTitle,
        text: t.errorText,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(sendEmail)}>
        <label htmlFor="nombre">
          <input
            type="text"
            name="name"
            id="nombre"
            autoComplete="name"
            className="input"
            {...register("name", {
              required: t.nameRequired,
              minLength: { value: 3, message: t.nameMin },
              maxLength: { value: 40, message: t.nameMax },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u,
                message: t.namePattern,
              },
            })}
          />
          <span>{t.name}</span>
        </label>
        {errors.name && <p className="fst-italic">{errors.name.message}</p>}

        <label htmlFor="email">
          <input
            type="email"
            className="input"
            name="email"
            autoComplete="email"
            id="email"
            {...register("email", {
              required: t.emailRequired,
              minLength: 3,
              maxLength: 254,
              pattern: { value: regexEmail, message: t.emailInvalid },
            })}
          />
          <span>{t.email}</span>
        </label>
        {errors.email && <p className="fst-italic">{errors.email.message}</p>}

        <label htmlFor="telefono">
          <input
            type="tel"
            className="input"
            id="telefono"
            autoComplete="tel"
            name="phone"
            {...register("phone", {
              required: t.phoneRequired,
              pattern: {
                value: /^(?=.*[1-9])\d{6,16}$/,
                message: t.phonePattern,
              },
              minLength: { value: 6, message: t.phoneMin },
              maxLength: { value: 16, message: t.phoneMax },
            })}
          />
          <span>{t.phone}</span>
        </label>
        {errors.phone && <p className="fst-italic">{errors.phone.message}</p>}

        <label htmlFor="mensaje">
          <textarea
            rows="3"
            name="message"
            id="mensaje"
            autoComplete="message"
            placeholder={t.message}
            className="input01"
            {...register("message", {
              required: t.messageRequired,
              maxLength: 1000,
              minLength: { value: 10, message: t.messageMin },
            })}
          ></textarea>
          {errors.message && (
            <p className="fst-italic">{errors.message.message}</p>
          )}
        </label>

        <button className="fancy" type="submit" disabled={isLoading}>
          <span className="top-key"></span>
          <span className="text">{isLoading ? t.sending : t.submit}</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
      {isLoading && (
        <>
          <span className="py-2 fs-3 fw-bold turquesaOscuro">{t.sending}</span>
          <span className="loader py-1"></span>
        </>
      )}
    </>
  );
}

export default FormRapido;
