import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import banner from "@/assets/img/bannerResponsive.webp";
import PreguntasFrecuentes from "@/components/preguntasFrec/PreguntasFrecuentes.jsx";
import FormRapido from "@/components/formRapido/FormRapido";
import { LanguageContext } from "@/hooks/LanguageContext";
import { useContext } from "react";

function Home() {
  const { language } = useContext(LanguageContext);
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [language]);
  const textos = {
    es: {
      titulo1: "CALIDAD",
      titulo2: "EXCELENCIA",
      form1: "CREATIVAS",
      form2: "MODERNAS",
      slogan: "Nos diferenciamos, vos también :)",
      desarrolloWeb: "DESARROLLO WEB MODERNO",
      btnConoceMas: "Conocé Más",
      especialistas: "Especialistas en desarrollo web",
      subtitulo: "UHMO DESARROLLO WEB",
      descripcion:
        "En UHMO, brindamos servicios de desarrollo web de calidad. Desarrollamos páginas web de alto impacto apuntadas a maximizar resultados. Somos especialistas en generar soluciones a medida y diseño personalizado para cada cliente.",
      btnConsulta: "Consúltanos",
      mision: "Nuestra Misión: Innovación, Cliente y Accesibilidad.",
      vision:
        '"Realmente creemos que con una estrategia web correcta, comunicación acertada y diseño creativo, tu empresa puede sacar un provecho de internet MUY superior al que imaginás posible."',
      ayuda: "Y queremos ayudarte a lograrlo!",
      formRapido: "Desarrollemos tu web juntos",
      formRapidoChange: "CREATIVAS",
      formRapidoChange2: "MODERNAS",
    },
    en: {
      titulo1: "QUALITY",
      titulo2: "EXCELLENCE",
      form1: "CREATIVE",
      form2: "MODERN",
      slogan: "We stand out, you too :)",
      desarrolloWeb: "MODERN WEB DEVELOPMENT",
      btnConoceMas: "Learn More",
      especialistas: "Web development specialists",
      subtitulo: "UHMO WEB DEVELOPMENT",
      descripcion:
        "At UHMO, we provide high-quality web development services. We create high-impact websites aimed at maximizing results. We specialize in creating tailor-made solutions and custom designs for each client.",
      btnConsulta: "Contact Us",
      mision: "Our Mission: Innovation, Customer & Accessibility.",
      vision:
        '"We truly believe that with the right web strategy, proper communication, and creative design, your company can take much more advantage of the internet than you ever imagined."',
      ayuda: "And we want to help you achieve it!",
      formRapido: "Let's develop your website together",
      formRapidoChange: "CREATIVE",
      formRapidoChange2: "MODERN",
    },
  };

  const texto = textos[language];
  return (
    <>
      <Helmet>
        <title>
          UHMO -{" "}
          {language === "es"
            ? "Desarrollo Web Argentina."
            : "Web Development Argentina."}
        </title>
        <link rel="canonical" href="https://uhmo.com.ar" />
        <meta
          name="description"
          content={
            language === "es"
              ? "Mejor Agencia de Desarrollo Web 2025. Creamos soluciones personalizadas para empresas y emprendedores. Ofrecemos servicios de Diseño web, Desarrollo Web, y creación de experiencias digitales únicas."
              : "Best Web Development Agency 2025. We create tailored solutions for businesses and entrepreneurs. We offer web design, web development, and unique digital experiences."
          }
        />
      </Helmet>
      <main>
        <section className="img-background d-flex align-items-center flex-column justify-content-center">
          <div className="container">
            <div className="text-end my-5 blanco sombra">
              <span
                className="ls-lg sm-none"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                {texto.slogan}
              </span>
              <h1
                className="title d-block"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                {texto.desarrolloWeb}
              </h1>
              <h2
                className="turquesaOscuro title"
                aria-label={texto.desarrolloWeb}
              >
                <Typewriter
                  key={key}
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(texto.titulo1)
                      .pauseFor(1800)
                      .deleteAll()
                      .typeString(texto.titulo2)
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </h2>
            </div>
            <div className="text-end mb-5">
              <a className="custom-btn btn-15" href="#section2">
                {texto.btnConoceMas}
              </a>
            </div>
          </div>
        </section>

        <section
          className="py-4 container"
          id="section2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center align-items-center">
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={banner}
                alt="Diseño Web Responsive"
                title="Banner que representa diseño responsive"
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className="h6 ls-lg text-center">{texto.especialistas}</p>
              <h2 className="fw-bold fs-1 text-center">
                <span className="lot">UHMO</span> {texto.subtitulo}
              </h2>
              <p className="lead text-center">{texto.descripcion}</p>
              <div className="text-center">
                <Link to="contacto" className="custom-btn btn-15">
                  {texto.btnConsulta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 text-white container2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6 py-3">
                <h2
                  className="text-center monospace"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {texto.mision}
                </h2>
              </div>
              <div
                className="col-12 col-md-6 col-lg-6 py-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="lead text-center">{texto.vision}</p>
                <h4 className="fw-bold text-center">{texto.ayuda}</h4>
              </div>
            </div>
          </div>
        </section>

        <PreguntasFrecuentes />
        <section className="py-5 text-white container2">
          <div
            className="container row"
            data-aos="fade-up"
            data-aos-duration="100"
          >
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-column align-items-center justify-content-center py-4 ">
              <div className="arrow-absolute">
                <svg
                  width="144"
                  height="61"
                  viewBox="0 0 144 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.9434 0.229236C58.3864 1.33176 45.4598 5.76533 36.6623 11.2545C33.1902 13.4126 29.155 16.3449 25.5421 19.3241C21.6478 22.5378 13.859 30.279 11.3487 33.4458C6.60979 39.3807 2.62156 46.6527 0.627451 52.9394C-0.146734 55.426 -0.217114 58.4286 0.486691 59.9533C1.21396 61.5719 1.6597 61.2904 1.6597 59.2496C1.6597 56.7865 2.3635 54.6049 4.56876 50.0541C6.96169 45.1279 8.55699 42.4771 11.513 38.5596C17.6361 30.4432 28.9673 20.5204 38.8441 14.6794C45.7413 10.5742 54.5389 7.47778 63.9464 5.81226C67.5124 5.17889 75.7938 4.94431 80.1809 5.3431C85.3421 5.81226 91.9579 7.40741 96.7672 9.28405C101.623 11.1842 107.559 14.4448 112.04 17.6586C114.925 19.6994 121.518 24.8836 121.541 25.0947C121.541 25.1651 120.087 25.6108 118.304 26.08C114.198 27.1356 112.626 27.7455 111.406 28.6604C110.139 29.6456 109.6 30.3963 109.436 31.4519C109.295 32.2025 109.389 32.4136 109.975 33.0236C111.125 34.173 111.993 34.173 120.814 33.0236C128.368 32.0618 128.978 32.0148 135.054 32.0148L141.412 31.9914L142.256 31.3346C143.383 30.4901 143.828 29.5752 143.828 28.2147C143.828 26.643 143.078 25.4701 141.154 24.0861C140.262 23.4292 138.667 22.139 137.635 21.2007C133.365 17.424 129.048 13.9287 127.289 12.8497C123.207 10.3162 120.204 10.1989 118.139 12.5212L117.436 13.3188L114.503 11.4422C105.119 5.48384 94.8904 1.7071 84.3802 0.323074C81.4008 -0.0522541 72.2279 -0.122634 68.9434 0.229236Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-center fw-bold ">{texto.formRapido}</h2>
              <span className="turquesaOscuro title">
                <Typewriter
                  key={key}
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(texto.formRapidoChange)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(texto.formRapidoChange2)
                      .pauseFor(1800)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </div>
            <div className="col-12 col-md-12 col-lg-6 py-4 d-flex justify-content-center align-items-center flex-column ">
              <FormRapido />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
