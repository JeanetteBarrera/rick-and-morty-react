import PropTypes from "prop-types"
//import { Col, Card, Button } from "react-bootstrap";

const Character = ({ image, name, species, status }) => {
    return (
        <div className="character">
            <div className="container-image">
                <img src={image} alt=""/>
            </div>
            <div className="container-description">
                <h2 className="title">{name}</h2>
                <p>Specie : {species}</p>
                <p>Estatus : {status}</p>
                {/*<button>Go</button> */}
            </div>
        </div>
    )
}

Character.propTypes = { // siendo muy especificos, difinimos la estructura y tipo de datos que se recibe
    characters: PropTypes.shape({
        created: PropTypes.string,
        gender: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
        species: PropTypes.string,
        status: PropTypes.string
    }).isRequired

}

export default Character;

