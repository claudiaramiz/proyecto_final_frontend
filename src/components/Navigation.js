import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
            <Navbar.Brand as={NavLink} to="/">
                Task Manager
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">Blog List</Nav.Link>
                    <Nav.Link as={NavLink} to="/Blog">Blog</Nav.Link>
                    <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navigation;