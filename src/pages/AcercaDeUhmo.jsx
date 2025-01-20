import React from "react";
import { Link } from "react-router-dom";
function AcercaDeUhmo() {
  return (
    <>
      <section className="img-background2 d-flex align-items-center flex-column justify-content-end">
        <div className="container">
          <div className=" mb-5">
            <h2 className="text-white fw-bold ls-lg h1">Acerca de UHMO</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="nav_link hover_link "> Inicio </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Acerca de UHMO
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
}

export default AcercaDeUhmo;
