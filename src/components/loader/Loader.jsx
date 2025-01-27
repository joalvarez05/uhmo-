import { React } from "react";
import "./loader.css";
import loaderLogo from "@/assets/img/uhmoLogoLight.webp";
function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-center bg-dark contenedor">
        <div className="loader loader-1">
          <div className="loader-outter"></div>
          <img src={loaderLogo} className="loader-inner" loading="lazy"></img>
        </div>
      </div>
    </>
  );
}

export default Loader;
