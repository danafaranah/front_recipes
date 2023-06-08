import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { Showcase } from "../components/Showcase";
import {RecetaCard} from "../components/RecetaCard"

export const Inicio = () => {
  const navigate = useNavigate();

  // const [query, setQuery] = useState("");
  // const [params, setParams] = useState("");

  // const handleQuery = () => {
  //   navigate("/query?q=" + query);
  // };

  // const handleParams = () => {
  //   navigate("/parametro/" + params);
  // };

  return (
    <>

      <Showcase />

      
      {/* <div>
        <h1>whats up from home page </h1>
        <p>asignar una query</p>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => handleQuery()}>Enviar</button> */}

        {/* parametros */}
        {/* <p>asignar una parametro</p>
        <input type="text" onChange={(e) => setParams(e.target.value)} />
        <button onClick={() => handleParams()}>Enviar</button>
      </div> */}
    </>
  );
};
