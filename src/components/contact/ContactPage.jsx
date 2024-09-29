import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (

    
    <div className="container">
      <div className="contact-container">
      <div className="product-comparison">
        <div className="header">
          <img src="src/assets/logo2.svg" alt="" className='logo' />
          <h1 className='header-text'>Contact</h1>
        </div>
      </div>
        
        <div className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <h3>Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>

            <h3>Phone</h3>
            <p>Mobile: +(84) 546-6789<br />
               Hotline: +(84) 456-6789</p>

            <h3>Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00<br />
               Saturday-Sunday: 9:00 - 21:00</p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
