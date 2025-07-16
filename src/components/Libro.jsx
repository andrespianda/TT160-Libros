import React, { useEffect, useState } from "react";
// import misLibrosF from "../data/libros.json";
import Librocard from "./Librocard";

function Libro() {
  const [misLibros, setMisLibros] = useState([]);

  useEffect(() => {
  const obtenerLibros = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/libros");
        // if (!response.ok) {
        //   throw new Error("Error al obtener los libros");
        // }
        //console.log(await response.json());
         const data = await response.json();

         setMisLibros(data)
         //console.log(data)
         //return data
         //console.log(misLibros)
        } catch (error) {
          console.error("Error:", error);
          return error;
        } 
        
      }
      obtenerLibros()
      
      
   

}, []);
  return (
    <>
      <section>
        <h2 className="text-center">Mis Libros Favoritos</h2>
        <div className="text-info bg-dark text-center">
          <p>
            El total libros disponibles es: <strong>{misLibros.length}</strong>
          </p>
        </div>
        <div className="container">
          <div className="row   ">
            {
              // console.log(misLibros, "revisar")
            misLibros.map(  (libro, i) => (
              <Librocard key={i} iLibro={libro} />
            ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Libro;
