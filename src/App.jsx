import "./App.css";
import AOS from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import AcercaDeUhmo from "@/pages/AcercaDeUhmo";
import Portfolio from "@/pages/Portfolio";
import Error404 from "@/pages/Error404";
import Contacto from "@/pages/Contacto";
import "./App.css";
import Loader from "@/components/loader/Loader";
import Footer from "@/components/footer/Footer";
import BtnWhatsapp from "@/components/botonWhatsapp/BtnWhatsapp";
function App() {
  const [cargando, setCargando] = useState(true);
  const [transicion, setTransicion] = useState(false);

  const location = useLocation();
  const rutasSinNavbar = ["/error404"];
  const mostrarNavbar = !rutasSinNavbar.includes(location.pathname);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
      setTransicion(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {mostrarNavbar && <Navbar />}
      {cargando && <Loader />}
      {!cargando && (
        <>
          <div
            className={`${transicion ? "contenedor-visible " : "contenedor "}`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AcercaDeUhmo />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/error404" element={<Error404 />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
          {mostrarNavbar && <Footer />}
          <BtnWhatsapp />
        </>
      )}
    </>
  );
}

export default App;
