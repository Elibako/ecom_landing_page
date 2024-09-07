import React from 'react';
import './gallerysection.css'; // Update the CSS file name

const GallerySection = () => {
  const images = [
    "src/assets/2.png",
    "src/assets/a.png",
    "src/assets/b.png",
    "src/assets/c.png",
    "src/assets/d.png",
    "src/assets/e.png",
    "src/assets/2",
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
