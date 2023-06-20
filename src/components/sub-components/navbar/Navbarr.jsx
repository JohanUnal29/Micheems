import React from 'react'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbarr.css';

export default function Navbarr() {
  return (
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
            <Nav.Link><Link className="Menu" to="/nosotros">Adopta</Link></Nav.Link>
            <Nav.Link><Link className="Menu" to="/contacto">Dona</Link></Nav.Link>
            <Nav.Link><Link className="Menu" to="/contacto">Contactanos</Link></Nav.Link>
            {/* <Nav.Link className="Menu" target="_blank" href="https://www.instagram.com/dasein.accesorios/?igshid=Yzg5MTU1MDY%3D">Ir a @dasein.outfit</Nav.Link> */}
          </Nav>
          {/* <Link to="/carrito"><CardWidget cantidad="10" /></Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
