import React, { useState } from "react";
import { Container, Row, Col, Alert } from 'react-bootstrap';

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  // User Login info
  const database = [
    {
      "id": 1,
      "lastname": "Ramirez",
      "firstname": "Claudia",
      "username": "claudiar",
      "password": "12345"
    },
    {
      "id": 2,
      "lastname": "Soto",
      "firstname": "Carolina",
      "username": "carosoto",
      "password": "54321"
    },
    {
      "id": 3,
      "lastname": "Estrada",
      "firstname": "Caro",
      "username": "estrada",
      "password": "12367"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <div className="form-outline mb-6">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="form-label">Username </label>
                <input type="text" name="uname" className="form-control" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label className="form-label">Password </label>
                <input type="password" name="pass" className="form-control" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="input-container">
                <div className="input-container">&nbsp;</div>
                <input type="submit" className="btn btn-primary btn-block" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>

  );

  return (
    <div className="app">
      <div className="login-form">
        <Alert.Heading>Sign In</Alert.Heading>
        <div className="title"></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;