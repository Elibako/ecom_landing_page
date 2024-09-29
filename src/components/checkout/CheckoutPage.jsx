import React, { useState } from 'react';
import './checkout.css';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="checkout-container">
      {/* Left Section - Billing Form */}
      <div className="checkout-left">
        <h3>Billing Details</h3>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country/Region</label>
            <select id="country" name="country" required>
              <option value="">Select a Country</option>
              {/* Add country options here */}
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="street">Street Address</label>
            <input type="text" id="street" name="street" required />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" required />
          </div>

          <button type="submit" className="submit-btn">Place Order</button>
        </form>
      </div>

      {/* Right Section - Order Summary and Payment */}
      <div className="checkout-right">
        <h3>Order Summary</h3>
        <div className="order-summary">
          <div className="order-item">
            <p>Asgaard Sofa</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="subtotal">
            <h4>Subtotal</h4>
            <p>Rs. 250,000.00</p>
          </div>
        </div>

        {/* Payment Methods */}
        <h4>Payment Options</h4>
        <div className="payment-methods">
          <div>
            <input
              type="radio"
              id="bank"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="bank">Direct Bank Transfer</label>
            {paymentMethod === 'bank' && (
              <p className="payment-info">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            )}
          </div>

          <div>
            <input
              type="radio"
              id="cod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="cod">Cash On Delivery</label>
            {paymentMethod === 'cod' && (
              <p className="payment-info">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
