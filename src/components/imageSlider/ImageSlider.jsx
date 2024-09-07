import React from 'react';
import './imageslider.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = () => {
  const images = [
    "src/assets/LiveIn.png",
    "src/assets/2.png",
    "src/assets/3.png",
    // Add more images here
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="image-slider-section">
      <div className="card-container">
        <h1>50+ Beautiful rooms 
        inspiration</h1>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="shop-now-btn">Explore More</button>
      </div>

      <div className="slider-container">
        <div className="slider">
          <img src={images[currentImage]} alt="Slider" />
          <div className="description-overlay">Your image description</div>
          <div className="slider-controls">
            <button onClick={prevImage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={nextImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
