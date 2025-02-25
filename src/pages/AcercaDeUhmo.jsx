import { React, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import uhmito from "@/assets/img/img-uhmo.webp";
import baner from "@/assets/img/banerResponsive.webp";
import trabajar from "@/assets/img/trabajar-icon.png";
import brain from "@/assets/img/brain-icon.png";
import investigar from "@/assets/img/investigar-icon.png";
import AOS from "aos";
import { LanguageContext } from "@/hooks/LanguageContext";
import { useContext } from "react";
const content = {
  es: {
    bread: "Inicio",
    title: "Acerca de Nosotros",
    solutionsTitle: "Soluciónes integrales",
    encabezado:
      "Somos un equipo multidisciplinario compuesto por programadores, diseñadores, ingenieros y técnicos especializados en ventas. Nuestra misión es evolucionar constantemente, haciendo lo que nos apasiona y cumpliendo con los requerimientos de las empresas que confían en nosotros. Nos enfocamos en crear productos digitales orientados al usuario, simplificando su experiencia digital mediante desarrollos innovadores y ofreciendo una experiencia única.",
    missionTitle: "Nuestra misión",
    mision:
      "Definen nuestra esencia y forma de trabajar con nuestros clientes y socios",
    innova: "Innovación",
    cliente: "Cliente",
    accesibilidad: "Accesibilidad",
    missionPoints: {
      innovation:
        "Fomentamos la creatividad y el desarrollo de soluciones innovadoras que transforman ideas en realidades.",
      client:
        "Nuestros clientes son el centro de todo lo que hacemos; trabajamos para superar sus expectativas en cada experiencia.",
      accessibility:
        "Nos comprometemos a crear productos y servicios accesibles para todos, eliminando barreras y acercando.",
    },
    processTitle: "¿Cómo lo hacemos?",
    processSubtitle:
      "Nos dedicamos a garantizar un servicio excepcional siguiendo un proceso claro y efectivo.",
    processSteps: {
      a: "Investigamos el Mercado",
      b: "Diseñamos estrategias Personalizadas",
      c: "Implementamos Soluciones",
    },
    offerTitle: "¿Qué ofrecemos?",
    offers: [
      {
        title: "Landing Pages",
        description:
          "Diseñamos páginas específicas y atractivas, ideales para convertir visitantes en clientes. Perfectas campañas publicitarias o promocionar un servicio o product Integración con formularios de contacto.",
      },
      {
        title: "Páginas Web Profesionales",
        description:
          "Creamos sitios web completos y personalizados que reflejan la identidad de tu negocio. Perfectos para empresas o emprendedores que buscan una sólida presencia en internet.",
      },
      {
        title: "Responsividad",
        description:
          "Diseño responsivo adaptado a todos los dispositivos. Optimización para SEO y velocidad de carga.",
      },
      { title: "SEO", description: "Optimización SEO para mejor visibilidad." },
    ],
  },
  en: {
    bread: "Home",
    title: "About Us",
    solutionsTitle: "Integral Solutions",
    encabezado:
      "We are a multidisciplinary team composed of programmers, designers, engineers, and sales specialists. Our mission is to constantly evolve, doing what we are passionate about and meeting the requirements of the companies that trust us. We focus on creating user-oriented digital products, simplifying their digital experience through innovative developments and offering a unique experience.",
    missionTitle: "Our Mission",
    mision:
      "They define our essence and way of working with our clients and partners.",
    innova: "Innovation",
    cliente: "Client",
    accesibilidad: "Accesibility",
    missionPoints: {
      innovation:
        "We foster creativity and the development of innovative solutions that turn ideas into realities.",
      client:
        "Our clients are at the center of everything we do; we work to exceed their expectations in every experience.",
      accessibility:
        "We are committed to creating accessible products and services for everyone, removing barriers and bringing us closer.",
    },
    processTitle: "How We Do It?",
    processSubtitle:
      "We are dedicated to ensuring exceptional service by following a clear and effective process.",
    processSteps: {
      a: "We Research the Market",
      b: "We Design Personalized Strategies",
      c: "We Implement Solutions",
    },
    offerTitle: "What We Offer?",
    offers: [
      {
        title: "Landing Pages",
        description:
          "We design specific and attractive pages, ideal for converting visitors into customers. Perfect for advertising campaigns or promoting a service or product. Integration with contact forms.",
      },
      {
        title: "Professional Websites",
        description:
          "We create complete and customized websites that reflect your business identity. Perfect for companies or entrepreneurs looking for a strong online presence.",
      },
      {
        title: "Responsiveness",
        description:
          "Responsive design adapted to all devices. SEO and speed optimization.",
      },
      { title: "SEO", description: "SEO optimization for better visibility." },
    ],
  },
};

function AcercaDeUhmo() {
  const { language } = useContext(LanguageContext);
  const vantaRef = useRef(null);

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
  const texto = content[language];

  return (
    <>
      <Helmet>
        <title>UHMO - Acerca de Nosotros.</title>
        <link rel="canonical" href="https://uhmo.com.ar/nosotros" />
        <meta
          name="description"
          content="En UHMO Desarrollos somos un equipo joven, capacitados para todo tipo de proyecto y apasionados. Nos encanta el Desarrollo Web, el SEO y el Diseño Web."
        />
        <meta
          name="keywords"
          content="contacto, servicio al cliente, consultas,precios, Mi Empresa"
        />
      </Helmet>
      <div className="img-background2 justify-content-end">
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-4 text-end">
              <h2
                className="fw-bold ls-lg turquesaOscuro"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                {texto.title}
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
                {texto.bread}{" "}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="bg-breadcrumb">{texto.title}</span>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-12 col-md-8 col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-center">{texto.solutionsTitle}</h3>
              <p className="lead text-center">
                {texto.encabezado} <br />
              </p>
            </div>{" "}
            <div
              className="col-12 col-md-4 col-lg-4 justify-content-center align-items-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={baner}
                alt="banner uhmo"
                className="img-fluid"
                loading="lazy"
                title="realizamos web responsives"
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
              <h4 className="text-center fw-bold">{texto.missionTitle}</h4>
              <p className=" lead text-center ">{texto.mision}</p>
              <p className="fw-bold fs-4 turquesaClaro text-center">
                {texto.innova}:{" "}
              </p>
              <p className="fw-light fs-5 blanco text-center">
                {texto.missionPoints.innovation}
              </p>

              <p className="fw-bold fs-4 oro text-center">{texto.cliente}: </p>
              <p className="fw-light fs-5 text-center blanco">
                {texto.missionPoints.client}
              </p>

              <div className="">
                <p className="rosa fw-bold fs-4 text-center">
                  {texto.accesibilidad}:
                </p>
                <p className="fw-light fs-5 blanco text-center">
                  {" "}
                  {texto.missionPoints.accessibility}
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
                title="tablero de trabajo ilustracion"
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
                  ¿&nbsp;{texto.processTitle}&nbsp;?
                </h2>
                <p className="moradoOscuro"> {texto.processSubtitle}</p>
              </div>
              <div className="col-10 col-md-4 col-lg-4 d-flex flex-column align-items-center ">
                <img
                  src={investigar}
                  alt="trabajo en equipo"
                  className="img-fluid"
                  loading="lazy"
                  title="icono"
                />
                <p className="text-center pt-3 fw-bold ls-lg moradoOscuro">
                  {texto.processSteps.a}
                </p>
              </div>

              <div className="col-10 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                <img
                  src={brain}
                  alt="cerebro ideas"
                  className="img-fluid"
                  loading="lazy"
                  title="icono"
                />{" "}
                <p className="text-center pt-3 fw-bold ls-lg moradoOscuro">
                  {" "}
                  {texto.processSteps.b}
                </p>
              </div>

              <div className="col-10 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                <img
                  src={trabajar}
                  alt="cerebro ideas"
                  className="img-fluid"
                  loading="lazy"
                  title="icono"
                />{" "}
                <p className="text-center pt-3 fw-bold ls-lg moradoOscuro">
                  {" "}
                  {texto.processSteps.c}
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
              data-aos-duration="1200"
            >
              ¿&nbsp;{texto.offerTitle}&nbsp;?
            </h3>
            <div
              className="col-12 col-md-12 col-lg-3 border-lateral"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h4 className="text-center fw-bold">{texto.offers[0].title}</h4>
              <p className="lead text-center gris">
                {texto.offers[0].description}
              </p>
            </div>
            <div
              className="col-12 col-md-12 col-lg-3 border-lateral "
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h4 className="text-center fw-bold ">{texto.offers[1].title}</h4>
              <p className="lead text-center gris">
                {texto.offers[1].description}
              </p>
            </div>
            <div
              className="col-12 col-md-12 col-lg-3 border-lateral"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h4 className="text-center fw-bold">{texto.offers[2].title}</h4>
              <p className="lead text-center gris">
                {texto.offers[2].description}
              </p>
            </div>
            <div
              className="col-12 col-md-12 col-lg-3 "
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h4 className="text-center fw-bold">{texto.offers[3].title}</h4>
              <p className="lead text-center gris">
                {texto.offers[3].description}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AcercaDeUhmo;
