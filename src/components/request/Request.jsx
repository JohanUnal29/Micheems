import React, { useEffect, useState } from 'react';
import { Modal, Button, Navbar, Table } from 'react-bootstrap';
import Navbarr from '../sub-components/navbar/Navbarr';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Queue } from './queue.js';

export default function Request() {
  const [cola, setCola] = useState(new Queue());
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalAceptar, setModalAceptar] = useState(false);
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);

  useEffect(() => {
    const solicitudesRef = collection(db, "Solicitudes");
    getDocs(solicitudesRef)
      .then((resp) => {
        const data = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        const nuevaCola = new Queue();
        data.forEach((elemento) => {
          nuevaCola.enqueue(elemento);
        });
        setCola(nuevaCola);
      })
      .catch((error) => {
        console.log("Error al obtener los datos:", error);
      });
  }, []);

  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    (caso === 'Eliminar') ? setModalEliminar(true) : setModalAceptar(true);
  };

  const eliminar = () => {
    const nuevaCola = new Queue();
    while (!cola.isEmpty()) {
      const elemento = cola.dequeue();
      if (elemento.id !== paisSeleccionado.id) {
        nuevaCola.enqueue(elemento);
      }
    }
    setCola(nuevaCola);
    setModalEliminar(false);
  };

  const aceptar = () => {
    const nuevaCola = new Queue();
    while (!cola.isEmpty()) {
      const elemento = cola.dequeue();
      if (elemento.id !== paisSeleccionado.id) {
        nuevaCola.enqueue(elemento);
      }
    }
    setCola(nuevaCola);
    setModalAceptar(false);
  };

  return (
    <div className="App">
      <Navbarr></Navbarr>
      <h2>Solicitudes de adopción</h2>
      <br /><br />
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID solicitud</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Motivo adopción</th>
              <th>Nombre Mascota</th>
              <th>Edad Mascota</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cola.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.name}</td>
                <td>{elemento.email}</td>
                <td>{elemento.phone}</td>
                <td>{elemento.message}</td>
                <td>{elemento.namePet}</td>
                <td>{elemento.nameAge}</td>
                <td>
                  <Button variant="success" style={{ marginRight: '10px' }} onClick={() => seleccionarPais(elemento, 'Aceptar')}>Aceptar</Button>
                  <Button variant="danger" onClick={() => seleccionarPais(elemento, 'Eliminar')}>Rechazar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={modalEliminar} onHide={() => setModalEliminar(false)}>
        <Modal.Body>
          ¿Estás seguro que deseas rechazar la solicitud {paisSeleccionado && paisSeleccionado.nombre}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={eliminar}>
            Sí
          </Button>
          <Button variant="secondary" onClick={() => setModalEliminar(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalAceptar} onHide={() => setModalAceptar(false)}>
        <Modal.Body>
          ¿Deseas aceptar la solicitud {paisSeleccionado && paisSeleccionado.nombre}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={aceptar}>
            Sí
          </Button>
          <Button variant="secondary" onClick={() => setModalAceptar(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
