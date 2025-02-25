import { React, useContext } from "react";
import "./preguntasFrecuentes.css";
import bannerVertical from "@/assets/img/bannerVertical.webp";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/hooks/LanguageContext";

function PreguntasFrecuentes() {
  const { language } = useContext(LanguageContext);

  const traducciones = {
    es: {
      titulo: "PREGUNTAS FRECUENTES",
      pregunta1: "¿Cuánto tiempo les lleva realizar mi nueva página web?",
      respuesta1:
        "Cada proyecto tiene sus propias características, pero generalmente, la mayoría de los desarrollos web se terminan en un máximo de 30 días desde que se confirma el trabajo, siempre que tengamos toda la información necesaria.",
      pregunta2: "¿Cuánto dinero cuesta realizar una página web?",
      respuesta2:
        "Sabemos que cada proyecto es único, por lo que el tiempo y costo de desarrollo puede variar. Pero para facilitar el proceso, solo tenés que Contactarnos. Te haremos algunas preguntas clave para conocer tus necesidades y te enviaremos la propuesta que mejor se ajuste a lo que buscás.",
      pregunta3: "Mi página web, ¿funcionará correctamente en celulares?",
      respuesta3:
        "En UHMO implementamos la tecnología más avanzada de diseño (responsive) en todos nuestros proyectos. Esto significa que los contenidos de tu web se ajustan automáticamente a cualquier dispositivo, ya sea celular o tablet, brindando una experiencia de usuario fluida en todo momento. Esta es una ventaja clave para destacar en el mundo digital. Si querés saber más sobre diseño responsive, hacé " +
        '<a href="https://www.cyberclick.es/que-es/diseno-web-responsive" target="_blank">clic aquí</a>.',
    },
    en: {
      titulo: "FAQs",
      pregunta1: "How long does it take to create my new website?",
      respuesta1:
        "Every project has its own characteristics, but generally, most web developments are completed within 30 days from the confirmation of the project, provided we have all the necessary information.",
      pregunta2: "How much does it cost to create a website?",
      respuesta2:
        "We know that every project is unique, so the time and cost of development can vary. But to make it easier, you just have to Contact Us. We will ask you a few key questions to understand your needs and send you the proposal that best suits what you're looking for.",
      pregunta3: "Will my website work properly on mobile devices?",
      respuesta3:
        "At UHMO, we implement the most advanced (responsive) design technology in all our projects. This means that the content of your website automatically adjusts to any device, whether mobile or tablet, providing a smooth user experience at all times. This is a key advantage to stand out in the digital world. If you want to learn more about responsive design, click " +
        '<a href="https://www.cyberclick.es/que-es/diseno-web-responsive" target="_blank">here</a>.',
    },
  };

  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="py-5 container d-flex justify-content-center flex-column align-items-center">
          <h3 className="text-center fw-bold h2 ">
            {traducciones[language].titulo}
          </h3>
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
                      {traducciones[language].pregunta1}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lead p-4">
                      {traducciones[language].respuesta1}
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
                      {traducciones[language].pregunta2}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lead p-4">
                      {traducciones[language].respuesta2}
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
                      {traducciones[language].pregunta3}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body lead p-4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: traducciones[language].respuesta3,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center py-4">
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
