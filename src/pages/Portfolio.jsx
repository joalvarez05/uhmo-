import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "@/components/cards/Card.jsx";
function Portfolio() {
  return (
    <>
      <Helmet>
        <title>UHMO - Portfolio de Trabajos ✨.</title>
        <link rel="canonical" href="https://uhmo.com.ar/portfolio" />
        <meta
          name="description"
          content="Conocé algunos trabajos de desarrollo web realizados por nuestra empresa."
        />
        <meta
          name="keywords"
          content="trabajos, portfolio,portafolio, Mi Empresa"
        />
      </Helmet>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-4 text-end">
              <h2
                className="fw-bold ls-lg turquesaOscuro"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                Portfolio
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
              <span className="bg-breadcrumb">Portfolio</span>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <Card></Card>
    </>
  );
}

export default Portfolio;
