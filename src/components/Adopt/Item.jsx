import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, Button } from 'react-bootstrap';
import "./Adopt.css";
const Item = ({ animal }) => {
  return (
    <Col sm={6} md={4} lg={3} className="item-card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={animal.imagen} alt={animal.nombre} />
          <Card.Body>
            <Card.Title>{animal.nombre}</Card.Title>
            <Card.Text>{animal.ciudad}</Card.Text>
            <Button variant="primary" style={{ backgroundColor: 'black'}}>
              <Link to={`/item/${animal.id}`} style={{ textDecoration: 'none', color: 'white' }}>Ver más</Link>
            </Button>
          </Card.Body>
        </Card>
    </Col>
  )
}

export default Item