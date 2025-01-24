import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import se from "@/assets/img/se.png";
import se0 from "@/assets/img/se0.png";
import se2 from "@/assets/img/se2.webp";
import se3 from "@/assets/img/se3.webp";
import se4 from "@/assets/img/se4.webp";
import se5 from "@/assets/img/se5.webp";
const Card = () => {
  const images = [
    { src: se2, alt: "Diseño web ecommerce" },
    { src: se4, alt: "desarrollo web de tienda de turismo" },
    { src: se, alt: "Diseño web de billetera virtual" },
    { src: se0, alt: "desarrollo web de pagina web" },
    { src: se3, alt: "diseño web de ecommerce" },
    { src: se5, alt: "diseño web de constructora" },
  ];
  const [activeCard, setActiveCard] = useState(null);
  const [transformOrigin, setTransformOrigin] = useState("center");

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setTransformOrigin(`${x}% ${y}%`);
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <>
      <div className="py-5">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h4 className="h2 fw-bold text-center">Trabajos recientes</h4>
          <h5 className="fw-medium text-center ls-lg">
            Conoce como trabajamos
          </h5>
          <div className="underline-turquesa text-center"></div>
        </div>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="card1 col-12 col-md-6 col-lg-4 px-3 mt-4"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="card1-image"
                  loading="lazy"
                  style={{
                    transformOrigin:
                      activeCard === index ? transformOrigin : "center",
                    transform: activeCard === index ? "scale(1.4)" : "scale(1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center text-center align-items-center py-4 frame">
          <Link to="/contacto">
            <button className="custom-btn btn-15">CONTACTANOS</button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
