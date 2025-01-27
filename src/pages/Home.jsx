import React from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import banner from "@/assets/img/bannerResponsive.webp";
import PreguntasFrecuentes from "@/components/preguntasFrec/PreguntasFrecuentes.jsx";
import FormRapido from "@/components/formRapido/FormRapido";

function Home() {
  const wordWrite = {
    titulo1: "CALIDAD",
    titulo2: "EXCELENCIA",
    form1: "CREATIVAS",
    form2: "MODERNAS",
  };

  return (
    <>
      <Helmet>
        <title>UHMO - Desarrollo Web Argentina.</title>
        <link rel="canonical" href="https://uhmodesarrollos.com.ar" />

        <meta
          name="description"
          content="Mejor Agencia de Desarrollo Web 2025. Creamos soluciones personalizadas para empresas y emprendedores. Ofrecemos servicios de Diseño web, Desarrollo Web, y creación de experiencias digitales únicas."
        />
        <meta
          name="keywords"
          content="Desarrollo Web, Diseño Web Precios, Desarrollo Frontend, Soluciones Digitales, UHMO Desarrollos, Páginas Web Personalizadas, Diseño Responsive, Tecnología Web, Programación Web, Portfolio Web, Diseño UX/UI, Servicios de Desarrollo Web, Agencia de Desarrollo Web en Argentina, Desarrollo Web a Medida, Páginas Web Empresariales, precio pagina web.
"
        />
      </Helmet>
      <main>
        <section className="img-background d-flex align-items-center flex-column justify-content-center">
          <div className="container">
            <div className="text-white text-end mb-5">
              <h5
                className="ls-lg sm-none"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                Nos diferenciamos, vos también :)
              </h5>
              <h2 className="title" data-aos="fade-up" data-aos-duration="1600">
                DESARROLLO
              </h2>
              <h2 className="title" data-aos="fade-up" data-aos-duration="2100">
                WEB
              </h2>

              <h2 className="title" data-aos="fade-up" data-aos-duration="2300">
                PREMIUM
              </h2>
              <span className="turquesaOscuro title">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(wordWrite.titulo1)
                      .pauseFor(1800)
                      .deleteAll()
                      .typeString(wordWrite.titulo2)
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </div>
            <div className="text-end mb-5">
              <a className="custom-btn btn-15" href="#section2">
                Conocé Más
              </a>
            </div>
          </div>
        </section>
        <section
          className=" py-4 container"
          id="section2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center align-items-center">
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={banner}
                alt="Diseño Web Responsive"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "630px",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="h6 ls-lg text-center">
                Especialistas en desarrollo web
              </p>
              <h1 className="fw-bold fs-1 text-center">
                {" "}
                <span className="lot">UHMO</span>DESARROLLO WEB
              </h1>
              <p className="lead text-center">
                En <span className="fw-bold lot"> UHMO</span>, brindamos
                servicios de{" "}
                <span className="fw-bold">desarrollo web de calidad</span>.
                Desarrollamos páginas web de alto impacto apuntadas a maximizar
                resultados. Somos especialistas en generar soluciones a medida y
                diseño personalizado para cada cliente.
              </p>
              <div className="text-center">
                <Link to="contacto" className="custom-btn btn-15">
                  {" "}
                  Consúltanos
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 text-white container2 ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6 py-3">
                <h2
                  className="text-center monospace"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  Nuestra Misión: Innovación, Cliente y Accesibilidad.
                </h2>
              </div>
              <div
                className="col-12 col-md-6 col-lg-6 py-3"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <p className="lead text-center">
                  "Realmente creemos que con una estrategia web correcta,
                  comunicación acertada y diseño creativo, tu empresa puede
                  sacar un provecho de internet MUY superior al que imaginás
                  posible."
                </p>

                <h4 className="fw-bold text-center">
                  Y queremos ayudarte a lograrlo&nbsp;!
                </h4>
              </div>
            </div>
          </div>
        </section>
        <PreguntasFrecuentes></PreguntasFrecuentes>

        <section className="py-5 text-white container2">
          <div
            className="container row"
            data-aos="fade-up"
            data-aos-duration="1000"
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

              <h2 className="text-center fw-bold ">
                Desarrollemos tu web juntos
              </h2>
              <span className="turquesaOscuro title">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(wordWrite.form1)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(wordWrite.form2)
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
