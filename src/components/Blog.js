import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getCategories } from '../api/categories';
import { postBlog } from '../api/todos';

const Blog = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [userName, setUserName] = useState('1');
  const [imagen, setImagen] = useState('1.jpg');
  const [category, setCategory] = useState('Nada seleccionado');
  const [val, setVal] = useState();
  const [valDesc, setValDesc] = useState();

  const postedBlog = async () => {
    try {
      let obj = { title, description, category, userName, imagen }
      const added = await postBlog(obj);
      console.log(added);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCategories() {
    const fetchedCategories = await getCategories();
    setCategories(fetchedCategories);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value)
    setVal(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value)
    setValDesc(e.target.value);
  }

  const cambioCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <Container>
      <Row className="mt-1">
        <Col xs={{ span: 12 }} md={{ span: 8 }} className="mb-1">
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 8 }}>
          <h1>Blog</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" onChange={onChangeTitle} value={val || ''} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={onChangeDescription} value={valDesc || ''} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Category</Form.Label>
              <select name="ddlCategories" className='form-control' onChange={cambioCategory}>
                <option key="Seleccionar" value="Seleccionar">Seleccionar elemento</option>
                {categories && categories.map((category) => (
                  <>
                    <option key={category.category} value={category.category}>
                      {category.category}</option>
                  </>
                )
                )
                }
              </select>
              {/* <Form.Label>El elemento seleccionado es {category}</Form.Label> */}
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" onClick={postedBlog}>Save</Button>{' '}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog;