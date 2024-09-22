import React from 'react';
import './productcomparison.css';

const ProductComparison = () => {
  return (
    <div className='container'>
      <div className="product-comparison">
        <div className="header">
          <img src="src/assets/logo2.svg" alt="" className='logo' />
          <h1 className='header-text'>Product Comparison</h1>
        </div>
      </div>
      
      <section className="compare-page">
      <div className="items">
          <div className="title">
           <h1> Go to Product <br />page for more <br />Products</h1>
          </div>
          <a href="" className='view-btn'>View More</a>
        </div>
        <div className="images">
          <div className="img-1">
            <img src="src/assets/sofaa.png" alt="Asgaard Sofa" />
            <div className="product-info">
              <h2 className="product-name">Asgaard Sofa</h2>
              <p className="product-price">Rs. 250,000.00</p>
              <p className="product-rating">Rating: 4.7 ⭐</p>
              <p className="product-reviews">204 Reviews</p>
            </div>
          </div>
          <div className="img-2">
            <img src="src/assets/sofaa.png" alt="Outdoor Sofa" />
            <div className="product-info">
              <h2 className="product-name">Outdoor Sofa</h2>
              <p className="product-price">Rs. 224,000.00</p>
              <p className="product-rating">Rating: 4.5 ⭐</p>
              <p className="product-reviews">150 Reviews</p>
            </div>
          </div>
          
    <div className="choose-product">
      <label htmlFor="product-dropdown" className="dropdown-label">Add a Product:</label>
      <select id="product-dropdown" className="product-dropdown">
        <option value="sofa1">Asgaard Sofa</option>
        <option value="outdoor">Outdoor Sofa Set</option>
        <option value="modern">Modern Lounge Sofa</option>
        <option value="classic">Classic Leather Sofa</option>
      </select>
    </div>
    
        </div>
        
      </section>
     xz
      <div className="comparison-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Specification</th>
            <th>Sofa 1</th>
            <th>Sofa 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sales Package</td>
            <td>1 sectional sofa</td>
            <td>1 Three Seater, 2 Single Seater</td>
          </tr>
          <tr>
            <td>Model Number</td>
            <td>TFCBLIGRBL6SRHS</td>
            <td>DTUBLIGRBL568</td>
          </tr>
          <tr>
            <td>Secondary Material</td>
            <td>Solid Wood</td>
            <td>Solid Wood</td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>L-shaped</td>
            <td>L-shaped</td>
          </tr>
          <tr>
            <td>Upholstery Material</td>
            <td>Fabric + Cotton</td>
            <td>Fabric + Cotton</td>
          </tr>
          <tr>
            <td>Upholstery Color</td>
            <td>Bright Grey & Lion</td>
            <td>Bright Grey & Lion</td>
          </tr>
          <tr>
            <td>Filling Material</td>
            <td>Foam</td>
            <td>Matte</td>
          </tr>
          <tr>
            <td>Adjustable Headrest</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Maximum Load Capacity</td>
            <td>280 KG</td>
            <td>300 KG</td>
          </tr>
          <tr>
            <td>Origin of Manufacture</td>
            <td>India</td>
            <td>India</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
  );
}

export default ProductComparison;
