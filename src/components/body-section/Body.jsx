import React from 'react';
import './body.css';

const Body = () => {
  return (
    <section className="image-section">
      <h2 className="section-title">Our Featured Products</h2>
      <div className="image-grid">
        <div className="image-card">
          <img src="src/assets/dining.svg" alt="Product 1" />
          <h3>Dining</h3>
        </div>
        <div className="image-card">
          <img src="src/assets/living.svg" alt="Product 2" />
          <h3>Living</h3>
        </div>
        <div className="image-card">
          <img src="src/assets/bedroom.svg" alt="Product 3" />
          <h3>Bedroom</h3>
        </div>
      </div>
    </section>
  );
};

export default Body;
