import React, { useState } from 'react';
import './Adhomepage.css';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import MenuIcon from '@mui/icons-material/Menu';
import 'react-slideshow-image/dist/styles.css';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PhoneIcon from '@mui/icons-material/Phone';


const Adhomepage = ({ addToCart }) => {
  const [clicked, setClicked] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});

  const handleClick = () => {
    setClicked(!clicked);
    setDropdownVisible(!dropdownVisible);
  };

  const handleQuantityChange = (event, productId) => {
    const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
    setProductQuantities(newQuantities);
  };

  const products = [
    // Your product data here
  ];

  const handleAddToCart = (product) => {
    const quantity = productQuantities[product.id] || 1;
    const item = { ...product, quantity };
    addToCart(item);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <nav className='adNavbarItems'>
        <h1 className='adnavbar-logo' onClick={handleClick}>
            KK
          </h1>

          <div className='admenu-icons' onClick={handleClick}>
            <MenuIcon />
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            {dropdownVisible && (
              <div className='addropdown-menu'>
                <div className='addropdown-column'>
                  {/* <div className='adbprofile'>
                    <AccountCircleIcon /> Profile
                  </div> */}
                  <div className='adbmyacc'>
                    <AddIcon /> My Account
                  </div>
                  <div className='adbsa'>
                    <SwitchAccountIcon /> Switch Account
                  </div>

                  <div className='adbset'>
                    <SettingsIcon /> Settings
                  </div>

                  <Link to='./VendorLogin'>
                  <div className='adblo'>
                    <ExitToAppIcon /> Logout
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <ul className='adnav-menu'>
            {/* <Link to='./Homepage1'> */}
              <li className='#'>
                <a href='/' className='adHome'>
                  <HomeIcon></HomeIcon>Home
                </a>
              </li>


            {/* </Link> */}

            {/* <Link to='./Category'> */}
              {/* <li className='adCategory'>
                <CategoryIcon className='adcat'></CategoryIcon>Category
              </li> */}
            {/* </Link> */}
{/* 
            <Link to='./Product'> */}
              {/* <li className='adProduct'>
                <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
              </li> */}
            {/* </Link> */}

            {/* <Link to='./CartPage'> */}
              {/* <li className='adCart'>
                <ShoppingCartIcon></ShoppingCartIcon>Cart
              </li> */}
            {/* </Link> */}

            {/* <Link to='./Feedback'> */}
              <li className='adFeedback'>
                <QuestionAnswerIcon></QuestionAnswerIcon>CustomerFeedback
              </li>
            {/* </Link> */}


            <li className='adcont'>
                <PhoneIcon></PhoneIcon>Contact
              </li>

            <Link to='./Profile'>
              <li className='adprof'>
                <AccountCircleIcon></AccountCircleIcon>Profile
              </li>
              </Link>


          </ul>
        </nav>
        </div>
        </div>

);
};

export default Adhomepage;
  
