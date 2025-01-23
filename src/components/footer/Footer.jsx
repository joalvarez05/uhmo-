import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import uhmoLogo from "@/assets/img/uhmoLogoLight.png";
import dataFiscal from "@/assets/img/datafiscal.jpg";
function Footer() {
  return (
    <>
      <footer
        className="footer "
        role="contentinfo"
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center col-lg-4 py-2 d-flex flex-column justify-content-center align-items-center">
              <h3>
                UHMO<span className="turquesaClaro">Desarrollos</span>
              </h3>
              <nav aria-label="Footer Navigation">
                <p className="footer-links">
                  <Link to="/" className="link-1" itemProp="url">
                    Inicio
                  </Link>
                  <Link to="/acercaDe" itemProp="url">
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

            <div className=" col-12 col-md-6 col-lg-4 text-centerpy-2 d-flex flex-column justify-content-center align-items-center">
              <p itemProp="addressRegion " className="fs-4 fw-bold">
                Contáctenos
              </p>
              <div className="underline-turquesa mb-4"></div>

              <p itemProp="postalCode" className="fs-5">
                Argentina
              </p>

              <div className="pb-3">
                <a
                  href="https://wa.me/5493814186084?text=Hola,%20quisiera%20hacer%20una%20consulta"
                  className="link-offset-2 link-underline link-underline-opacity-0 blanco fs-5 py-3"
                  target="_blank"
                >
                  {" "}
                  <i className="bi bi-telephone turquesaClaro me-2 fs-5"></i>
                  +54 9 3814 18-6084
                </a>
              </div>
              <div className="pb-3">
                <a
                  href="https://wa.me/5493813994145?text=Hola,%20quisiera%20hacer%20una%20consulta"
                  className="link-offset-2 link-underline link-underline-opacity-0 blanco fs-5"
                  target="_blank"
                >
                  <i className="bi bi-telephone turquesaClaro me-2 fs-5"></i>
                  +54 9 3813 99-4145
                </a>
              </div>
              <div>
                <a
                  className="blanco link-offset-2 link-underline link-underline-opacity-0 fs-5"
                  href="mailto:uhmodesarrollos@gmail.com"
                  target="_blank"
                >
                  <i className="bi bi-envelope-at me-2 fs-5 turquesaClaro"></i>
                  uhmodesarrollos@gmail.com
                </a>
              </div>
            </div>
            <div className="col-12 text-center col-md-12 col-lg-4 d-flex flex-column justify-content-center align-items-center pt-3">
              <a href="https://www.arca.gob.ar/landing/default.asp">
                <img src={dataFiscal} alt="qr data fiscal" />
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
              src={uhmoLogo}
              alt="UHMO Logo"
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
