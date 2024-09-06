import React from 'react';
import './product-cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const ProductCardSection = () => {
  const products = [
    { id: 1, title: "Product 1", description: "Best quality product", price: "$50", image: "src/assets/Images.png" },
    { id: 2, title: "Product 2", description: "Highly recommended", price: "$60", image: "src/assets/Leviosa.png" },
    { id: 3, title: "Product 3", description: "Limited time offer", price: "$40", image: "src/assets/Lolito.png" },
    { id: 4, title: "Product 4", description: "Great for everyday use", price: "$70", image: "src/assets/Respira.png" },
    { id: 5, title: "Product 5", description: "Durable and stylish", price: "$90", image: "src/assets/Grifo.png" },
    { id: 6, title: "Product 6", description: "Affordable and high quality", price: "$30", image: "src/assets/Muggo.png" },
    { id: 7, title: "Product 7", description: "Perfect for gifting", price: "$80", image: "src/assets/Pingky.png" },
    { id: 8, title: "Product 8", description: "Top-rated product", price: "$100", image: "src/assets/Potty.png" },
  ];

  return (
    <section className="product-card-section">
      <h2>Our Products</h2>
      <div className="product-card-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.title} />
              <span className="discount-label">-50%</span>
            </div>
            <div className="product-card-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span className="product-price">{product.price}</span>
            </div>
            <div className="product-card-overlay">
              <button className="product-add-to-cart">Add to Cart</button>
              <div className="product-icon-buttons">
                <a href="#"><FontAwesomeIcon icon={faShareAlt} title="Share" /></a>
                <a href="#"><FontAwesomeIcon icon={faExchangeAlt} title="Compare" /></a>
                <a href="#"><FontAwesomeIcon icon={faHeart} title="Like" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="center-button-container">
        <button className="center-button">See More Products</button>
      </div>
    </section>
  );
};

export default ProductCardSection;
