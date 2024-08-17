// Footer.jsx
import React from 'react';
import { Container, Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FaCcMastercard, FaCcVisa, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" bg="light" variant="light">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <h5>Подпишитесь на нашу рассылку, чтобы быть в курсе скидок, акций и событий!</h5>
            <Form className="newsletter-form">
              <Form.Control type="email" placeholder="E-mail" className="me-2" />
              <Button variant="warning">Подписаться</Button>
            </Form>
          </Col>
        </Row>
        <Row className="info-row">
          <Col md={4} className="text-center text-md-start">
            <ul className="footer-links">
              <li><a href="#">Акции</a></li>
              <li><a href="#">Оплата и доставка</a></li>
              <li><a href="#">Возврат и обмен</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <Button variant="link" href="#">
              <i className="bi bi-vk"></i>
            </Button>
            <Button variant="link" href="#">
              <i className="bi bi-telegram"></i>
            </Button>
             <FaPhoneAlt /> 000-000-000
          </Col>
          <Col md={4} className="text-center text-md-end">
            <FaCcVisa size={80} className="payment-icon"/>
            <FaCcMastercard size={80} className="payment-icon" />
            <img src="path/to/mir.png" alt="MIR" className="payment-icon" />
            <img src="path/to/yoo.png" alt="Kassa" className="payment-icon" />
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={12}>
            <p>© Аниме магазин в России Fast Anime 2004-2024</p>
            <p>Все права защищены</p>
            <p>Интернет-магазин аниме аксессуаров, фигурок и манги</p>
            <p>
              <a href="#" className="text-muted">Политика конфиденциальности</a> | <a href="#" className="text-muted">Пользовательское соглашение</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
