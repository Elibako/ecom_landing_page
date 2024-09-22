import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero-section/Hero';
import Body from './components/body-section/Body';
import ProductCardSection from './components/card-section/ProductCardSection';
import ImageSlider from './components/imageSlider/ImageSlider';
import GallerySection from './components/gallery-section/GallerySection';
import Footer from './components/footer-section/Footer';
import ShopPage from './components/shop-page/ShopPage';
import ProductDescription from './components/product-description/ProductDescription'; 
import ProductComparison from './components/product-comparison/ProductComparison';
import BlogPage from './components/blog-page/BlogPage'; // Import BlogPage
import { CartProvider } from './components/cart/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="shop">
                <Body />
              </section>
              <section id="about">
                <ProductCardSection />
              </section>
              <section id="contact">
                <ImageSlider />
                <GallerySection />
              </section>
            </>
          } />

          {/* Separate Route for ShopPage */}
          <Route path="/shop-page" element={<ShopPage />} />

          {/* Route for ProductDescription */}
          <Route path="/product-description/:productId" element={<ProductDescription />} />

          {/* Route for ProductComparison */}
          <Route path="/product-comparison" element={<ProductComparison />} />

          {/* Route for BlogPage */}
          <Route path="/blog" element={<BlogPage />} /> {/* New Blog Page Route */}

        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
