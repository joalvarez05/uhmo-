import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/hooks/LanguageContext";
import { useContext } from "react";

export const translations = {
  es: {
    bread: "Inicio",
    precios: "Precios",
    alternativas: "Algunas de nuestras alternativas",
    descripcion:
      "Todos nuestros precios son de un único pago, lo que significa que no hay mensualidades ni comisiones ocultas. Además de todo esto, te regalamos un año de hosting y dominio sin costo.",
    landingPage: "Ideal para mostrar tu producto y generar leads.",
    autoGestion: "Manejalo vos mismo!",
    ecommerce: "Ofrece tus productos!",
    empresas: "Sitio Web para Empresas",
    contacto: "Contáctanos",
    personalizado: "¿Necesitas una solución personalizada para tu empresa?",
    contact: "y lo hacemos posible",
    landingPageFeatures: [
      "Diseño Web Responsive",
      "Dominio y Hosting Gratis 1 año",
      "Mail Corporativo",
      "Formulario de Contacto",
      "Puede contener Redes Sociales",
    ],
    autoGestionFeatures: [
      "Todas las opciones de Landing Page",
      "Panel Administrador",
      "Base de Datos",
      "BackUp diario de Base de Datos",
      "Diseño Personalizado",
    ],
    ecommerceFeatures: [
      "Todas las opciones de Auto Gestión",
      "Altas y Bajas de productos/servicios",
      "Vendé sin comisiones",
      "Soporte a disposición",
    ],
    premiumFeatures: [
      "Diseño 100% personalizado",
      "Contenido que quieras mostrar",
      "Formulario de contacto",
      "Botón de WhatsApp",
      "Enlace a Redes Sociales",
      "Mails corporativos",
    ],
    empresa: "Empresas",
    gestion: "Autogestión",
    price: {
      pLandingPage: "250.000",
      pAutoGestion: "400.000",
      pEcommerce: "350.000",
      pEmpresa: "350.000",
    },
    pagoUnico: "Pago por única vez",
  },
  en: {
    bread: "Home",
    precios: "Prices",
    alternativas: "Some of our alternatives",
    descripcion:
      "All our prices are a one-time payment, meaning no monthly fees or hidden commissions. On top of that, we give you one year of free hosting and domain.",
    landingPage: "Ideal for showcasing your product and generating leads.",
    autoGestion: "Manage it yourself!",
    ecommerce: "Sell your products!",
    empresas: "Website for Companies",
    contacto: "Contact us",
    personalizado: "Need a personalized solution for your business?",
    contact: "and we'll make it happen",
    landingPageFeatures: [
      "Responsive Web Design",
      "Free Hosting and Domain for 1 year",
      "Corporate Email",
      "Contact Form",
      "May include Social Media",
    ],
    autoGestionFeatures: [
      "All Landing Page features",
      "Admin Panel",
      "Database",
      "Daily Database BackUp",
      "Custom Design",
    ],
    ecommerceFeatures: [
      "All Auto Management features",
      "Add and Remove products/services",
      "Sell with no commissions",
      "Support available",
    ],
    premiumFeatures: [
      "100% Custom Design",
      "Content of your choice",
      "Contact Form",
      "WhatsApp Button",
      "Social Media Links",
      "Corporate Emails",
    ],
    empresa: "Companies",
    gestion: "Self-Management",
    price: {
      pLandingPage: "200",
      pAutoGestion: "400",
      pEcommerce: "350",
      pEmpresa: "350",
    },
    pagoUnico: "One-time payment",
  },
};

function Precios() {
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    const checkIsMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkIsMobile);
  }, []);

  const numeroTelefono = "5493814186084";

  const generarEnlaceWp = useCallback(
    (mensaje) => {
      return isMobile
        ? `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
            mensaje
          )}`
        : `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
            mensaje
          )}`;
    },
    [isMobile]
  );

  const tildeSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );

  const {
    precios,
    alternativas,
    descripcion,
    landingPage,
    autoGestion,
    ecommerce,
    empresa,
    contacto,
    empresas,
    gestion,
    personalizado,
    landingPageFeatures,
    autoGestionFeatures,
    ecommerceFeatures,
    premiumFeatures,
    price,
    pagoUnico,
    bread,
    contact,
  } = translations[language];

  return (
    <>
      {/* https://acequiones.vercel.app/ */}
      <div className="d-none">https://acequiones.vercel.app/</div>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-4 text-end">
              <h2
                className="fw-bold ls-lg turquesaOscuro"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                {precios}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="nav_link turquesaOscuro link-offset-2 link-underline link-underline-opacity-0"
              >
                {" "}
                {bread}{" "}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="bg-breadcrumb">{precios}</span>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <section className="py-5" data-aos="fade-up" data-aos-duration="1600">
        <div className="container py-2">
          <h2 className="text-center fw-bold pb-2">
            {alternativas}
            <span className="fw-light"> ** </span>
          </h2>
          <h5 className="lead text-center pt-2">{descripcion}</h5>
          <div className="row py-4">
            {["Landing Page", gestion, "E-commerce", empresa].map(
              (plan, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center card-hover"
                >
                  <a
                    className="text-decoration-none"
                    href={generarEnlaceWp(
                      `¡Hola! Estoy interesado en un sitio de tipo ${plan}, ¿Me puedes dar más información?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="pack_card">
                      <div className="pack_name">{plan}</div>
                      <p className="description">
                        {plan === "Landing Page"
                          ? landingPage
                          : plan === gestion
                          ? autoGestion
                          : plan === "E-commerce"
                          ? ecommerce
                          : plan === empresa
                          ? empresas
                          : ""}
                      </p>
                      <div className="lists">
                        {(plan === "Landing Page"
                          ? landingPageFeatures
                          : plan === gestion
                          ? autoGestionFeatures
                          : plan === "E-commerce"
                          ? ecommerceFeatures
                          : plan === empresa
                          ? premiumFeatures
                          : []
                        ).map((feature, idx) => (
                          <div key={idx} className="list">
                            {tildeSvg}
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bottom">
                        <div className="text-center mt-3">
                          <span className="devise">$</span>
                          <span className="price d-inline px-2">
                            {plan === "Landing Page"
                              ? price.pLandingPage
                              : plan === gestion
                              ? price.pAutoGestion
                              : plan === "E-commerce"
                              ? price.pEcommerce
                              : plan === empresa
                              ? price.pEmpresa
                              : ""}
                          </span>
                          <p className="verde d-block">{pagoUnico}</p>
                        </div>
                        <button className="btn33 ">{contacto}</button>
                      </div>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
          <div className="mt-5">
            <p className="fw-bold f-6 text-center">
              ** {personalizado}{" "}
              <Link to="/contacto" className="rosa text-decoration-none">
                {contacto}
              </Link>{" "}
              {contact} **
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Precios;
