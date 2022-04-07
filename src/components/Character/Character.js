import PropTypes from "prop-types"
import { Col, Card, Button } from "react-bootstrap";

const Character = ({ character }) => {
    return (
        <Col md={4} sm={12}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        Specie : {character.species}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
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

