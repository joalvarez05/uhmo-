import React, { useState } from "react";
import "./card.css";

import se from "@/assets/img/se.png";
import se0 from "@/assets/img/se0.png";
import se2 from "@/assets/img/se2.png";
import se3 from "@/assets/img/se3.png";
import se4 from "@/assets/img/se4.png";
import se5 from "@/assets/img/se5.png";
const Card = () => {
  const images = [se2, se4, se, se0, se3, se5];

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
          <h5 className="fw-medium text-center ls-lg">Conoce como trabajamos</h5>
          <div className="underline-morado text-center"></div>
        </div>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="card1 col-12 col-md-6 col-lg-4 px-3 mt-4"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={image}
                  alt={`Card ${index + 1}`}
                  className="card1-image"
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
      </div>
    </>
  );
};

export default Card;
