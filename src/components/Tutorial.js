import {Link} from "react-router-dom";

const Tutorial = () => {
    return (
        <div className='System-general'>
            <h1>
                Tutorial
            </h1>
            <a>
                *video explicativo de como se usa el sistema*
            </a>
            <div className='video'>
            </div>
            <p>
                <Link to="/home">Inicio</Link>
            </p>
            <p>
                <Link to="/system">Aplicación</Link>
            </p>
        </div>
    )
}
export default Tutorial