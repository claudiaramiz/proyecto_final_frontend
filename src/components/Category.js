import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Category = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h1>Category</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
            <Button variant="primary">Primary</Button>{' '}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Category;