import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import AcercaDeUhmo from "@/pages/AcercaDeUhmo";
import Portfolio from "@/pages/Portfolio";
import Error404 from "@/pages/Error404";
import Contacto from "@/pages/Contacto";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "@/components/loader/Loader";
import Footer from "@/components/footer/Footer";
function App() {
  const [cargando, setCargando] = useState(true);
  const [transicion, setTransicion] = useState(false);

  const location = useLocation();
  const rutasSinNavbar = ["/error404"];
  const mostrarNavbar = !rutasSinNavbar.includes(location.pathname);
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
        <div className={`contenedor ${transicion ? "contenedor-visible" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AcercaDeUhmo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          {mostrarNavbar && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;
