import axios from 'axios'
import React from 'react'

export const Receta = () => {

    const navigate = useNavigate()
    const{id}=useParams()
    const[receta, setReceta]=useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const searchReceta = async () 

      try {

        setLoading(true)

        const {data} = await axios.get(

            `http://localhost:8080/recetas/${id}`

        setLoading(false)

        if(data.Error){

           Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Recipe Not Found By ID",
            timer: 3000,
            });
            return
        }

        setReceta(data.data)

      } catch (error) {

        setLoading(false);
        console.log("Error en SearchReceta", error.message);
      }

      searchReceta()
    
    }, [id])

  return (
    <div>
        {loading ? (
        <Loading />
      ) : (
        <div className="card mt-5">
          {!error ? (
            <div className="row">
              <div className="col-xxl-4">
                {receta.img === "N/A" ? (
                  <img src="/img/foodd.png" alt="" />
                ) : (
                  <img src={receta.img} alt="" />
                )}
              </div>
              <div className="col-xxl-8">
                <div className="card-body">
                  <h4 className="card-title">
                    {receta.nombreReceta} <strong>{receta.tiempo}</strong>
                  </h4>
                  <p className="card-text">{receta.intruccionesReceta}</p>
                  <div className="d-flex justify-content-between">
                    <h5 className="card-text">
                      <span>Categoria {receta.categoria.nombreCategoria}</span>
                    </h5>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate(-1)}
                    >
                      {" "}
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-body text-center">
              <h1>ERROR_Recipe not found, incorrect ID</h1>
              <Link to="/" className="btn btn-success">
                Back To Home Page
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
