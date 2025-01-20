import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import AcercaDeUhmo from "@/pages/AcercaDeUhmo";
import Portfolio from "@/pages/Portfolio";
import Error404 from "@/pages/Error404";
import Contacto from "@/pages/Contacto";
import "./App.css";
function App() {
  const location = useLocation();
  const rutasSinNavbar = ["/error404"];
  const mostrarNavbar = !rutasSinNavbar.includes(location.pathname);

  return (
    <>
      {mostrarNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/acercaDe" element={<AcercaDeUhmo />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
