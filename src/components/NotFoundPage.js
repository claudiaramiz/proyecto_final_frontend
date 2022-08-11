import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function NotFoundPage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <img
                        style={{ width: '100%' }}
                        src="/img/404-not-found.svg"
                        alt="Error" />
                </Col>
                <h4>Te has perdido?</h4>
                <p>Vuelve al <Link to="/">inicio</Link> </p>
            </Row>
        </Container>
    );
}

export default NotFoundPage;