//import { Row } from "react-bootstrap"
import Character from "../Character/Character"

const Characters = ({ characters }) => {

    //Componentes de Logica
    //Componentes de presentación

    return (

        <section className="characters">
            {
                characters?.length > 0 && 
                characters.map((character) => <Character key={character.id} {...character} /> )
            }
        </section>
    )
}

export default Characters;