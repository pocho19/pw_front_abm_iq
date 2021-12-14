import {Link} from "react-router-dom";
import React from "react";

const Profile = () => {
    return(
        <div className='System-general'>
            <h1>Perfil</h1>
            <pre></pre>
            información del usuario del BACK
            <pre></pre>
            <div>
                <h3>Volver a la <Link to="/system">APP</Link> </h3>
            </div>
        </div>
    )
}
export default Profile