import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "@/assets/img/bannerResponsive.webp";
import Card from "@/components/cards/Card";
import FormRapido from "../components/formRapido/FormRapido";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="img-background d-flex align-items-center flex-column justify-content-center">
        <div className="container">
          <div className="text-white text-end mb-5">
            <h5 className="ls-lg sm-none">Nos diferenciamos, vos tambíen :)</h5>
            <h2 className="title">DESARROLLO</h2>
            <h2 className="title">WEB</h2>
            <h2 className="title">PREMIUM</h2>
            <span className="turquesaOscuro title ">
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
                    .typeString("CALIDAD...")
                    .pauseFor(1800)
                    .deleteAll()
                    .typeString("EXCELENCIA...")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </div>
          <div className="text-end mb-5">
            <a className="button text-light" href="#section2">
              Conoce Más
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
            <img src={banner} alt="" className="img-fluid" loading="lazy" />
          </div>
          <div
            className="col-12 col-md-6 col-lg-6 mt-3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p className="h6 ls-lg text-center">
              Especialistas en desarrollo web
            </p>
            <h1 className="fw-bold fs-1 text-center">UHMO DESARROLLO WEB</h1>
            <p className="lead text-center">
              En <span className="fw-bold"> UHMO</span> brindamos servicios de{" "}
              <span className="fw-bold">desarrollo web de calidad</span>.
              Desarrollamos páginas web de alto impacto apuntadas a maximizar
              resultados. Somos especialistas en generar soluciones a medida y
              diseño personalizado para cada cliente.
            </p>
            <div className="text-center">
              <Link to="contacto" className="button">
                {" "}
                Consultános
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 text-white container2">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 col-md-6 col-lg-6 centro-lg "
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="moradoClaro">Nuestra misión</h2>
              <h3 className="fw-bold">Innovación,</h3>
              <h3 className="fw-bold">Cliente,</h3>
              <h3 className="fw-bold">Accesibilidad.</h3>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <p className="lead text-center">
                "Realmente creemos que con una estrategia web correcta,
                comunicación acertada y diseño creativo, tu empresa puede sacar
                un provecho de internet MUY superior al que imaginas posible."
              </p>
              <h4 className="fw-bold text-center">
                ¡ Y queremos ayudarte a lograrlo !
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Card />
      </section>
      <section className="py-5 text-white container2">
        <div
          className="container row"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-column align-items-center justify-content-center py-4">
            <h2 className="text-center">Desarrollemos tu web juntos</h2>
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
                    .typeString("CREATIVAS")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("MODERNAS")
                    .pauseFor(1800)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </div>
          <div className="col-12 col-md-12 col-lg-6 py-4 d-flex justify-content-center align-items-center flex-column">
            <FormRapido />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
