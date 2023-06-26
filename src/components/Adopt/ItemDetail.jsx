import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const ItemDetail = ({ item }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);

  const [modalInsertar, setModalInsertar] = useState(false);

  const abrirModalInsertar = () => {
    setModalInsertar(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const docRef = await addDoc(collection(db, "Solicitudes"), {
        name: name,
        email: email,
        phone: phone,
        message: message,
        namePet: item.nombre,
        nameAge: item.edad,
      });
      setLoader(false);
      alert("Solicitud de adopción enviada, pronto nos contactaremos contigo ❤️");
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <><Modal show={modalInsertar} onHide={() => setModalInsertar(false)}>
      <Modal.Header>
        <Modal.Title>Solicitud Adopción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form" onSubmit={handleSubmit}>
          <h5>Adopta</h5>

          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label>Email</label>
            <input
              className="form-control"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label>Phone</label>
            <input
              className="form-control"
              placeholder="Phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />

            <label>Message</label>
            <textarea
              className="form-control"
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />

          </div>

          <Modal.Footer>
            <Button type="submit" variant="primary"
              // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
              onClick={() => setModalInsertar(false)}>
              Adoptar
            </Button>
            <Button variant="danger" onClick={() => setModalInsertar(false)}>
              Cancelar
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>

      
      <Container>
        <Row>
          <Col className="contdetalle">
            <Card style={{ width: '20rem' }}>
              <Card.Img src={item.imagen} />
            </Card>
            <div className="info">
              <h4>{item.nombre}</h4>
              <h6>- Raza: {item.raza}</h6>
              <h6>- Genero: {item.genero}</h6>
              <h6>- Edad: {item.edad}</h6>
              <h6>- Ciudad: {item.ciudad}</h6>
              <h6>- Caracter: {item.caracter}</h6>
              <h6>- Trato especial: {item.condicionesEspeciales}</h6>
              <h6>- Enfermedad: {item.enfermedad}</h6>
              <h6>- Vacunas: {item.vacunas}</h6>
              <Button variant="success" onClick={abrirModalInsertar}>Adoptar</Button>
            </div>
          </Col>

        </Row>

      </Container></>


  )
}

export default ItemDetail