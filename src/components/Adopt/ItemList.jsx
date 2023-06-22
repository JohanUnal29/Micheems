import Item from "./Item";
import { toCapital } from "../helpers/toCapital";
import "./Adopt.css";
import { Container, Row } from 'react-bootstrap';

const ItemList = ( {animales, titulo} ) => {

  return (
    <Container>
      <Row className="justify-content-center">
        {animales.map((animal) => (
          <Item key={animal.id} animal={animal} />
        ))}
      </Row>
    </Container>
  )
}

export default ItemList