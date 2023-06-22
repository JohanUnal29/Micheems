import React, { useState } from 'react';
import { Modal, Button, Navbar } from 'react-bootstrap';
import Navbarr from '../sub-components/navbar/Navbarr';
const dataPaises = [
  { id: 1, nombre: "Filipinas", minutos: 241 },
  { id: 2, nombre: "Brasil", minutos: 225 },
  { id: 3, nombre: "Colombia", minutos: 216 },
  { id: 4, nombre: "Nigeria", minutos: 216 },
  { id: 5, nombre: "Argentina", minutos: 207 },
  { id: 6, nombre: "Indonesia", minutos: 195 },
  { id: 7, nombre: "Emiratos Árabes Unidos", minutos: 191 },
  { id: 8, nombre: "México", minutos: 190 },
  { id: 9, nombre: "Sudáfrica", minutos: 190 },
  { id: 10, nombre: "Egipto", minutos: 186 },
];

export default function Request() {
  const [data, setData] = useState(dataPaises);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    id: '',
    nombre: '',
    minutos: ''
  });

  const seleccionarPais = (elemento, caso) => {
    setPaisSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaisSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const editar = () => {
    const dataNueva = data.map(pais => {
      if (pais.id === paisSeleccionado.id) {
        return {
          ...pais,
          minutos: paisSeleccionado.minutos,
          nombre: paisSeleccionado.nombre
        };
      }
      return pais;
    });

    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    const dataNueva = data.filter(pais => pais.id !== paisSeleccionado.id);
    setData(dataNueva);
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setPaisSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    const valorInsertar = paisSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    const dataNueva = [...data, valorInsertar];
    setData(dataNueva);
    setModalInsertar(false);
  };

  return (
    <div className="App">
      <Navbarr></Navbarr>
      <h2>Países en los que la gente pasa más tiempo en redes sociales (2019)</h2>
      <br />
      <Button variant="success" onClick={abrirModalInsertar}>Insertar</Button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Minutos (por día)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.minutos}</td>
              <td>
                <Button variant="primary" onClick={() => seleccionarPais(elemento, 'Editar')}>Editar</Button>{"   "}
                <Button variant="danger" onClick={() => seleccionarPais(elemento, 'Eliminar')}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={modalEditar} onHide={() => setModalEditar(false)}>
        <Modal.Header>
          <Modal.Title>Editar País</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={paisSeleccionado && paisSeleccionado.id}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={paisSeleccionado && paisSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={paisSeleccionado && paisSeleccionado.minutos}
              onChange={handleChange}
            />
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editar}>
            Actualizar
          </Button>
          <Button variant="danger" onClick={() => setModalEditar(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalEliminar} onHide={() => setModalEliminar(false)}>
        <Modal.Body>
          Estás seguro que deseas eliminar el país {paisSeleccionado && paisSeleccionado.nombre}?
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

      <Modal show={modalInsertar} onHide={() => setModalInsertar(false)}>
        <Modal.Header>
          <Modal.Title>Insertar País</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br />

            <label>País</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={paisSeleccionado ? paisSeleccionado.nombre : ''}
              onChange={handleChange}
            />
            <br />

            <label>Minutos</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={paisSeleccionado ? paisSeleccionado.minutos : ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={insertar}>
            Insertar
          </Button>
          <Button variant="danger" onClick={() => setModalInsertar(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
