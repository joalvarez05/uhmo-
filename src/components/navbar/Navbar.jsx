import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { LanguageContext } from "@/hooks/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const logoUrl =
    "https://res.cloudinary.com/druvz15q9/image/upload/v1737947671/uhmoLogoLight_ufr6vq.webp";

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = logoUrl;
    link.as = "image";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navLinks = {
    es: {
      home: "Inicio",
      about: "Acerca de Nosotros",
      pricing: "Precios",
      portfolio: "Portfolio",
      contact: "Contacto",
    },
    en: {
      home: "Home",
      about: "About Us",
      pricing: "Pricing",
      portfolio: "Portfolio",
      contact: "Contact",
    },
  };

  return (
    <div className="bg blanco">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid pt-2">
          <div className="position-relative">
            <Link className="navbar-brand" to="/">
              <img
                src={logoUrl}
                alt="logo de uhmo desarrollos"
                className="logo-brand"
                title="UHMO"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            data-bs-theme="dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="mx-auto">
              <div className="navbar-nav gap-2 fs-5">
                <Link className="nav-link active hover_link text-light" to="/">
                  {navLinks[language].home}
                </Link>
                <Link className="nav-link hover_link text-light" to="/nosotros">
                  {navLinks[language].about}
                </Link>
                <Link className="nav-link hover_link text-light" to="/precios">
                  {navLinks[language].pricing}
                </Link>
                <Link
                  className="nav-link hover_link text-light"
                  to="/portfolio"
                >
                  {navLinks[language].portfolio}
                </Link>
                <Link className="nav-link hover_link text-light" to="/contacto">
                  {navLinks[language].contact}
                </Link>
              </div>
            </div>
            <button className="btn btn-light ms-3" onClick={toggleLanguage}>
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
