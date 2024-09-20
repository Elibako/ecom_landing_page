import React, { useState } from 'react';
import './shop-page.css'; // Ensure this file defines a 4x3 grid layout.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const ShopPage = () => {
  const productsPerPage = 12; // Display 12 products per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const navigate = useNavigate();

  // List of products
  const products = [
    { id: 1, title: "Product 1", description: "Best quality product", price: "$50", image: "src/assets/Images.png", discount: "-30%", bannerStyle: "discount-banner-1" },
    { id: 2, title: "Product 2", description: "Highly recommended", price: "$60", image: "src/assets/Leviosa.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 3, title: "Product 3", description: "Limited time offer", price: "$40", image: "src/assets/Lolito.png", discount: "-20%", bannerStyle: "discount-banner-3" },
    { id: 4, title: "Product 4", description: "Great for everyday use", price: "$70", image: "src/assets/Respira.png", discount: "", bannerStyle: "discount-banner-4" },
    { id: 5, title: "Product 5", description: "Durable and stylish", price: "$90", image: "src/assets/Grifo.png", discount: "-10%", bannerStyle: "discount-banner-1" },
    { id: 6, title: "Product 6", description: "Affordable and high quality", price: "$30", image: "src/assets/Muggo.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 7, title: "Product 7", description: "Perfect for gifting", price: "$80", image: "src/assets/Pingky.png", discount: "-25%", bannerStyle: "discount-banner-3" },
    { id: 8, title: "Product 8", description: "Top-rated product", price: "$100", image: "src/assets/Potty.png", discount: "", bannerStyle: "discount-banner-4" },
    { id: 9, title: "Product 9", description: "New arrival", price: "$110", image: "src/assets/Images.png", discount: "", bannerStyle: "discount-banner-1" },
    { id: 10, title: "Product 10", description: "Best seller", price: "$120", image: "src/assets/best-seller.png", discount: "-15%", bannerStyle: "discount-banner-3" },
    { id: 11, title: "Product 11", description: "High demand item", price: "$130", image: "src/assets/Images.png", discount: "-5%", bannerStyle: "discount-banner-2" },
    { id: 12, title: "Product 12", description: "Popular choice", price: "$140", image: "src/assets/Leviosa.png", discount: "", bannerStyle: "discount-banner-4" },
    { id: 13, title: "Product 13", description: "Limited stock", price: "$150", image: "src/assets/Lolito.png", discount: "-10%", bannerStyle: "discount-banner-3" },
    { id: 14, title: "Product 14", description: "Customer favorite", price: "$160", image: "src/assets/Respira.png", discount: "", bannerStyle: "discount-banner-1" },
    { id: 15, title: "Product 15", description: "Trending now", price: "$170", image: "src/assets/Grifo.png", discount: "-15%", bannerStyle: "discount-banner-2" },
    { id: 16, title: "Product 16", description: "Best value", price: "$180", image: "src/assets/Muggo.png", discount: "", bannerStyle: "discount-banner-4" },
    { id: 17, title: "Product 17", description: "Exclusive item", price: "$190", image: "src/assets/Pingky.png", discount: "-20%", bannerStyle: "discount-banner-1" },
    { id: 18, title: "Product 18", description: "Premium quality", price: "$200", image: "src/assets/Potty.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 19, title: "Product 19", description: "Top choice", price: "$210", image: "src/assets/Images.png", discount: "-5%", bannerStyle: "discount-banner-3" },
    { id: 20, title: "Product 20", description: "Limited edition", price: "$220", image: "src/assets/best-seller.png", discount: "-15%", bannerStyle: "discount-banner-4" },
    { id: 21, title: "Product 21", description: "Highly rated", price: "$230", image: "src/assets/Images.png", discount: "", bannerStyle: "discount-banner-1" },
    { id: 22, title: "Product 22", description: "Customer favorite", price: "$240", image: "src/assets/Leviosa.png", discount: "-10%", bannerStyle: "discount-banner-2" },
    { id: 23, title: "Product 23", description: "Great quality", price: "$250", image: "src/assets/Lolito.png", discount: "", bannerStyle: "discount-banner-3" },
    { id: 24, title: "Product 24", description: "Best seller", price: "$260", image: "src/assets/Respira.png", discount: "-5%", bannerStyle: "discount-banner-4" },
    { id: 25, title: "Product 25", description: "New arrival", price: "$270", image: "src/assets/Grifo.png", discount: "", bannerStyle: "discount-banner-1" },
    { id: 26, title: "Product 26", description: "Top rated", price: "$280", image: "src/assets/Muggo.png", discount: "-20%", bannerStyle: "discount-banner-2" },
    { id: 27, title: "Product 27", description: "Best quality", price: "$290", image: "src/assets/Pingky.png", discount: "-15%", bannerStyle: "discount-banner-3" },
    { id: 28, title: "Product 28", description: "Highly recommended", price: "$300", image: "src/assets/Potty.png", discount: "", bannerStyle: "discount-banner-4" },
    { id: 29, title: "Product 29", description: "Exclusive offer", price: "$310", image: "src/assets/Leviosa.png", discount: "-10%", bannerStyle: "discount-banner-1" },
    { id: 30, title: "Product 30", description: "Popular choice", price: "$320", image: "src/assets/best-seller.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 31, title: "Product 31", description: "New edition", price: "$330", image: "src/assets/Images.png", discount: "-5%", bannerStyle: "discount-banner-3" },
    { id: 32, title: "Product 32", description: "Limited stock", price: "$340", image: "src/assets/Leviosa.png", discount: "-10%", bannerStyle: "discount-banner-4" },
    { id: 33, title: "Product 33", description: "Premium product", price: "$350", image: "src/assets/Lolito.png", discount: "", bannerStyle: "discount-banner-1" },
    { id: 34, title: "Product 34", description: "Customer favorite", price: "$360", image: "src/assets/Respira.png", discount: "-15%", bannerStyle: "discount-banner-2" },
    { id: 35, title: "Product 35", description: "Top seller", price: "$370", image: "src/assets/Grifo.png", discount: "-20%", bannerStyle: "discount-banner-3" },
    { id: 36, title: "Product 36", description: "Exclusive", price: "$380", image: "src/assets/Muggo.png", discount: "", bannerStyle: "discount-banner-4" }
  ];

  // Calculate pagination details
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle product selection for comparison
  const handleProductSelection = (product) => {
    setSelectedForComparison((prevSelected) => {
      if (prevSelected.find((p) => p.id === product.id)) {
        return prevSelected.filter((p) => p.id !== product.id);
      } else {
        return [...prevSelected, product];
      }
    });
  };

  // Navigate to the comparison page
  const handleCompare = () => {
    if (selectedForComparison.length < 2) {
      alert('Please select at least 2 products to compare.');
    } else {
      navigate('/product-comparison', { state: { selectedProducts: selectedForComparison } });
    }
  };

  // Page change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="shop-page-section">
      <div className="product-card-grid">
        {currentProducts.map((product) => (
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
              <button className="product-add-to-cart">Add to Cart</button>
              <div className="product-icon-buttons">
                <a href="#"><FontAwesomeIcon icon={faShareAlt} title="Share" /></a>
                <Link to={`/product-description/${product.id}`}>
                  <FontAwesomeIcon icon={faExchangeAlt} title="Compare" />
                </Link>
                <a href="#"><FontAwesomeIcon icon={faHeart} title="Like" /></a>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => handleProductSelection(product)}
                  checked={selectedForComparison.some((p) => p.id === product.id)}
                />
                <label>Select for Comparison</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="compare-button-container">
        <button className="compare-button" onClick={handleCompare}>
          Compare Selected Products
        </button>
      </div>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {/* Compare Button */}
     

      {/* Support Section */}
      <section className="support-section">
        <div className="support-item">
          <div className="support-icon">
            <img src="src/assets/cup.svg" alt="High Quality" />
          </div>
          <div className="support-content">
            <div className="support-text">High Quality</div>
            <div className="support-subtext">Top-notch materials and craftsmanship</div>
          </div>
        </div>
        {/* Add more support items as needed */}
      </section>
    </section>
  );
};

export default ShopPage;
