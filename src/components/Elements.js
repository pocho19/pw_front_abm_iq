import '../App.css'
import React, {useState,useEffect} from "react";
import SubjectCard from "./SubjectCard";
import {Link} from "react-router-dom";
import {httpGet, httpPost} from "../utils/httpFunctions";
// import {useEffect, useState} from "react";

const Elements = () => {
    const subjects = ['aire', 'celefon', 'termotanque solar','panel solar']
    const [elements, setElements] = useState([])

    const [name , setName] = useState([])
    const [description , setDescription] = useState([])
    const [ecoPoint , setEcopoint] = useState([])

    const fetchElements = () => {
        httpGet('api/elements/')
            .then( (res) => setElements(res.data) )
        console.log( "elements" , elements)
    }

    const createElement = ( ) => {
        httpPost('api/elements/',{name: name, description: description, ecoPoints: ecoPoint})
            .then( fetchElements )
    }

    useEffect(fetchElements,[])
    let finalSubjects;

    return(
        <div className='System-general'>
            <div className='general'>
                {/*<div className='navbar'>*/}
                {/*    <h4 className='navba-element'>Inicio</h4>*/}
                {/*    <h4 className='navba-element'>Perfil</h4>*/}
                {/*    <h4 className='navba-element'>Elementos</h4>*/}
                {/*</div>*/}
                <div className='main-div'>
                    <h1 className='custom-title'> ELEMENTOS</h1>
                    <p className='description'>Estos elementos puede tener tu casa </p>
                </div>
                <div className='contenedor-elementos'>
                    <h4> Lista de elementos: </h4>
                    {
                        subjects.map( (subject) => {
                            return(
                                <div className="card-title">
                                    <div>{subject}</div>
                                    <div className='botones'>
                                        <button>agregar</button>
                                        <button>detalles</button>
                                    </div>

                                    <div> </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div>
                    <form onClick={createElement}>
                        <fieldset >
                            <legend>Crear elemento</legend>
                            <div className="mb-3">
                                <label htmlFor="disabledTextInput" className="form-label">name</label>
                                <input type="text" id="disabledTextInput" className="form-control" value={name}
                                       onChange={ (e)=> setName(e.target.value) }/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledTextInput" className="form-label">description</label>
                                <input type="text" id="disabledTextInput" className="form-control" value={description}
                                       onChange={ (e)=> setDescription(e.target.value) }/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledTextInput" className="form-label">ecopoint</label>
                                <input type="text" id="disabledTextInput" className="form-control" value={ecoPoint}
                                       onChange={ (e)=> setEcopoint(e.target.value) }/>
                            </div>
                            <button type="submit" className="btn btn-primary">Crear</button>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <h3>Volver a la <Link to="/system">APP</Link> </h3>
                </div>
            </div>
        </div>
    )
}
export default Elements