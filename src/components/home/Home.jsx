/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import Navbarr from '../sub-components/navbar/Navbarr';
import './Home.css'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import Gift from '../sub-components/gift/Gift';
//Componentes

//Core

/*#############################################
                 Logica
###############################################*/
const Home = () => {//Funcion constructora

  console.log("Home");
  return (

    <Fragment>
      <div className='image'>
        <div>
          {<><Navbarr /><Container className="contener d-flex flex-column justify-content-center align-items-center text-center h-100">
            <h1 className='titulo'>EL ARTE DE ADOPTAR</h1>
            <h2 className='subtitulo'> Buscamos facilitar a los peluditos <br /> encontrar un hogar <br /> lleno de mucho amor y estabilidad</h2>
            <Button variant="primary" style={{ borderRadius: '5px', backgroundColor: 'purple', borderColor: 'purple' }}><Link className="Menu" to="/nosotros">Adopta</Link></Button>
          </Container></>}
        </div>
      </div>
      <div>
        {<Gift/>}
      </div>
    </Fragment>

  )

}

/*#############################################
                 Exportacion
###############################################*/
export default Home
