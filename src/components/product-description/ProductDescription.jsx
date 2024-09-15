import React, { useState } from 'react';
import './product-description.css'; // Import your custom styles
import { Facebook } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const products = [
    { id: 1, title: "Product 1", description: "Best quality product", price: "$50", image: "src/assets/Images.png", discount: "-30%", bannerStyle: "discount-banner-1" },
    { id: 2, title: "Product 2", description: "Highly recommended", price: "$60", image: "src/assets/Leviosa.png", discount: "", bannerStyle: "discount-banner-2" },
    { id: 3, title: "Product 3", description: "Limited time offer", price: "$40", image: "src/assets/Lolito.png", discount: "-20%", bannerStyle: "discount-banner-3" },
    { id: 4, title: "Product 4", description: "Great for everyday use", price: "$70", image: "src/assets/Respira.png", discount: "", bannerStyle: "discount-banner-4" },
   
  ];
  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="conntainer">
        <div className="product-description">
      <div className="left-section">
        <div className="small-photos">
          <img src="src/assets/Sofa1.png" alt="Product Side 1" />
          <img src="src/assets/Sofa2.png" alt="Product Side 2" />
          <img src="src/assets/Sofa3.png" alt="Product Side 3" />
          <img src="src/assets/Sofa4.png" alt="Product Side 4" />
        </div>
        <div className="main-photo">
          <img src="src/assets/sofa.png" alt="Main Product" />
        </div>
      </div>

      <div className="right-section">
        <h1>Asgaard sofa</h1>
        <p className="price">Rs. 250,000.00</p>
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <span className="vertical-line"></span>

          <span className="reviews">5 Customer Reviews</span>
        </div>
        <p className="description">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>

        <div className="size-section">
          <h4>Size</h4>
          <div className="size-options">
            <button className='X'> L</button>
            <button className='XL'>XL</button>
            <button className='XS'>XS</button>
          </div>
        </div>

        <div className="color-section">
          <h4>Color</h4>
          <div className="color-options">
            <button className='blue'></button>
            <button className='black'></button>
            <button className='brown'></button>
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

        <hr className="section-divider" />

        <div className="additional-info">
          <p>SKU: SS001</p>
          <p>Category: Sofa</p>
          <p>Tags:Sofa, Chair, Home, Shop</p>
        </div>

        <div className="share-section">
          <div className="share-buttons">
            Share:
           <i><img src="src/assets/facebook.svg" alt="" /></i>
           <i><img src="src/assets/twitter.svg" alt="" />
           </i>
         <i><img src="src/assets/linkedin2.png" alt="" /></i>
          </div>
        </div>
      </div>

      {/* New Section for Headers */}
      
    </div>
    <hr />
    <div className="filter-section">
  <h2 className="filter-header" onClick={() => document.getElementById('description').scrollIntoView({ behavior: 'smooth' })}>Description</h2>
  <h2 className="filter-header" onClick={() => document.getElementById('additional-info').scrollIntoView({ behavior: 'smooth' })}>Additional Information</h2>
  <h2 className="filter-header" onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}>Reviews [5]</h2>
</div>
<div className='description-text'>
    <p>
    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

    </p>
<p>
Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
</p>
</div>
<div className="image-gallery">
  <img src="src/assets/pinksofa.png" alt="Product Side 1" className="gallery-image" />
  <img src="src/assets/pinksofa.png" alt="Product Side 2" className="gallery-image" />
</div>

<section className="product-card-section">
<hr />
      <h2>Related Products</h2>
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
              <button className="product-add-to-cart">Add to Cart</button>
              <div className="product-icon-buttons">
                <a href="#"><FontAwesomeIcon icon={faShareAlt} title="Share" /></a>
                <a href="#"><Link to="/product-description">
                     <FontAwesomeIcon icon={faExchangeAlt} title="Compare" />
                 </Link></a>
                <a href="#"><FontAwesomeIcon icon={faHeart} title="Like" /></a>
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
    </div>
    
    
  );
};

export default ProductDescription;
