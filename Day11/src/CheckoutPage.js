
import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-quantity">Quantity: {item.quantity}</p>
                <p className="item-price">Price: ₹{item.price}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))
        )}
      </div>
      <p className="total-price">Total Price: ₹{getTotalPrice()}</p>
      <Link to="/payment" className="proceed-button">
        Proceed to Payment
      </Link>
    </div>
  );
};

export default CheckoutPage;
