import React from 'react';
import './AdminHomepage.css';
// import './Bakery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPen, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
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
import '@fortawesome/fontawesome-free/css/all.min.css';


const AdminHomepage = () => {


  const [clicked, setClicked] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});

  const handleClick = () => {
    // setClicked(!clicked);
    setDropdownVisible(!dropdownVisible);
  };

  const handle1Click = () => {
    setClicked(!clicked);
  };

  // const handleQuantityChange = (event, productId) => {
  //   const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
  //   setProductQuantities(newQuantities);
  // };
  return (

    <div>
          <div>
        <nav className='ahpNavbarItems'>
        <h1 className='ahpnavbar-logo' onClick={handleClick}>
            KK
            {dropdownVisible && (
              <div className='ahpdropdown-menu'>
                <div className='dropdown-column'>

                  {/* <Link to='./Profile'> */}
                  <div className='ahpprofile'>
                    <AccountCircleIcon /> Profile
                  </div>
                  {/* </Link> */}
                  <div className='ahpmyacc'>
                    <AddIcon /> My Account
                  </div>

                  {/* <Link to='./'> */}
                  <div className='ahpsa'>
                    <SwitchAccountIcon /> Switch Account
                  </div>
                  {/* </Link> */}

                  <div className='ahpset'>
                    <SettingsIcon /> Settings
                  </div>

                  {/* <Link to='./UserLogin'> */}
                  <div className='ahplo'>
                    <ExitToAppIcon /> Logout
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            )}
          </h1>

         
      <div className='ahpmenu-icons' onClick={handle1Click}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`ahpnav-menu ${clicked ? 'active' : ''}`}>
            {/* <Link to='./Homepage1'> */}
              <li className='#'>
                <a href='/' className='ahpHome'>
                  <HomeIcon></HomeIcon>Home
                </a>
              </li>



            {/* <Link to='./Feedback'> */}
              <li className='ahpFeedback'>
                <QuestionAnswerIcon></QuestionAnswerIcon>CustomerFeedback
              </li>
            {/* </Link> */}


            <li className='ahpcont'>
                <PhoneIcon></PhoneIcon>Contact
              </li>

            {/* <Link to='./Profile'> */}
              <li className='ahpprof'>
                <AccountCircleIcon></AccountCircleIcon>Profile
              </li>
              {/* </Link> */}


          </ul>
        </nav>
        </div>

        <br></br><br></br><br></br>

    <div className="product-management-container">
      <h1 className='co'>Choose Your Option</h1>
      <div className="product-icons">

        <Link to='./Adpost'>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faPlusCircle} className="aicon" />
          <span className='ap'>Add Product</span>
        </div>
        </Link>


        <Link to='./Adupdate'>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faPen} className="eicon" />
          <span className='ep'>Edit Product</span>
        </div>
        </Link>
      </div>
      <div className="product-icons">

        <Link to='./Addelete'>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faTrashAlt} className="dicon" />
          <span className='dp'>Delete Product</span>
        </div>
        </Link>

        <Link to='./Adget'>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faSearch} className="vicon" />
          <span className='gp'>Get Products</span>
        </div>
      </Link>
      </div>
    </div>
    </div>
  );
};

export default AdminHomepage;
