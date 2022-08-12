import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container>
      <Row className="mt-1">
        <Col xs={{ span: 12 }} md={{ span: 8 }} className="mb-5">
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 8 }}>
          <h1>Formulario</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary">Primary</Button>{' '}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog