import { Row } from "react-bootstrap"
import Character from "../Character/Character"

const Characters = ({ characters }) => {

    //Componentes de Logica
    //Componentes de presentación

    return (

        <Row className="justify-content-center">
            {
                characters?.length > 0 && 
                characters.map((character) => <Character key={character.id} character={character} /> )
            }
        </Row>
    )
}

export default Characters;