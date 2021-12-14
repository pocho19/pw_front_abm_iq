import React, {useState} from "react";
import {httpPost} from "../utils/httpFunctions";
import {useHistory} from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const login = (e) => {
        e.preventDefault()
        httpPost('api/login/', {username: username, password: password}).then( (res)=> {
            console.log(res.data)
            localStorage.setItem('token', res.data.access)
            // history.push('/system')
        })
    }
    const register = (e) => {
        e.preventDefault()
        httpPost('api/register/', {username: username, password: password}).then( (res)=> {
            console.log(res.data)
            localStorage.setItem('token', res.data.access)
            // history.push('/system')

        })
    }

    return (
        <div className='System-general'>
            <h3>Inicie sesión para usar la APP</h3>
            <div>
                <form onSubmit={login}>
                    <fieldset >
                        <legend>Ingrese sus credenciales</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">username</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={username}
                                   onChange={ (e)=> setUsername(e.target.value) }/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">password</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={password}
                                   onChange={ (e)=> setPassword(e.target.value) }/>
                        </div>
                        <button type="submit" className="btn btn-primary">login</button>
                    </fieldset>
                </form>
            </div>
            <pre/>
            <h4>Registrate gratis!</h4>

            <div>
                <form onSubmit={login}>
                    <fieldset >
                        <legend>Ingrese sus credenciales</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">username</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={username}
                                   onChange={ (e)=> setUsername(e.target.value) }/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">password</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={password}
                                   onChange={ (e)=> setPassword(e.target.value) }/>
                        </div>
                        <button type="submit" className="btn btn-primary">login</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}
export default Login