import React from "react";
import FormRapido from "@/components/formRapido/FormRapido";

function Contacto() {
  return (
    <>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-4 ">
              <h2 className=" fw-bold ls-lg align-bottom turquesaOscuro">
                Contacto
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="bg py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 justify-content-center align-items-center flex-column d-flex">
              <h3 className="fw-bold blanco">Consultá ahora</h3>
              <div className="underline-turquesa text-center"></div>
              <p className="pt-4 lead text-center blanco ">
                Realizanos una consulta o solicitá presupuesto utilizando el
                siguiente formulario.
              </p>
              <div className="text-center">
                <p className="fs-3">
                  <i className="bi bi-envelope-at oro me-3 fs-2"></i>
                  <a
                    className="blanco link-offset-2 link-underline link-underline-opacity-0 "
                    href="mailto:uhmodesarrollos@gmail.com"
                    target="_blank"
                  >
                    uhmodesarrollos@gmail.com
                  </a>
                </p>
                <p className="fs-3">
                  <i className="bi bi-telephone rosa me-3 fs-2"></i>
                  <a
                    href="https://wa.me/5493814186084?text=Hola,%20quisiera%20hacer%20una%20consulta"
                    className="link-offset-2 link-underline link-underline-opacity-0 blanco"
                    target="_blank"
                  >
                    +54 9 3814 18-6084
                  </a>
                </p>
                <p className="fs-3">
                  <i className="bi bi-telephone me-3 turquesaClaro fs-2"></i>
                  <a
                    href="https://wa.me/5493813994145?text=Hola,%20quisiera%20hacer%20una%20consulta"
                    className="link-offset-2 link-underline link-underline-opacity-0 blanco"
                    target="_blank"
                  >
                    +54 9 3813 99-4145
                  </a>{" "}
                </p>
                <p className="fs-3 blanco">
                  <i className="bi bi-geo-alt fs-2 me-3 verde"></i>
                  Tucumán, Argentina.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 ">
              <FormRapido></FormRapido>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Contacto;
