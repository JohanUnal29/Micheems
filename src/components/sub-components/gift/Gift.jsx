import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Gift.css"

function Gift() {
    return (
        <Container fluid className='Container'>
            <Row>
                <Col><h2 className='Apoya'>Apoya nuestra labor</h2></Col>
            </Row>
            <Row>
                <Col>
                    <a href="https://recarga.nequi.com.co/bdigitalpsl/?_ga=2.28044408.513740999.1687232391-739560750.1687232391#!/">
                        <img className="logotipo" src="https://drive.google.com/uc?export=download&id=1-5sgRqqE-eNrj3W--hzYSFa-WD589bQD" alt="Logo/botón nequi" />
                    </a>
                </Col>

                <Col>
                    <a href="https://recarga-daviplata.epayco.co/meter-plata">
                        <img className="logotipo" src="https://drive.google.com/uc?export=download&id=15IIF_JfAqeQMUyhuByplVdpfc4YTMwYs" alt="Logo/botón nequi" />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col><h2 className='Apoya'>Misión</h2>
                <br /><h6 className='Mision'>Promover la sensibilización colectiva fomentando el respeto a la vida, <br /> 
                el NO al maltrato animal y la adopción responsable,
                soñamos con <br /> convertirnos en una organización líder en la adopción</h6>
                </Col>
                
            </Row>
          
        </Container>
    );
}

export default Gift;