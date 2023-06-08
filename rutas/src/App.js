import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { useUser } from "./context/UserContext";
import { Inicio } from "./Pages/Inicio";
import { Login } from "./Pages/Login";
import { Receta } from "./components/Receta";

function App() {
    const { isLogin } = useUser();

    const PublicRoute = ({ children }) => {
        return isLogin ? < Navigate to = "/inicio" / > : children;
    };

    const PrivateRoute = ({ children }) => {
        return isLogin ? children : < Navigate to = "/" / > ;
    };

    return (
        // Asi definimos la rutas de nuestras paginas

        <
        div >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { <
            PublicRoute > { " " } <
            Login / > { " " } <
            /PublicRoute>
        }
        />{" "} <
        Route path = "/inicio"
        element = { <
            PrivateRoute >
            <
            Route path = "/description/:id"
            element = { < Receta / > }
            />{" "} <
            /PrivateRoute>
        }
        />{" "} {
            /* <Route
                                                                                        path="/nosotros"
                                                                                        element={
                                                                                          <PrivateRoute>
                                                                                            <Nosotros />
                                                                                          </PrivateRoute>
                                                                                        }
                                                                                      />

                                                                                      <Route
                                                                                        path="/query"
                                                                                        element={
                                                                                          <PrivateRoute>
                                                                                            <Query />
                                                                                          </PrivateRoute>
                                                                                        }
                                                                                      />
                                                                                      <Route
                                                                                        path="/parametro/:nombre"
                                                                                        element={
                                                                                          <PrivateRoute>
                                                                                            <Params />
                                                                                          </PrivateRoute>
                                                                                        } */
        } { " " } { /* /> */ } { " " } <
        /Routes>{" "} <
        /BrowserRouter>{" "} <
        /div>
    );
}

export default App;