import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import CustomCarousel from "./components/Carousel";
import HitsBlock from "./components/HitsBlock";
import ProductPage from "./components/Pages/Product/Product";
import Footer from "./components/Footer";
import React, { useState } from 'react';
import productsData from './data/products.json';


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCarousel, setShowCarousel] = useState(true);
  const [showHitsBlock, setShowHitsBlock] = useState(true);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowCarousel(false);
    setShowHitsBlock(false);
  };

  const handleCloseProductPage = () => {
    setSelectedProduct(null);
    setShowCarousel(true);
    setShowHitsBlock(true);
  };
  return (
    <div>
      <SubHeader />
      <Header />
      {selectedProduct ? (
        <ProductPage product={selectedProduct} onClose={handleCloseProductPage} />
      ) : (
        <>
          {showCarousel &&  <CustomCarousel />}
          {showHitsBlock && (
            <HitsBlock products={productsData} onProductClick={handleProductClick} />
          )}
        </>
      )}
      <Footer />
      <main>
      </main>
    </div>
  );
}
