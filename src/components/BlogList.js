import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const BlogList = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <h1>Blogs</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">

          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/users-card.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/male_avatar.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/female_avatar.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/users-card.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/male_avatar.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/female_avatar.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/users-card.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/male_avatar.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }} className="mb-5">
          <Card style={{ width: '95%' }}>
            <Card.Img variant="top" src="/img/female_avatar.svg"
              style={{
                width: '140px', height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BlogList;