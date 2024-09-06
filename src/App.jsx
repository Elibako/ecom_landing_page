import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero-section/Hero';
import Body from './components/body-section/Body';
import ProductCardSection from './components/card-section/ProductCardSection';
import ImageSlider from './components/imageSlider/ImageSlider';
import GallerySection from './components/gallery-section/GallerySection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
