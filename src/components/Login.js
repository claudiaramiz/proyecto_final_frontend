import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Button} from 'react-bootstrap';

export const LoginButton = () =>{
  const {loginWithRedirect } = useAuth0();

  return <Button variant="primary" onClick={() => loginWithRedirect()}> Login </Button>

};


