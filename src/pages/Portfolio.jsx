import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "@/components/cards/Card.jsx";
import { LanguageContext } from "@/hooks/LanguageContext";
const translations = {
  es: {
    title: "UHMO - Portfolio de Trabajos ✨.",
    description:
      "Conocé algunos trabajos de desarrollo web realizados por nuestra empresa.",
    keywords: "trabajos, portfolio, portafolio, Mi Empresa",
    portfolio: "Portfolio",
    home: "Inicio",
  },
  en: {
    title: "UHMO - Work Portfolio ✨.",
    description:
      "Discover some web development projects carried out by our company.",
    keywords: "work, portfolio, showcase, My Company",
    portfolio: "Portfolio",
    home: "Home",
  },
};

function Portfolio() {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.es;

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <link rel="canonical" href="https://uhmo.com.ar/portfolio" />
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
                {t.portfolio}
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
                {t.home}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="bg-breadcrumb">{t.portfolio}</span>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
      <Card />
    </>
  );
}

export default Portfolio;
