import { React, useContext } from "react";
import { Helmet } from "react-helmet";
import FormRapido from "@/components/formRapido/FormRapido";
import { LanguageContext } from "@/hooks/LanguageContext";

const translations = {
  es: {
    title: "UHMO - Contacto",
    description:
      "Animate a iniciarte en el mundo digital y tener tu propia página web, consultanos. Tenemos la mejor relación precio-calidad del mercado.",
    keywords: "contacto, servicio al cliente, consultas, precios, Mi Empresa",
    contact: "Contacto",
    consultNow: "Consultá ahora",
    formDescription:
      "Realizanos una consulta o solicitá presupuesto utilizando el siguiente formulario.",
    email: "Soporte.web@uhmo.com.ar",
    phone: "+54 9 3814 18-6084",
    location: "Tucumán, Argentina",
  },
  en: {
    title: "UHMO - Contact",
    description:
      "Take the first step into the digital world and get your own website. Contact us! We offer the best price-quality ratio in the market.",
    keywords: "contact, customer service, inquiries, pricing, My Company",
    contact: "Contact",
    consultNow: "Contact us",
    formDescription:
      "Send us an inquiry or request a quote using the following form.",
    email: "Soporte.web@uhmo.com.ar",
    phone: "+54 9 3814 18-6084",
    location: "Tucumán, Argentina",
  },
};

function Contacto() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.es;

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <link rel="canonical" href="https://uhmo.com.ar/contacto" />
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
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
                {t.contact}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="bg py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 justify-content-center align-items-center flex-column d-flex">
              <h3 className="fw-bold blanco">{t.consultNow}</h3>
              <div className="underline-turquesa text-center"></div>
              <p className="pt-4 lead text-center blanco">
                {t.formDescription}
              </p>
              <FormRapido />
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center py-3 text-nowrap">
              <div className="text-center">
                <p className="fs-4 ps-2">
                  <a
                    className="blanco link-offset-2 link-underline link-underline-opacity-0"
                    href={`mailto:${t.email}`}
                    target="_blank"
                  >
                    <i className="bi bi-envelope-at sm-hidden rosa me-2 fs-3"></i>
                    {t.email}
                  </a>
                </p>
                <p className="fs-3">
                  <i className="bi bi-telephone turquesaClaro me-3 fs-2"></i>
                  <a
                    href={`https://wa.me/5493814186084?text=Hola,%20quisiera%20hacer%20una%20consulta`}
                    className="link-offset-2 link-underline link-underline-opacity-0 blanco"
                    target="_blank"
                  >
                    {t.phone}
                  </a>
                </p>
                <p className="fs-3 blanco">
                  <i className="bi bi-geo-alt fs-2 me-3 oro"></i>
                  {t.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
