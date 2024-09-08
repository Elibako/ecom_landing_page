// Footer.jsx

import React from 'react';
import './footer.css'; // Ensure this path is correct
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const initialValues = {
  email: '',
};

const handleSubmit = (values, { resetForm }) => {
  toast.success('Email subscribed successfully!');
  resetForm();
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="src/assets/logo.svg" alt="Logo" />
          <p>400 University Drive Suite 200 Coral Gables,
          FL 33134 USA</p>
        </div>
        <div className="footer-center">
          <div className="links">
            <h4>Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="help">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
              <li><a href=""> FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="newsletter">
                  <Field 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    className={`email-input ${touched.email && errors.email ? 'error' : ''}`}
                  />
                  {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
                  <button type="submit" className="subscribe-btn">Subscribe</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="divider" />
        <p>2023 Furino. All rights reserved</p>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
