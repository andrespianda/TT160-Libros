// import { useState } from "react";
import { Route,  Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Libro from "./components/Libro";
import Contador from "./components/Contador";
import CargaLibros from "./components/CargaLibros";

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/CargarLibros" element={<CargaLibros />} />
      <Route path="/" element={<Libro />} />
    </Routes>
      {/* <Libro /> */}
      {/* <Contador/> */}
    </>
  );
}

export default App;
