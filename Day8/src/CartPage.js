import React from 'react';
import './CartPage.css'
import { useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const CartPage = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price* item.quantity, 0);
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (

<div>
      <div>
    <nav className='carNavbarItems'>
      <h1 className='carnavbar-logo'>KK</h1>


      <div className='menu-icons' onClick={handleClick}>
        <MenuIcon />
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className='carnav-menu'>
        <li className='#'>
          <a href='/' className='carHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li>
        
        <li className='carCategory'>
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li>
       <Link to='./Product'>
        <li className='carProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> </Link>
        
        <li className='carCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li>
        <li className='#'>
          <a href='/' className='carFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
          </a>
        </li>

        <button className='carhbtn'>SignUp</button>
      </ul>
    </nav>
    </div>

    <br></br><br></br>
    <div className='carcart'>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p className='empty'>Your cart is empty</p>
      ) : (
        <div><center>
          {cartItems.map((item) => (
            <div id="row">
            <div key={item.id}>
              <div id="nameblock">
              <h3 className='name'>{item.name}</h3></div>
              <div id="imgblock">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{border:'2px solid black', maxWidth: '150px', maxHeight: '150px' }}
                />
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div id="priceblock">
              <p className='tt'>Price:₹ {item.price}</p></div>
              <p className='tq'>Quantity: {item.quantity}</p>
              <div id="remblock">
              <button className='bt' style={{backgroundColor:'red',color:'white' }} onClick={() => removeFromCart(item.id)}>Remove</button></div>  
            </div>
            </div>
          ))}</center>
          <p className='tp'>Total Price:₹ {getTotalPrice()}</p>
    <button className='probutton'>
      Proceed for Checkout
    </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;