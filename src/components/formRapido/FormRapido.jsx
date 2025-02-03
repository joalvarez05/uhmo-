import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./formulario.css";
function FormRapido() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const navigate = useNavigate();

  const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  const sendEmail = () => {
    setIsLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        reset({
          name: "",
          email: "",
          telefono: "",
          message: "",
        });
        setIsLoading(false);
        Swal.fire({
          title: "Formulario enviado con exito!",
          text: "Te responderemos a la brevedad.",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      },
      () => {
        setIsLoading(false);
        Swal.fire({
          title: "Hubo un error al enviar el formulario!",
          text: "Intentalo nuevamente.",
          icon: "error",
        });
      }
    );
  };

  return (
    <>
      <form ref={form} className="form" onSubmit={handleSubmit(sendEmail)}>
        <label htmlFor="nombre">
          <input
            type="text"
            name="name"
            id="nombre"
            autoComplete="name"
            className="input"
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Tu nombre debe contener mínimo 3 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Tu nombre es demasiado largo",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u,
                message: "Solo se permiten letras y espacios",
              },
            })}
          />
          <span>Nombre completo (*)</span>
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
              required: true,
              minLength: 3,
              maxLength: 254,
              pattern: {
                value: regexEmail,
                message: "Ingresa un correo valido",
              },
            })}
          />
          <span>Email (*)</span>
        </label>
        {errors.email && <p className="fst-italic ">{errors.email.message}</p>}

        <label htmlFor="telefono">
          <input
            type="tel"
            className="input"
            id="telefono"
            autoComplete="telefono"
            name="telefono"
            {...register("telefono", {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
              minLength: {
                value: 6,
                message: "Número demasiado corto",
              },
              maxLength: {
                value: 16,
                message: "Número demasiado largo",
              },
            })}
          />
          <span>Teléfono (*)</span>
        </label>
        {errors.telefono && (
          <p className="fst-italic"> {errors.telefono.message}</p>
        )}

        <label htmlFor="mensaje">
          <textarea
            rows="3"
            name="message"
            id="mensaje"
            autoComplete="message"
            placeholder="Ingresa tu mensaje aquí (*)"
            className="input01"
            {...register("message", {
              required: true,
              maxLength: 1000,
              minLength: {
                value: 10,
                message: "El mensaje debe contener al menos 10 caracteres",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="fst-italic"> {errors.message.message}</p>
          )}
        </label>
        <button className="fancy" type="submit">
          <span className="top-key"></span>
          <span className="text">Enviar</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
      {isLoading && (
        <>
          <span className="py-2 fs-3 fw-bold turquesaOscuro">Enviando</span>{" "}
          <span className="loader py-1"></span>
        </>
      )}
    </>
  );
}

export default FormRapido;
