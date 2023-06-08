import React, { useState } from 'react'
import axios, { Axios } from "axios"
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

export const Search = () => {

  return (

    
 // <!-- START SEARCH -->

  <section className="bg-warning text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Buscar recetas</h3>
          <div className="input-group mt-2 news-input">
            <input type="text" className="form-control" placeholder="Busque aqui" onChange={(e)=>search(e)} />
        <button className="btn btn-dark btn-lh">buscar</button>
      </div>
    </div>
  </div>
</section>

/* <!--END SEARCH  --> */

  )
}
