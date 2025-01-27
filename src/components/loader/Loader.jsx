import { React } from "react";
import "./loader.css";
function Loader() {
  const logoUrl =
  "https://res.cloudinary.com/druvz15q9/image/upload/v1737947671/uhmoLogoLight_ufr6vq.webp";
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-center bg-dark contenedor">
        <div className="loader loader-1">
          <div className="loader-outter"></div>
          <img src={logoUrl} className="loader-inner" loading="lazy"></img>
        </div>
      </div>
    </>
  );
}

export default Loader;
