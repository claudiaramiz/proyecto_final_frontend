import { Container, Row, Col } from 'react-bootstrap';
import { LoginButton } from './Login'
import { LogoutButton } from './Logout';
import { Profile } from './Profile'
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { isAuthenticated } = useAuth0();
    const {t} = useTranslation();

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
                    <h2>{t("title")}</h2>
                    <p>{t("welcome")}</p>

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