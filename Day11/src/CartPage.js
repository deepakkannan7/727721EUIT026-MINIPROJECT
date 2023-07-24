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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const CartPage = ({ cartItems, removeFromCart }) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price* item.quantity, 0);
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setDropdownVisible(!dropdownVisible);
  };

  return (

<div>
      <div>
        <div className='fullcart'>
    <nav className='carNavbarItems'>
      <h1 className='carnavbar-logo'>KK</h1>


      <div className='menu-icons' onClick={handleClick}>
        <MenuIcon />
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        {dropdownVisible && (
              <div className='dropdown-menu'>
                <div className='dropdown-column'>

                  <Link to='./Profile'>
                  <div className='bprofile'>
                    <AccountCircleIcon /> Profile
                  </div>
                  </Link>
                  <div className='bmyacc'>
                    <AddIcon /> My Account
                  </div>

                  <Link to='./'>
                  <div className='bsa'>
                    <SwitchAccountIcon /> Switch Account
                  </div>
                  </Link>

                  <div className='bset'>
                    <SettingsIcon /> Settings
                  </div>

                  <Link to='./UserLogin'>
                  <div className='blo'>
                    <ExitToAppIcon /> Logout
                  </div>
                  </Link>
                </div>
              </div>
            )}
      </div>

      <ul className='carnav-menu'>

        <Link to='./Homepage1'>
        <li className='carHome'> 
            <HomeIcon></HomeIcon>Home
        </li>
        </Link>
        
        <Link to='./Category'>
        <li className='carCategory'>
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li>
        </Link>

       <Link to='./Product'>
        <li className='carProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> </Link>
        
        <Link to='./CartPage'>
        <li className='carCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li>
        </Link>

          <Link to='./Feedback'>
        <li className='carFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
        </li>
            </Link>

        {/* <button className='carhbtn'>SignUp</button> */}
      </ul>
    </nav>
    </div>

    <br></br><br></br>
    <div className='carcart'>
      <h1 className='cartt'>Cart</h1>

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
    </div>
  );
};

export default CartPage;


// // CartPage.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const CartPage = ({ cartItems, removeFromCart }) => {
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div>
//       <div className='cartNavbar'>
//         {/* Your navigation bar code */}
//         {/* ... */}
//       </div>

//       <div className='cartContainer'>
//         <h1 className='cartTitle'>Cart</h1>

//         {cartItems.length === 0 ? (
//           <p className='empty'>Your cart is empty</p>
//         ) : (
//           <div className='cartItems'>
//             {cartItems.map((item) => (
//               <div className='cartItem' key={item.id}>
//                 <div className='itemInfo'>
//                   <h3 className='itemName'>{item.name}</h3>
//                   <p className='itemPrice'>Price: ₹{item.price}</p>
//                   <p className='itemQuantity'>Quantity: {item.quantity}</p>
//                 </div>
//                 <button className='removeButton' onClick={() => removeFromCart(item.id)}>
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <p className='totalPrice'>Total Price: ₹{getTotalPrice()}</p>
//             <div className='checkoutButtons'>
//               <Link to='/checkout'>
//                 <button className='proceedButton'>Proceed for Checkout</button>
//               </Link>
//               <Link to='/payment'>
//                 <button className='proceedButton'>Proceed for Payment</button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;



