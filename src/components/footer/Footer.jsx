import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import dataFiscal from "@/assets/img/datafiscal.webp";
function Footer() {
  const logoUrl =
    "https://res.cloudinary.com/druvz15q9/image/upload/v1737947671/uhmoLogoLight_ufr6vq.webp";
  return (
    <>
      <footer
        className="footer"
        role="contentinfo"
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center col-lg-4 py-2 d-flex flex-column justify-content-center align-items-center">
              <h3>
                <span className="lot blanco">UHMO</span>
                <span className="turquesaClaro">Desarrollos</span>
              </h3>
              <nav aria-label="Footer Navigation">
                <p className="footer-links">
                  <Link to="/" className="link-1" itemProp="url">
                    Inicio
                  </Link>
                  <Link to="/nosotros" itemProp="url">
                    Acerca de Nosotros
                  </Link>
                  <Link to="/portfolio" itemProp="url">
                    Portfolio
                  </Link>
                  <Link to="/contacto" itemProp="url">
                    Contacto
                  </Link>
                </p>
              </nav>
            </div>

            <div className=" col-12 col-md-6 col-lg-4 text-centerpy-2 d-flex flex-column justify-content-center align-items-center text-nowrap">
              <p itemProp="addressRegion" className="fs-4 fw-bold">
                Contáctenos
              </p>
              <div className="underline-turquesa mb-4"></div>
              <div className="d-flex">
                <p itemProp="postalCode" className="fs-5">
                  <i className="bi bi-geo-alt turquesaClaro fs-3 me-1"></i>
                  Argentina
                </p>
              </div>

              <div className="pb-1 text-center">
                <p className="fs-4 ps-2">
                  <a
                    href="https://wa.me/5493814186084?text=Hola,%20quisiera%20hacer%20una%20consulta"
                    className="link-offset-2 link-underline link-underline-opacity-0 blanco"
                    target="_blank"
                  >
                    <i className="bi bi-telephone turquesaClaro me-1 fs-3"></i>
                    +5493814186084
                  </a>
                </p>
              </div>
              <div>
                <p className="fs-4 ps-2">
                  <a
                    className="blanco link-offset-2 link-underline link-underline-opacity-0"
                    href="mailto:Soporte.web@uhmo.com.ar"
                    target="_blank"
                  >
                    <i className="bi bi-envelope-at me-1 fs-3 turquesaClaro sm_icon-none"></i>
                    Soporte.web@uhmo.com.ar
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 text-center col-md-12 col-lg-4 d-flex flex-column justify-content-center align-items-center pt-3">
              <a href="https://www.arca.gob.ar/landing/default.asp">
                <img
                  src={dataFiscal}
                  alt="arca qr data fiscal"
                  title="arca"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="col-12 col-md-12 col-lg-12 text-center bg-dark pt-4 pb-1 blanco">
        &copy; 2025 UHMODesarrollos · Todos los derechos reservados.
        <div>
          <Link to="/">
            <img
              src={logoUrl}
              alt="logo de uhmo desarrollos"
              itemProp="logo"
              loading="lazy"
              className="logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
