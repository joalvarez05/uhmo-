import "./App.css";
import AOS from "aos";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import AcercaDeUhmo from "@/pages/AcercaDeUhmo";
import Portfolio from "@/pages/Portfolio";
import Error404 from "@/pages/Error404";
import Contacto from "@/pages/Contacto";
import BtnWhatsapp from "@/components/botonWhatsapp/BtnWhatsapp";
import "./App.css";
import Footer from "@/components/footer/Footer";
function App() {
  const location = useLocation();
  const rutasSinNavbar = ["/error404", "*"];
  const mostrarNavbar = !rutasSinNavbar.some((ruta) =>
    location.pathname.startsWith(ruta)
  );
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

  return (
    <>
      {mostrarNavbar && <Navbar />}
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AcercaDeUhmo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/error404" replace />} />
        </Routes>
        {mostrarNavbar && (
          <>
            <Footer />
            <BtnWhatsapp />
          </>
        )}
      </>
    </>
  );
}

export default App;
