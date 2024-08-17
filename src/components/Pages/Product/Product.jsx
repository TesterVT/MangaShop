import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

const ProductPage = ({ product, onClose }) => {
  return (
    <Container className="product-page">
      <p onClick={onClose}>Главная - Манга</p>
      <Row>
        <Col md={6}>
          <div className="product-images">
            {product.images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Product ${index}`} className="product-img" />
            ))}
          </div>
        </Col>
        <Col md={6}>
          <h1 className="product-title">{product.title}</h1>
          <div className="product-pricing">
            <span className="new-price">{product.price}</span>
            <span className="old-price">{product.oldPrice}</span>
          </div>
          <div className="product-reviews">
            <span className="rating">★ {product.rating}</span>
            <span className="reviews">{product.reviews} отзывов</span>
          </div>
          <Button variant="warning" className="add-to-cart-button">Добавить в корзину</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>О товаре</h3>
          <ul className="product-details">
            {Object.keys(product.details).map((key, index) => (
              <li key={index}>
                <strong>{key}:</strong> {product.details[key]}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
