import React, { useState, useContext } from 'react';
import './product-cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { CartContext } from '../cart/CartContext';

const ProductCardSection = () => {
  const [likedProducts, setLikedProducts] = useState(new Set());
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success('Page URL copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy URL');
    });
  };

  const handleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      const newLikedProducts = new Set(prevLikedProducts);
      if (newLikedProducts.has(productId)) {
        newLikedProducts.delete(productId);
        toast.info('Product unliked');
      } else {
        newLikedProducts.add(productId);
        toast.success('Product liked!');
      }
      return newLikedProducts;
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart using context
    toast.success(`${product.title} added to cart!`);
  };

  const products = [
    { id: 1, title: "Product 1", description: "Best quality product", price: "$50", image: "src/assets/Images.png", discount: "-30%", bannerStyle: "discount-banner-1" },
    { id: 2, title: "Product 2", description: "Highly recommended", price: "$60", image: "src/assets/Leviosa.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 3, title: "Product 3", description: "Limited time offer", price: "$40", image: "src/assets/Lolito.png", discount: "-20%", bannerStyle: "discount-banner-3" },
    { id: 4, title: "Product 4", description: "Great for everyday use", price: "$70", image: "src/assets/Respira.png", discount: "", bannerStyle: "discount-banner-4" },
    { id: 5, title: "Product 5", description: "Durable and stylish", price: "$90", image: "src/assets/Grifo.png", discount: "-10%", bannerStyle: "discount-banner-1" },
    { id: 6, title: "Product 6", description: "Affordable and high quality", price: "$30", image: "src/assets/Muggo.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 7, title: "Product 7", description: "Perfect for gifting", price: "$80", image: "src/assets/Pingky.png", discount: "-25%", bannerStyle: "discount-banner-3" },
    { id: 8, title: "Product 8", description: "Top-rated product", price: "$100", image: "src/assets/Potty.png", discount: "", bannerStyle: "discount-banner-4" },
  ];

  return (
    <>
      <section className="product-card-section">
        <h2>Our Products</h2>
        <div className="product-card-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.title} />
                {product.discount && <span className={`discount-label ${product.bannerStyle}`}>{product.discount}</span>}
              </div>
              <div className="product-card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="product-price">{product.price}</span>
              </div>
              <div className="product-card-overlay">
                <button 
                  className="product-add-to-cart"
                  onClick={() => handleAddToCart(product)} // Add to cart
                >
                  Add to Cart
                </button>
                <div className="product-icon-buttons">
                  <a href="#" onClick={handleShare}>
                    <FontAwesomeIcon icon={faShareAlt} title="Share" />
                  </a>
                  <Link to="/product-description">
                    <FontAwesomeIcon icon={faExchangeAlt} title="Compare" />
                  </Link>
                  <a href="#" onClick={() => handleLike(product.id)}>
                    <FontAwesomeIcon icon={faHeart} title="Like" color={likedProducts.has(product.id) ? "red" : "black"} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center-button-container">
          <Link to="/shop-page" className="center-button">
            Show More
          </Link>
        </div>
      </section>
      <ToastContainer /> {/* Toast container to display notifications */}
    </>
  );
};

export default ProductCardSection;
