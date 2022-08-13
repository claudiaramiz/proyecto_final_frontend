import React from "react";
import { Button, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export const LogoutButton = () =>{
  const { logout } = useAuth0();

  return <Button variant="primary" onClick={() => logout()}> Logout </Button>

};
export const LogoutNav = () =>{
  const {logout } = useAuth0();

  return  <Nav.Link as={NavLink} to={logout()}>Logout</Nav.Link>
  
};

