import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RecetaCard = ({receta}) => {
  return (
    <div className="container">
      {/* Recetas */}
          <Link
            to={`/description/${receta.id}`}
            key={receta.id}
            className="col-md-4 my-3 text-decoration-none text-center"
          >
            <div className="card bg-dark">
              <div className="card-header">
                {receta.img === null ? (
                  <img
                    src="./img/foodd.png"
                    className="card-img-top mt-2 rounded-circle"
                    alt="img"
                  />
                ) : (
                  <img
                    src={receta.img}
                    className="card-img-top mt-2 rounded-circle"
                    alt="img"
                  />
                )}
                <div className="card-body">
                  <div className="btn btn-outline-warning btn-rounded">
                    {receta.categoria.nombreCategoria}
                  </div>
                </div>
                <footer className=" text-warning">
                  <h3>{receta.nombreReceta}</h3>
                </footer>
              </div>
            </div>
          </Link>
    </div>
  );
};
