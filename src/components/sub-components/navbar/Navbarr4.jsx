import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbarr4.css';

export default function Navbarr4() {
  return (
    <Navbar className="nav-grande4" bg="white" expand="lg">
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
            <Nav.Link><Link className="Menu4" to="/">Inicio</Link></Nav.Link>
            <Nav.Link><Link className="Menu4" to="/adopta">Adopta</Link></Nav.Link>
            <Nav.Link><Link className="Menu4" to="/adopta/perros">Perros</Link></Nav.Link>
            <Nav.Link><Link className="Menu4" to="/adopta/gatos">Gatos</Link></Nav.Link>
            {/* <Nav.Link className="Menu" target="_blank" href="https://www.instagram.com/dasein.accesorios/?igshid=Yzg5MTU1MDY%3D">Ir a @dasein.outfit</Nav.Link> */}
          </Nav>
          {/* <Link to="/carrito"><CardWidget cantidad="10" /></Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
