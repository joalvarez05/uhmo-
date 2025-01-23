import { React, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import uhmito from "@/assets/img/img-uhmo.webp";
import baner from "@/assets/img/baner.webp";
import trabajar from "@/assets/img/trabajar-icon.png";
import brain from "@/assets/img/brain-icon.png";
import investigar from "@/assets/img/investigar-icon.png";
import AOS from "aos";
import { inicializarSplitting } from "@/utils/animationGsap.js";
function AcercaDeUhmo() {
  const vantaRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const VANTA = window.VANTA;
    let vantaEffect = VANTA.RINGS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color: 0x4cc9f0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    inicializarSplitting({ target: textRef.current });
  }, []);

  return (
    <>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-4 text-end">
              <h2
                className="fw-bold ls-lg turquesaOscuro"
                ref={textRef}
                data-splitting
              >
                Acerca de Nosotros
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="nav_link turquesaOscuro link-offset-2 link-underline link-underline-opacity-0"
              >
                {" "}
                Inicio{" "}
              </Link>
            </li>
            <li className="breadcrumb-item active " aria-current="page">
              <span className="bg-breadcrumb">Acerca de Nosotros</span>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <section className="banner">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-8 ">
              <h3 className="text-center">Soluciónes integrales</h3>
              <p className="lead text-center">
                Somos un equipo multidisciplinario compuesto por programadores,
                diseñadores, ingenieros y técnicos especializados en ventas.
                Nuestra misión es evolucionar constantemente, haciendo lo que
                nos apasiona y cumpliendo con los requerimientos de las empresas
                que confían en nosotros. Nos enfocamos en crear productos
                digitales orientados al usuario, simplificando su experiencia
                digital mediante desarrollos innovadores y ofreciendo una
                experiencia única. <br />
              </p>
            </div>{" "}
            <div
              className="col-12 col-md-4 col-lg-4 justify-content-center align-items-center"
              data-aos="fade-left"
            >
              <img
                src={baner}
                alt="banner uhmo"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg blanco py-5">
        <div className="container ">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <h4 className="text-center fw-bold">Nuestra misión</h4>
              <p className=" lead text-center ">
                Definen nuestra esencia y forma de trabajar con nuestros
                clientes y socios:
              </p>
              <p className="fw-bold fs-4 turquesaClaro text-center">
                Innovación:{" "}
              </p>
              <p className="fw-light fs-5 blanco">
                Fomentamos la creatividad y el desarrollo de soluciones
                innovadoras que transforman ideas en realidades.
              </p>

              <p className="fw-bold fs-4 oro text-center">Cliente: </p>
              <p className="fw-light fs-5 blanco">
                Nuestros clientes son el centro de todo lo que hacemos;
                trabajamos para superar sus expectativas en cada experiencia
              </p>

              <div className="">
                <p className="rosa fw-bold fs-4 text-center">Accesibilidad:</p>
                <p className="fw-light fs-5 blanco text-center">
                  {" "}
                  Nos comprometemos a crear productos y servicios accesiblespara
                  todos, eliminando barreras y acercando
                </p>
              </div>
              <br />
            </div>
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <img
                src={uhmito}
                alt="ilustración escritorio de trabajo"
                className="img-fluid rounded-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          ref={vantaRef}
          className="bg-contain-ring d-flex align-items-center"
        >
          <div className="container">
            <div className="row justify-content-start flex-column mt-5">
              <div className="col-12 col-md-12 col-lg-12 mt-5 centrado-sm ">
                <h2 className="fw-bold moradoOscuro h1 mt-5">
                  ¿ Como lo hacemos ?
                </h2>
                <p className="moradoOscuro">
                  {" "}
                  Nos dedicamos a garantizar un servicio excepcional siguiendo
                  un proceso claro y efectivo.
                </p>
              </div>
              <div className="col-10 col-md-4 col-lg-4 d-flex flex-column align-items-center ">
                <img
                  src={investigar}
                  alt="trabajo en equipo"
                  className="img-fluid"
                  loading="lazy"
                />
                <p className="text-center pt-3 fw-bold ls-lg moradoOscuro">
                  Investigamos el Mercado
                </p>
              </div>

              <div className="col-10 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                <img
                  src={brain}
                  alt="cerebro ideas"
                  className="img-fluid"
                  loading="lazy"
                />{" "}
                <p className="text-center pt-3 fw-bold ls-lg moradoOscuro">
                  {" "}
                  Diseñamos estrategias Personalizadas
                </p>
              </div>

              <div className="col-10 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                <img
                  src={trabajar}
                  alt="cerebro ideas"
                  className="img-fluid"
                  loading="lazy"
                />{" "}
                <p className="text-center pt-3 fw-bold ls-lg moradoOscuro">
                  {" "}
                  Implementamos Soluciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg blanco">
        <div className="container py-5">
          <div className="row">
            <h3
              className="text-center fw-bold ls-lg pt-3 pb-5"
              data-aos="fade-up"
            >
              ¿ Que ofrecemos ?
            </h3>
            <div
              className="col-12 col-md-12 col-lg-3 border-lateral"
              data-aos="fade-right"
            >
              <h4 className="text-center fw-bold">Landing Pages</h4>
              <p className="lead text-center gris">
                Diseñamos páginas específicas y atractivas, ideales para
                convertir visitantes en clientes. Perfectas para campañas
                publicitarias o promocionar un servicio o producto. Integración
                con formularios de contacto.
              </p>
            </div>
            <div
              className="col-12 col-md-12 col-lg-3 border-lateral "
              data-aos="fade-right"
            >
              <h4 className="text-center fw-bold ">
                Páginas Web Profesionales
              </h4>
              <p className="lead text-center gris">
                Creamos sitios web completos y personalizados que reflejan la
                identidad de tu negocio. Perfectos para empresas o emprendedores
                que buscan una sólida presencia en internet.
              </p>
            </div>
            <div
              className="col-12 col-md-12 col-lg-3 border-lateral"
              data-aos="fade-left"
            >
              <h4 className="text-center fw-bold">Responsividad</h4>
              <p className="lead text-center gris">
                Diseño responsivo adaptado a todos los dispositivos.
                Optimización para SEO y velocidad de carga.
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-3 " data-aos="fade-left">
              <h4 className="text-center fw-bold">SEO</h4>
              <p className="lead text-center gris">
                Optimización SEO para mejor visibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default AcercaDeUhmo;
