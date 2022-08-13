import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getCategories } from '../api/categories';
import { postBlog } from '../api/todos';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const Blog = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [userName, setUserName] = useState('1');
  const [imagen, setImagen] = useState('1.jpg');
  const [imagenURL, setImagenURL] = useState([]);
  const [category, setCategory] = useState('');
  const [val, setVal] = useState();
  const [valDesc, setValDesc] = useState();
  const [valImg, setValImg] = useState();
  const { t } = useTranslation();
  const message = t("messageBlog");
  const titleMessage = t("titleMessageBlog")


  const postedBlog = async () => {
    try {
      let obj = { title, description, category, userName, imagen }
      const added = await postBlog(obj);
      console.log(added);
      if (!added) {
        mostrarAlerta();
        setVal('');
        setValDesc('');
        setImagen('');
        setCategories([]);
        fetchCategories();
        setValImg('');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const mostrarAlerta = () => {
    swal({ titleMessage }, { message });
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

  const onChangeImagen = (e) => {
    setImagen(e.target.value);
    setImagenURL(e.target.files[0]);
    console.log(e.target.value)
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
              <Form.Label>{t("blogTitle")}</Form.Label>
              <Form.Control type="text" placeholder="Enter title" onChange={onChangeTitle} value={val || ''} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>{t("blogText")}</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={onChangeDescription} value={valDesc || ''} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>{t("blogCategory")}</Form.Label>
              <select name="ddlCategories" className='form-control' onChange={cambioCategory}>
                <option key="Seleccionar" value="Seleccionar">{t("blogSelect")}</option>
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
            <Form.Group controlId="formFile" className="mb-3" onChange={onChangeImagen} value={valImg || ''}>
              <Form.Label>{t("blogImage")}</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" onClick={postedBlog}>{t("blogSave")}</Button>{' '}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog;