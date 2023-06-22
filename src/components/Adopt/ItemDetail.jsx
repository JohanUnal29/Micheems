import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount"
// import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from "../FormAdopt/Form";

const ItemDetail = ({ item }) => {

  return (

    <Container>
      <Row>
        <Col className="contdetalle">
          <Card style={{ width: '20rem' }}>
            <Card.Img src={item.imagen} />
          </Card>
          <div className="info">
            <h4>{item.nombre}</h4>
            <Form></Form>
          </div>
        </Col>

      </Row>
    
    </Container>


  )
}

export default ItemDetail