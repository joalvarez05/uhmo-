import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "@/components/cards/Card.jsx";
function Portfolio() {
  return (
    <>
    <Helmet>
        <title>UHMO - Portfolio de Trabajos ✨.</title>
        <link rel="canonical" href="https://uhmodesarrollos.com.ar/contacto" />
        <meta
          name="description"
          content="Conocé algunos trabajos de desarrollo web realizados por nuestra empresa."
          />
        <meta name="keywords" content="trabajos, portfolio, Mi Empresa" />
      </Helmet>
      
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
