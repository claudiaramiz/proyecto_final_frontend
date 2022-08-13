import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const LoginButton = () =>{
  const {loginWithRedirect } = useAuth0();

  return <Button variant="primary" onClick={() => loginWithRedirect()}> Login </Button>

};
export const LoginNav = () =>{
  const {loginWithRedirect } = useAuth0();

  return  <Nav.Link as={NavLink} to={loginWithRedirect}>Login</Nav.Link>
  
};

