
import { Container, Row, Col} from 'react-bootstrap';
import {LoginButton} from './Login'
import { LogoutButton } from './Logout';
import {Profile} from './Profile'
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
    const {isAuthenticated} = useAuth0();
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
                    <h2>Bienvenid@ a Oh My Blog!</h2>
                    <p>Publica todo lo que deseas compartir!</p>
                 
                    <p></p>   
                    {isAuthenticated ? (
                        <>
                        <Profile />
                        <p></p>
                        <LogoutButton />
                            </>
                         ) : (
                            <LoginButton />
                     )}
                        
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