import React from 'react';
import './gallerysection.css'; // Update the CSS file name

const GallerySection = () => {
  const images = [
    "src/assets/2.png",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
  ];

  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
