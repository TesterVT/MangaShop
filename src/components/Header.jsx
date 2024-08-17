import React, { useState } from 'react';
import AuthModal from './AuthModal';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaBars, FaSearch, FaUser, FaBox, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar className="main-header" variant="light">
        <Container>
          <Navbar.Brand href="#" variant="outline-warning">
            <img
              src="https://avatanplus.com/files/resources/original/57b454b5790bf156986ae4f8.png" // replace with the actual path to your logo
              height="40"
              className="d-inline-block align-top"
              alt="RU-MangaShop"
            />
          </Navbar.Brand>
          <Button variant="warning" className="me-2">
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
      <AuthModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Header;
