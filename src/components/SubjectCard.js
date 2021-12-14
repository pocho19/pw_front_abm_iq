import {Link} from "react-router-dom";

const SubjectCard = ({subject}) => {
    return(
        <div className="card-container-custom">
            <div className="card">
                imagen
                <div className="card-body">
                    <h5 className="card-title">{subject.name}</h5>
                    <p className="card-text">
                        Elementos para agregar a una casa sustentable
                    </p>
                    <Link to={`elements/${subject.name}`}> <a className="btn btn-primary"> Ver más</a> </Link>
                </div>
            </div>
        </div>
    )
}
export default SubjectCard
