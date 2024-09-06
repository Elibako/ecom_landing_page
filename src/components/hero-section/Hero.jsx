import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="card">
          <h1>Discover Our New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <a href="#" className="btn">Buy Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
