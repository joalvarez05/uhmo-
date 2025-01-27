import React from "react";
import { Helmet } from "react-helmet";
import uhmoLogo from "@/assets/img/uhmoLogoLight.webp";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <Helmet>
        <title>Error404 - Houston, tenemos un problema</title>
        <meta
          name="description"
          content="La página que buscas no se encuentra disponible."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-dark h-100 blanco">
        <div className="py-4">
          <nav className="text-center">
            <img src={uhmoLogo} className="error_logo" alt="logo de la marca" />
          </nav>
        </div>
        <main className="container">
          <div className="error_container">
            <div className="error_code">
              <p>4</p>
              <p>0</p>
              <p>4</p>
            </div>
            <div className="error_title">Página no encontrada</div>
            <div className="error_description">
              Parece que no podemos encontrar esa página. Puede que se haya
              eliminado.
            </div>
            <Link to="/" className="action">
              Volver al inicio
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Error404;
