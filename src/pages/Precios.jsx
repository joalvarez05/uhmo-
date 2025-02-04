import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
function Precios() {
  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-4 text-end">
              <h2
                className="fw-bold ls-lg turquesaOscuro"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                Precios
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
                Inicio{" "}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="bg-breadcrumb">Precios</span>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <section className="py-5">
        <div className="container py-2">
          <h2 className="text-center fw-bold pb-2">
            Algunas de nuestras alternativas
            <span className="fw-light"> ** </span>
          </h2>
          <h5 className="lead text-center pt-2">
            Todos nuestros precios son de un único pago, lo que significa que no
            hay mensualidades ni comisiones ocultas. Además de todo esto, te
            regalamos un año de hosting y dominio sin costo.
          </h5>
          <div className="row py-4">
            {["Landing Page", "Auto Gestión", "E-commerce"].map(
              (plan, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center card-hover"
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
                          ? "Ideal para mostrar tu producto y generar leads."
                          : plan === "Auto Gestión"
                          ? "Manejalo vos mismo!"
                          : "Ofrece tus productos!"}
                      </p>
                      <div className="lists">
                        {plan === "Landing Page" ? (
                          <>
                            <div className="list">
                              {tildeSvg}
                              <span>Diseño Web Responsive</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>
                                Dominio y Hosting Gratis{" "}
                                <span className="fw-bold">1 año</span>
                              </span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Mail Corporativo</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Formulario de Contacto</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Puede contener Redes Sociales</span>
                            </div>
                          </>
                        ) : plan === "Auto Gestión" ? (
                          <>
                            <div className="list">
                              {tildeSvg}
                              <span>
                                Todas las opciones de{" "}
                                <span className="rosa">Landing Page</span>
                              </span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Panel Administrador</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Base de Datos</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>BackUp diario de Base de Datos</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Diseño Personalizado</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="list">
                              {tildeSvg}
                              <span>
                                Todas las opciones de{" "}
                                <span className="rosa">Auto Gestión</span>
                              </span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Altas y Bajas de productos/servicios</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Vendé sin comisiones</span>
                            </div>
                            <div className="list">
                              {tildeSvg}
                              <span>Soporte a disposición</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="bottom">
                        <div className="text-center mt-3">
                          <span className="devise">$</span>
                          <span className="price d-inline px-2">
                            {plan === "Landing Page"
                              ? "250.000"
                              : plan === "Auto Gestión"
                              ? "400.000"
                              : "350.000"}
                          </span>
                          <p className="verde d-block">Pago por única vez</p>
                        </div>
                        <button className="btn33 ">Contactanos</button>
                      </div>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
          <div className=" mt-5">
            <p className="fw-bold f-6 text-center">
              ** Si ninguna de estas opciones es lo que buscas,{" "}
              <Link to="/contacto" className="rosa text-decoration-none">
                {" "}
                contáctanos{" "}
              </Link>
              y lo hacemos posible. **
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Precios;
