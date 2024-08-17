import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HitsBlock.css';

const HitsBlock = ({ products, onProductClick }) => {


  return (
    <Container className="hits-block-container">
      <div className="hits-block">
        <h2 className="hits-block-title">Хиты продаж</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={2} className="mb-4">
              <Card className="product-card" onClick={() => onProductClick(product)}>
                <div className="product-img-wrapper">
                  <Card.Img variant="top" src={product.images[0]} className="product-img"/>
                  <div className="discount-label">{product.discount}</div>
                  <div className="hit-label">ХИТ</div>
                </div>
                <Card.Body>
                  <Card.Title className="product-title">{product.title}</Card.Title>
                  <Card.Text className="product-prices">
                    <span className="old-price">{product.oldPrice}</span> <br />
                    <span className="new-price">{product.price}</span>
                  </Card.Text>
                  <Button variant="primary" className="buy-button">Купить</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default HitsBlock;
