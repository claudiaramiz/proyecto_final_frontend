import React from "react";
import { Button} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';


export const LogoutButton = () =>{
  const { logout } = useAuth0();

  return <Button variant="primary" onClick={() => logout()}> Logout </Button>
};
