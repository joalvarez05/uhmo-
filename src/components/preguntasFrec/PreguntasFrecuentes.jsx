import React from "react";
import "./preguntasFrecuentes.css";
import bannerVertical from "@/assets/img/bannerVertical.webp";
import { Link } from "react-router-dom";
function PreguntasFrecuentes() {
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="py-5 container d-flex justify-content-center flex-column align-items-center">
          <h3 className="text-center fw-bold h2 ">PREGUNTAS FRECUENTES</h3>
          <div className="underline-turquesa text-center"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center justify-content-center ">
              <div className="accordion w-100" id="accordion">
                <div className="accordion-item ">
                  <h2 className="accordion-header ">
                    <button
                      className="accordion-button fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      ¿Cuánto tiempo les lleva realizar mi nueva página web?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lead p-4">
                      Cada proyecto tiene sus propias características, pero
                      generalmente, la mayoría de los desarrollos web se
                      terminan en un máximo de 30 días desde que se confirma el
                      trabajo, siempre que tengamos toda la información
                      necesaria.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      ¿Cuánto dinero cuesta realizar una página web?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lead p-4">
                      Sabemos que cada proyecto es único, por lo que el tiempo y
                      costo de desarrollo puede variar. Pero para facilitar el
                      proceso, solo tenés que{" "}
                      <Link
                        to="/contacto"
                        className="link-offset-2 link-underline link-underline-opacity-0 morado"
                      >
                        {" "}
                        Contactarnos
                      </Link>
                      . Te haremos algunas preguntas clave para conocer tus
                      necesidades y te enviaremos la propuesta que mejor se
                      ajuste a lo que buscás.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Mi página web, ¿funcionará correctamente en celulares?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lead p-4">
                      En <span className="lot">UHMO</span> implementamos la
                      tecnología más avanzada de diseño{" "}
                      <span className="fw-bold">(responsive)</span> en todos
                      nuestros proyectos. Esto significa que los contenidos de
                      tu web se ajustan automáticamente a cualquier dispositivo,
                      ya sea celular o tablet, brindando una experiencia de
                      usuario fluida en todo momento. Esta es una ventaja clave
                      para destacar en el mundo digital. Si querés saber más
                      sobre diseño responsive,{" "}
                      <a
                        href="https://www.cyberclick.es/que-es/diseno-web-responsive"
                        target="_blank"
                      >
                        hacé clic aquí.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center py-4">
              {" "}
              <Link to="/contacto">
                <img
                  src={bannerVertical}
                  alt="business, hagamos impactante tu web"
                  title="Contactate con nosotros y averigua diferentes planes"
                  className="img-fluid img-banner-vertical"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreguntasFrecuentes;
