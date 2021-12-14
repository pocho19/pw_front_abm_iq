import React from "react";
import {Link} from "react-router-dom";

const MyHouse = () => {
    const subjects = ['aire inverter', 'termotanque solar','panel solar']
    const ecopoints = 45
    return(
        <div className='System-general'>
            <h1>Mi CASA</h1>
            <pre/>
            Cálculo calificación ecológica:
            <h1> {ecopoints}</h1>
            <pre/>
            <div className='contenedor-elementos'>
            <h4> Lista de elementos que posee la casa: </h4>
            {
                subjects.map( (subject) => {
                    return(
                        <div className="card-title">
                            <div>{subject}</div>
                            <div className='botones'>
                                <button>eliminar</button>
                                <button>detalles</button>
                            </div>

                            <div> </div>
                        </div>

                    )
                })
            }
        </div>
            <div>
                <h3>Volver a la <Link to="/system">APP</Link> </h3>
            </div>
        </div>
    )
}
export default MyHouse