import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero-section/Hero';
import Body from './components/body-section/Body';
import ProductCardSection from './components/card-section/ProductCardSection';
import ImageSlider from './components/imageSlider/ImageSlider';
import GallerySection from './components/gallery-section/GallerySection';
import Footer from './components/footer-section/Footer';
import ShopPage from './components/shop-page/ShopPage';

function App() {
  return (
    <Router>
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
      </Routes>
      <Footer /> {/* Ensure Footer is included here */}
    </Router>
  );
}

export default App;
