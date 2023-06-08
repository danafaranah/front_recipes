import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "./Loading";
import {RecetaCard} from "./RecetaCard"

export const Recetas = () => {

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [recetas, setRecetas] = uReState([]);
  const [inputSearch, setImputSearch] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const q = params.get("q") || "";
    setImputSearch(q);
    q === "" ? setRecetas([]) : getRecetas(q);
    getRecetas();
  }, [params]);

  const getRecetas = async (q) => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `http://localhost:8080/recetas/search?nom=${q}`
      );
      setRecetas(data.Search);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("Error en getRecetas", error.message);
    }
  };

  const search = (e) => {
    
    if(e.target.value ===""){
       
        return clean()

    }

    setImputSearch(e.target.value);
    getRecetas(e.target.value);
    navigate(`?q=${e.target.value}`);
  };

  const clean = () =>{
    setRecetas([])
    setImputSearch("")
    navigate("")
  }
  
  return (
    <div>
        <Search search={search} inputSearch={inputSearch}/>{loading?<Loading/>
    :<section className="row">
    {recetas?(recetas.map((receta)=>(
        <RecetaCard receta={receta} key={receta.id}/>
    ))
    ) : (

        <div className="text-center text-white mt-5">
            <h1> No hay resultados en la búsqueda de {inputSearch}</h1>{" "}
        </div>
        )}
    </section>
    }
   </div>
  )
}
