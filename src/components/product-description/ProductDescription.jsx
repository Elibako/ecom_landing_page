import React, { useState } from 'react';
import './product-description.css'; // Import your custom styles

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="product-description">
      <div className="left-section">
        <div className="main-photo">
          <img src="src/assets/sofa.png" alt="Main Product" />
        </div>
        <div className="small-photos">
          <img src="path-to-image1" alt="Product Side 1" />
          <img src="path-to-image2" alt="Product Side 2" />
          <img src="path-to-image3" alt="Product Side 3" />
          <img src="path-to-image4" alt="Product Side 4" />
        </div>
      </div>

      <div className="right-section">
        <h1>Product Title</h1>
        <p className="price">$99.99</p>
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <span className="reviews">(100 reviews)</span>
        </div>
        <p className="description">
          This is a great product description that provides useful details about the product.
        </p>

        <div className="size-section">
          <h4>Size</h4>
          <div className="size-options">
            <button>XS</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>

        <div className="color-section">
          <h4>Color</h4>
          <div className="color-options">
            <button>Red</button>
            <button>Blue</button>
            <button>Black</button>
          </div>
        </div>

        <div className="action-section">
          <div className="quantity-section">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>

          <button className="add-to-cart">Add to Cart</button>
          <button className="compare">Compare</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
