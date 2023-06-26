import React from 'react'
import { useContext, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbarr.css';
import { BsFillPersonFill } from 'react-icons/bs';
export default function Navbarr() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalInsertar, setModalInsertar] = useState(false);
  const [veri, setVeri] = useState(false);

  const abrirModalInsertar = () => {
    console.log('Abriendo modal');
    setModalInsertar(true);
  };

  const comparar = () => {
    console.log('sesión');
    const user = "admin";
    const contraseña = "admin";
    if (user == email && contraseña == password) {
      setVeri(true);
    }
    else {
      setVeri(false);
    }
    setModalInsertar(false);
  };



  return (
    //
    <><Modal show={modalInsertar} onHide={() => setModalInsertar(false)}>
      <Modal.Header>
        <Modal.Title>Inicio de sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="form-group">

          <label>Email</label>
          <input
            className="form-control"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <br />

          <label>Contraseña</label>
          <input
            className="form-control"
            placeholder="Contraseña"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <br />

        </div>

        <Modal.Footer>
          <Button type="submit" variant="primary"
            // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            onClick={comparar}>
            Adoptar
          </Button>
          <Button variant="danger" onClick={() => setModalInsertar(false)}>
            Cancelar
          </Button>
        </Modal.Footer>

      </Modal.Body>
    </Modal>

      <Navbar className="nav-grande" bg="transparent" expand="lg">
        <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <div className="logo-container">
            <Navbar.Brand>
              <Link to="/">
                <a className="navbar-brand col-6">
                  <img className="logotipo" src="https://drive.google.com/uc?export=download&id=1924cU6mFI_lXAvhY7VAPks-9TgXW0Kmu" alt="Logo adopta un cheems" />
                </a>
                {/* <span className="logo-title">Adopta un cheems</span> */}
              </Link>
            </Navbar.Brand>

          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link><Link className="Menu" to="/">Inicio</Link></Nav.Link>
              <Nav.Link><Link className="Menu" to="/adopta">Adopta</Link></Nav.Link>
              {
                !veri &&
                <Button variant="outline-light btn-transparent" className="login-button" onClick={abrirModalInsertar}>
                  <BsFillPersonFill className="login-icon" />
                  Iniciar sesión
                </Button>
              }
              {
                veri && <Nav.Link><Link className="Menu" to="/adopcion">Solicitudes</Link></Nav.Link>
              }


              {/* <Nav.Link className="Menu" target="_blank" href="https://www.instagram.com/dasein.accesorios/?igshid=Yzg5MTU1MDY%3D">Ir a @dasein.outfit</Nav.Link> */}
            </Nav>
            {/* <Link to="/carrito"><CardWidget cantidad="10" /></Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar></>

  )
}
