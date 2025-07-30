import React from 'react'
import { useState } from 'react'
import misLibros from '../data/libros.json'
import { useEffect } from 'react'

export default function CargaLibros() {

  const[libros,setLibros] = useState()
  

  useEffect(() => {
    setLibros(misLibros)
  }, [])



  

   const cargaLib = async ()=>{
    console.log(libros)
    // console.log(misLibros)
    // setLibros(misLibros)
          try {
        const response = await fetch("http://localhost:3000/cargaMasiva",{
          method: 'POST',
          body: JSON.stringify(misLibros),
          headers:{'content-type': 'application/json'},
        })
       // .then(res => res.json())
        ;
        console.log(response)
        // if (!response.ok) {
        //   throw new Error("Error al obtener los libros");
        // }
        //console.log(await response.json());
         //const data = await response.json();

         //setLibros(data)
         //console.log(data)
         //return data
         //console.log(misLibros)
        } catch (error) {
          console.error("Error:", error);
          return error;
        } 
  }
    

  return (
    <>

        <h1>Carga de Libros</h1>
        <button className="btn-primary"  onClick={cargaLib}>Cargar Libros</button>
    </>
  )
}
