import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "@/assets/img/bannerResponsive.png";
import Card from "@/components/cards/Card";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="img-background d-flex align-items-center flex-column justify-content-center ">
        <div className="container">
          <div className="text-white text-end ">
            <h5 className="ls-lg">Nos diferenciamos, vos tambíen :)</h5>
            <h2 className="title">DESARROLLO WEB PERSONALIZADO</h2>
            <span className="moradoClaro title">
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
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("EXCELENCIA...")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </div>
        </div>
        <div className="w-100 me-5 mt-4 text-end ">
          <a className="button mt-4 text-light" href="#section2">
            Conoce Más
          </a>
        </div>
      </section>
      <section className=" py-4 container" id="section2">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-6">
            <img src={banner} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-3">
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
      <section className=" bg-black py-5 text-white  container2">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6 centro-lg ">
              <h2 className="moradoClaro">Nuestra misión</h2>
              <h3 className="fw-bold">Innovación,</h3>
              <h3 className="fw-bold">Cliente,</h3>
              <h3 className="fw-bold">Accesibilidad.</h3>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="lead">
                "Realmente creemos que con una estrategia web correcta,
                comunicación acertada y diseño creativo, tu empresa puede sacar
                un provecho de internet MUY superior al que imaginas posible."
              </p>
              <h4 className="fw-bold">¡ Y queremos ayudarte a lograrlo !</h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Card />
      </section>
    </>
  );
}

export default Home;
