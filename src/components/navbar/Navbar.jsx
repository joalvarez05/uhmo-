import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/img/uhmoLogoLight.png";
function Navbar() {
  return (
    <>
      <div className="bg-transparent">
        <nav className="navbar navbar-expand-lg">
          <div className=" container-fluid pt-2 ">
            <div className="position-relative ">
              <Link className="navbar-brand " to="/">
                <img
                  src={logo}
                  alt="logo de uhmo"
                  className="logo-brand"
                  loading="lazy"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="mx-auto ">
                <div className="navbar-nav gap-2 fs-5 ">
                  <Link
                    className="nav-link active hover_link text-light"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </Link>
                  <Link
                    className="nav-link hover_link text-light"
                    to="/acercaDe"
                  >
                    Acerca de UHMO
                  </Link>
                  <Link
                    className="nav-link hover_link text-light"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                  <Link
                    className="nav-link hover_link text-light"
                    to="/contacto"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
