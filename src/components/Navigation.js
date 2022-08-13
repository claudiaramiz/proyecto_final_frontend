import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Navigation = () => {
    const {isAuthenticated} = useAuth0();

    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
            <Navbar.Brand as={NavLink} to="/">
                Oh My Blog!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/BlogList">Blogs</Nav.Link>
                    {isAuthenticated ? (
                        <>
                        <Nav.Link as={NavLink} to="/Categories">Categories</Nav.Link>
                        <Nav.Link as={NavLink} to="/Blog">Nuevo Blog</Nav.Link>
                            </>
                         ) : (
                            <></>
                     )}     
                </Nav>
            </Navbar.Collapse>
            {isAuthenticated ? (
                        <>
                       
                        <LogoutButton />
                            </>
                         ) : (
                            <LoginButton />
                     )}
        </Navbar>

    );
}

export default Navigation;