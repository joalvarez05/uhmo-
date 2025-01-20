import React from "react";
import { Link } from "react-router-dom";
import uhmito from "@/assets/img/img-uhmo.jpg";
import baner from "@/assets/img/baner.png";
import logo from "@/assets/img/uhmoLogo.png";
function AcercaDeUhmo() {
  return (
    <>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-5">
              <h2 className="text-light fw-bold ls-lg align-bottom">
                Acerca de UHMO
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
              Acerca de UHMO
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <section className="banner">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-8 ">
              <h3 className="text-center">Soluciónes integrales</h3>
              <p className="lead text-center">
                Somos un equipo multidisciplinario compuesto por programadores,
                diseñadores, ingenieros y técnicos especializados en ventas.
                Nuestra misión es evolucionar constantemente, haciendo lo que
                nos apasiona y cumpliendo con los requerimientos de las empresas
                que confían en nosotros. Nos enfocamos en crear productos
                digitales orientados al usuario, simplificando su experiencia
                digital mediante desarrollos innovadores y ofreciendo una
                experiencia única. <br />
              </p>
            </div>{" "}
            <div className="col-12 col-md-4 col-lg-4 justify-content-center align-items-center">
              <img src={baner} alt="banner uhmo" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src={uhmito} alt="escritorio de trabajo" className="img-fluid" />
      </section>
    </>
  );
}

export default AcercaDeUhmo;
