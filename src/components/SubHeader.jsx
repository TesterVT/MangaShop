import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaVk, FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';

const SubHeader = () => {
  return (
    <Navbar className='purple' variant='dark'>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#promotions">Акции</Nav.Link>
          <Nav.Link href="#payment-delivery">Оплата и доставка</Nav.Link>
          <Nav.Link href="#returns-exchange">Возврат и обмен</Nav.Link>
          <Nav.Link href="#about-us">О нас</Nav.Link>
          <Nav.Link href="#contacts">Контакты</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="https://vk.com">
            <FaVk size={20} />
          </Nav.Link>
          <Nav.Link href="https://telegram.org">
            <FaTelegramPlane size={20} />
          </Nav.Link>
          <Nav.Link href="tel:+78007754565">
            <FaPhoneAlt size={20} /> 8 (800) 775-45-65
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SubHeader;
