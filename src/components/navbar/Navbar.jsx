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
              <a className="navbar-brand " href="#">
                <img src={logo} alt="logo de uhmo" className="logo-brand" />
              </a>
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
                  <a
                    className="nav-link active hover_link text-light"
                    aria-current="page"
                    href="#"
                  >
                    Inicio
                  </a>
                  <a className="nav-link hover_link text-light" href="#">
                    Acerca de UHMO
                  </a>
                  <a className="nav-link hover_link text-light" href="#">
                    Portfolio
                  </a>
                  <a className="nav-link hover_link text-light" href="#">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
            {/* <a className="button">Subscribe</a> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
