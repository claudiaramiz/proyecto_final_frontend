import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { getCategories, postCategory } from '../api/categories';
import swal from 'sweetalert';

const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [catDescription, setCatDescription] = useState('');
  const [val, setVal] = useState();
  const [valDesc, setValDesc] = useState();

  async function fetchCategories() {
    const fetchedCategories = await getCategories();
    setCategories(fetchedCategories);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  // const removeCategory = async (id) => {
  //   const deleted = await deleteCategory(id);
  //   console.log(deleted);
  // };

  const postedCategory = async () => {
    try {
      let obj = { category, catDescription }
      const added = await postCategory(obj);
      console.log(added);
      if (!added) {
        mostrarAlerta();
        setVal('');
        setValDesc('');
      }
      fetchCategories();

    } catch (error) {
      console.log(error);
    }
  }

  const onChangeName = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value)
    setVal(e.target.value);
  }

  const onChangeDesc = (e) => {
    setCatDescription(e.target.value);
    console.log(e.target.value)
    setValDesc(e.target.value);
  }

  const mostrarAlerta = () => {
    swal("Categoria creada", "Se ha creado la categoria exitosamente");
  }

  return (
    <Container>
      <Row className="mt-1">
        <Col xs={{ span: 12 }} md={{ span: 12 }} className="mb-5">
          <h1>Categories</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-1">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="txtName" placeholder="Enter title" onChange={onChangeName} value={val || ''} />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="txtDescription" placeholder="Enter description" onChange={onChangeDesc} value={valDesc || ''} />
              <Button variant="primary" style={{ widt: '15rem' }} onClick={postedCategory}>Save</Button>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-1">
          {categories && categories.map((category) => (
            <>
              <Card style={{
                width: '18rem',
                padding: '1rem',
                alignContent: 'center'
              }}>
                <Card.Body>
                  <Card.Title>{category.category}</Card.Title>
                  <Card.Text>
                    {category.catDescription}
                  </Card.Text>
                  {/* <Button variant="danger" onClick={() => removeCategory()}>Delete</Button> */}
                </Card.Body>
              </Card>

            </>
          )
          )
          }
        </Col>
      </Row>
    </Container >
  )
}

export default Categories;