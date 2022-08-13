import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { getTodos } from '../api/todos';


const BlogList = () => {

  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const fetchedtodos = await getTodos();
    //console.log({fetchedtodos});
    setTodos(fetchedtodos);
  }


  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <h1>Blogs</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        {todos.map((todo) => (
          <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
            <Card style={{
              width: '95%',
              heigth: '170px' }}>
            <Card.Img variant="top" src="/img/users-card.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>{todo.title}</Card.Title>
              <Card.Text>
                <h6><p>{todo.category}</p></h6>
                {todo.description}
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>          
        </Col>
        ))}
    </Row>
    </Container >
  )
}

export default BlogList;