import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaBars, FaSearch, FaUser, FaBox, FaHeart, FaShoppingCart } from 'react-icons/fa';
import AuthModal from './AuthModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showCatalog, setShowCatalog] = useState(false);

  useEffect(() => {
    // Загружаем категории из файла catalog.json
    fetch('./data/catalog.json')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error loading catalog:', error));
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const toggleCatalog = () => setShowCatalog(!showCatalog);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://avatanplus.com/files/resources/original/57b454b5790bf156986ae4f8.png"
              height="40"
              className="d-inline-block align-top"
              alt="RU-MangaShop"
            />
          </Navbar.Brand>
          <Button variant="warning" className="me-2" onClick={toggleCatalog}>
            <FaBars /> Каталог
          </Button>
          <Form className="d-flex flex-grow-1">
            <FormControl
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">
              <FaSearch />
            </Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleShowModal}>
              <FaUser size={20} /> Вход/Регистрация
            </Nav.Link>
            <Nav.Link onClick={handleShowModal}>
              <FaBox size={20} /> Заказы
            </Nav.Link>
            <Nav.Link href="#favorites">
              <FaHeart size={20} /> Избранное
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart size={20} /> Корзина
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Выпадающий список категорий */}
      {showCatalog && (
        <Dropdown.Menu show className="catalog-dropdown">
          {categories.map((category) => (
            <Dropdown.Item key={category.id} href={'/category/${category.id}'}>
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}

      <AuthModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Header;