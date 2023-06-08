import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Navbar = () => {


const {isLogin,setIsLogin}=useUser()

const salir=()=>{
    setIsLogin(false)
    localStorage.setItem("login",false)
}


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              isLogin? <ul className="navbar-nav me-auto me-0 mb-lg-0">
              
  
              <li className="nav-item">
                <NavLink className="nav-link " to={"/inicio"}>
                  Inicio
                </NavLink>
     
    
    
              </li>
  
              

              <li className="nav-item">
                <button className="btn nav-link ms-auto me-2 " onClick={salir}>
                  Salir
                </button>
              </li>


            </ul> : <ul className="navbar-nav ms-auto me-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={
                    (({ isActive }) => (isActive ? "text-danger" : "text-succes"),
                    "nav-link")
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul> 
            }
          
        </div>
      </div>
    </nav>
  );
};
