// import React, { useEffect, useState } from "react";

function Librocard({ iLibro }) {
  // console.log(iLibro);
  return (
    <>
      <div className="col-4 p-3 ">
        {/* <div className="card " style={{ width: "18rem" }}> */}
        <div className="card mx-1">
          <img
            // src={`./src/assets/libros.jpg`}
            src={iLibro.imagen}
            className=" rounded mx-2 mt-3 d-block"
            alt={iLibro.autor}
          />
          <div className="card-body ">
            <h5 className="card-title">{iLibro.titulo}</h5>
            <p className="card-text">
              {iLibro.generos.map((gener, i) => (
                <li key={i}>{gener}</li>
              ))}
            </p>
            <a href={iLibro.wiki} target="_blank" className="btn btn-primary">
              Mas Informacion...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Librocard;
