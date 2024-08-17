import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomCarousel.css';



const CustomCarousel = () => {
  const products = [
    { id: 1, title: 'Жизнь святого писателя', price: '623₽', oldPrice: '990₽', discount: '37%', imgSrc: 'https://remanga.org/media/titles/holy-writers-life/80edadf5d2a8939a6b9666fd229e63a3.jpg' },
    { id: 2, title: 'Жизнь святого писателя', price: '1935₽', oldPrice: '2390₽', discount: '19%', imgSrc: 'https://remanga.org/media/titles/holy-writers-life/80edadf5d2a8939a6b9666fd229e63a3.jpg' },
    { id: 3, title: 'Жизнь святого писателя', price: '540₽', oldPrice: '600₽', discount: '10%', imgSrc: 'https://remanga.org/media/titles/holy-writers-life/80edadf5d2a8939a6b9666fd229e63a3.jpg' },
    { id: 4, title: 'Жизнь святого писателя', price: '975₽', oldPrice: '1050₽', discount: '7%', imgSrc: 'https://remanga.org/media/titles/holy-writers-life/80edadf5d2a8939a6b9666fd229e63a3.jpg' },
    { id: 5, title: 'Жизнь святого писателя', price: '7081₽', oldPrice: '7860₽', discount: '10%', imgSrc: 'https://remanga.org/media/titles/holy-writers-life/80edadf5d2a8939a6b9666fd229e63a3.jpg' },
    { id: 6, title: 'Жизнь святого писателя', price: '7081₽', oldPrice: '7860₽', discount: '10%', imgSrc: 'https://remanga.org/media/titles/holy-writers-life/80edadf5d2a8939a6b9666fd229e63a3.jpg' },
  ];
  return (
    <div className="carousel-wrapper">
      <Carousel indicators={false} interval={3000} controls={true}>
      {products.map(product => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100 carousel-img"
            src={product.imgSrc}
            alt={product.title}
          />
          <Carousel.Caption className="carousel-caption">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
