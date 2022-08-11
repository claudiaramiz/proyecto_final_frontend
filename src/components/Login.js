import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import md5 from 'md5';

const baseUrl = "http://localhost:3001/usuarios";

class Login extends Component {

  state = {
    form: {
      username: '',
      password: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.targe.value
      }
    });
  }

  iniciarSesion = async () => {
    await axios.get(baseUrl, { params: { username: this.state.form.username, password: md5(this.state.form.password)}})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    return (
      <Container>
        <Row className="mt-5">
          <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
            <div className='form-outline mb-4'>
              <input type="text" name="username"
                onChange={this.handleChange}
                className="form-control" />
              <label className="form-label">User name</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" name="password"
                onChange={this.handleChange}
                className="form-control" />
              <label className="form-label">Password</label>
            </div>
            <div className="row mb-4">
              <button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>this.iniciarSesion()}>Sign in</button>
            </div >
          </Col>
        </Row>
      </Container>
    );

  }

}

export default Login