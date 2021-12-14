//import logo from "../logo.svg";
import logo from "../clasificar.png"
import React from "react";
import {Link} from "react-router-dom";
import Register from "./Register";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Casas ecológicamente inteligentes
                </h1>
                <a>
                    Con simples datos de tu casa
                </a>
                <a>
                    calculamos un indicador ecológico.
                </a>
                <p>
                    Ingrese para usar la
                </p>
                <p>
                    <Link to="/system">Aplicación</Link>
                </p>
                <p>
                    <Link to="/tutorial">Tutorial</Link>
                </p>
                <a
                    className="App-link"
                    href="http://www.ieqa.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hecho por Ignacio Quiroga
                </a>
            </header>
        </div>
    )
}
export default Home