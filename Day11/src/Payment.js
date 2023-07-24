// PaymentPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

const PaymentPage = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and payment processing logic here
    // For simplicity, we'll just display an alert on successful payment.
    alert('Payment Successful! Thank you for your purchase.');
    // You can also clear the cart, redirect to a success page, etc.
  };

  return (
    <div className="payment-page">
      <h1 className="payment-title">Payment</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address:</label>
          <textarea
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="payment-button">
          Submit Payment
        </button>
      </form>
      <Link to="/checkout" className="back-button">
        Go Back to Checkout
      </Link>
    </div>
  );
};

export default PaymentPage;
