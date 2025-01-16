import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
