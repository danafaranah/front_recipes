import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Login = () => {

    const navigate = useNavigate()

    const [userForm,setUserForm] = useState({
        email:"",
        password: ""
    })


const {setIsLogin}=useUser()


    const handleChange = (e) => {
        setUserForm({...userForm, [e.target.name] : e.target.value})
    }


    const LoginUser=(e)=>{
        e.preventDefault();
       if(userForm.email==="jose@gmail.com" && userForm.password==="123"){

        alert("Bienvenido")
        localStorage.setItem("login", true)
        setIsLogin(true)
        navigate("/inicio")

       } else{
        alert("Usuario o contraseña incorrectos")
       }

    }

  return (
    <div className="container mt-5 rounded-end shadow">
      <div className="row">
        <div className="col bg d-none d-lg-block col-md-4 col-xxxl-6 rounded-start">
        </div>


        <div className="col bg-white rounded-end ">
          <div className="text-center">
            {/* <link className="img" rel="stylesheet" href="https://i.pinimg.com/564x/05/62/d0/0562d0b3ddb0e50724b9e2d6e5338487.jpg" /> */}
            <img src="./img/logo.jpg" width="200px" alt="Logo" />
          </div>
          <h2 className="text-center fw-bold text-black mb-5">¡Bienvenido!</h2>
          <form onSubmit={LoginUser}>
            <div className="form-floating mb-5">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  autoFocus 
              name='email'
              onChange={(e)=> handleChange(e)} />
              <label htmlFor="floatingInput">Email </label>
            </div>
            <div className="form-floating mb-5">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  autoFocus 
              name='password'
              onChange={(e)=> handleChange(e)}/>
              <label htmlFor="floatingpassword" >Password</label>
            </div>
            <div className="d-grid mb-5 ">
              <button className="btn btn-outline-dark form-control mt-3">Login</button>
            </div>
            <div className="my-3 ">
              <span> Don`t have acount? <a href="https://www.realmadrid.com/">Sing Up</a></span>
              <br />
              <span><a href="https://pbs.twimg.com/media/EtuQa3CXcAEOy56?format=jpg&name=900x900">Recovery
                  password</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
