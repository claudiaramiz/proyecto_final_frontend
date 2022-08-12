import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
                    <h2>Bienvenid@ a Oh My Blog!</h2>
                    <p>Publica todo lo que deseas compartir!</p>
                    <p>
                        <Button as={Link} to="/login" className="ml-1">Ingresa</Button> </p>
                </Col>
                <Col>
                    <img
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="Task Manager" />
                </Col>
            </Row>
        </Container >
    );
}

export default Home;