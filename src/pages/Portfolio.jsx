import React from "react";
import { Helmet } from "react-helmet";
import Card from "@/components/cards/Card.jsx";
function Portfolio() {
  return (
    <>
      <Card></Card>
      <Helmet>
        <title>UHMO - Portfolio de Trabajos ✨.</title>
        <link rel="canonical" href="https://uhmodesarrollos.com.ar/contacto" />

        <meta
          name="description"
          content="Conocé algunos trabajos de desarrollo web realizados por nuestra empresa."
        />
        <meta name="keywords" content="trabajos, portfolio, Mi Empresa" />
      </Helmet>
    </>
  );
}

export default Portfolio;
