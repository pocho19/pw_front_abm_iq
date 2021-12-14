import {useParams} from "react-router-dom";

const ElementsDetail = ({name, description, eficiencia}) => {
    const displayEficiencia = eficiencia ? ('suma '+eficiencia+'eficiencia') : ('No hay eficiencia especificada')

    let {id} = useParams();

    return(
        <div>
            detalle unico
            <h1>{name}</h1>
            <h2>el id es: {}</h2>
            <h2>{description}</h2>
            <p>{displayEficiencia}</p>
        </div>
    )
}
export default ElementsDetail