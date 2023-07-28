// import {react,useState} from'react';
// import './Food.css'
// import {Link} from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Avatar } from '@mui/material';
// import { red } from '@mui/material/colors';
// import HomeIcon from'@mui/icons-material/Home';
// import  CategoryIcon  from '@mui/icons-material/Category';
// import {ShoppingCart} from '@mui/icons-material';
// // import {ReviewsIcon} from '@mui/icons-material';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import CallIcon from '@mui/icons-material/Call';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// // import IconButton from '@mui/icons-material/Icon';
// // import ProductIcon from '@mui/icons-material/Product';

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';

// export default function ButtonAppBar() {

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//     const [searchText, setSearchText] = useState('');

//     const handleSearchChange = (event) => {
//       setSearchText(event.target.value);
//     };
  
//     const handleSearchSubmit = (event) => {
//       event.preventDefault();
//       console.log('Search:', searchText);
//       // Perform search logic here
//     };




      
           
//   return (
//       // <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" sx={{height:'41px',bgcolor:'rgb(237, 100, 237);'}}>
//          <Toolbar>
        

//         <div className='avtr'>
//         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//          {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
//         {/* <Typography sx={{ : 100 }}>Profile</Typography>   */}
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32,bgcolor:'orange',margin:'0px 0px 20px'}}>D</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//         </div>



//         <ul>
//         <li><Link to='/Homepage'>Home</Link></li>
//   <li class='active'><Link to='/Category'>Category</Link></li>
//   <li><Link to='/Product'>Product</Link></li>
//   <li><a href="#contact">Cart</a></li>
//   <li><a href="#contact">Review</a></li>
  
// </ul>


// <div className="search-container">
//             <form onSubmit={handleSearchSubmit}>
//               <InputBase
//                 placeholder="Search..."
//                 className="search-input"
//                 value={searchText}
//                 onChange={handleSearchChange}
//               />
//               <IconButton type="submit" className="search-icon">
//                 <SearchIcon />
//               </IconButton>
//             </form>
//           </div>
// </Toolbar>
//       </AppBar>
//       <br></br><br></br>

//       <div className="Footot">
//       <h1 className='footxt'>Fruits</h1>
//       <div className='whe'><img src="https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop.jpg" className='wheatimg'></img>
//                <p className="wheat">Wheat</p>
//                <p className="wherice">RS.100 per kg</p>
//                <div className="Addwhe">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>

//             <div className='mill'><img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/millets_1674801027.webp" className='millimg'></img>
//                <p className="millets">Millets</p>
//                <p className="millprice">RS.160 per kg</p>
//                <div className="Addmill">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='oat'><img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/311/311409/oatmeal.jpg" className='oatimg'></img>
//                <p className="oats">Oats</p>
//                <p className="oatprice">RS.140 per kg</p>
//                <div className="Addoat">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>



//             <div className='brow'><img src="https://cdn.media.amplience.net/i/japancentre/Category-header-11189-brown-rice/Buy-Premium-Quality-Brown-Rice-Online?$poi$&w=1200&h=630&sm=c&fmt=auto" className='browimg'></img>
//                <p className="brown">Brown Rice</p>
//                <p className="browprice">RS.90 per kg</p>
//                <div className="Addbrow">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='ry'><img src="https://media.istockphoto.com/id/171553200/photo/wheat-berries-background.jpg?s=612x612&w=0&k=20&c=907B7IcP8MieoXvLzLILSqy05gTjehDBcSb-R2Wzmj4=" className='ryimg'></img>
//                <p className="rye">Rye</p>
//                <p className="ryprice">RS.50 per kg</p>
//                <div className="Addry">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='bar'><img src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/02/10/Pictures/_13b49120-cfc0-11e5-9215-0a2a26aeb03b.jpg" className='barimg'></img>
//                <p className="barley">Barley</p>
//                <p className="barprice">RS.80 per kg</p>
//                <div className="Addbar">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>






           
//       </div>

//       </Box>
//   );
//   }


// import {react,useState} from 'react';
// import './Fruits.css'
// import {Link} from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Avatar } from '@mui/material';
// import { red } from '@mui/material/colors';
// import HomeIcon from'@mui/icons-material/Home';
// import  CategoryIcon  from '@mui/icons-material/Category';
// import {ShoppingCart} from '@mui/icons-material';
// // import {ReviewsIcon} from '@mui/icons-material';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import CallIcon from '@mui/icons-material/Call';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// // import IconButton from '@mui/icons-material/Icon';
// // import ProductIcon from '@mui/icons-material/Product';

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';

// export default function ButtonAppBar() {


//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//     const [searchText, setSearchText] = useState('');

//     const handleSearchChange = (event) => {
//       setSearchText(event.target.value);
//     };
  
//     const handleSearchSubmit = (event) => {
//       event.preventDefault();
//       console.log('Search:', searchText);
//       // Perform search logic here
//     };




      
           
//   return (
//       // <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
//     <Box sx={{ flexGrow: 1 }}>
     
//       <AppBar position="fixed" sx={{height:'41px',bgcolor:'rgb(237, 100, 237);'}}>
//          <Toolbar>
        

//         <div className='avtr'>
//         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//          {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
//         {/* <Typography sx={{ : 100 }}>Profile</Typography>   */}
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32,bgcolor:'orange',margin:'0px 0px 20px'}}>D</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//         </div>



//         <ul>
//         <li><Link to='/Homepage'>Home</Link></li>
//   <li class='active'><Link to='/Category'>Category</Link></li>
//   <li><Link to='/Product'>Product</Link></li>
//   <li><a href="#contact">Cart</a></li>
//   <li><a href="#contact">Review</a></li>
  
// </ul>




// <div className="search-container">
//             <form onSubmit={handleSearchSubmit}>
//               <InputBase
//                 placeholder="Search..."
//                 className="search-input"
//                 value={searchText}
//                 onChange={handleSearchChange}
//               />
//               <IconButton type="submit" className="search-icon">
//                 <SearchIcon />
//               </IconButton>
//             </form>
//           </div>
// </Toolbar>
//       </AppBar>
//       <br></br><br></br>

//       <div className="Ftot">
//       <h1 className='frutxt'>Fruits</h1>
//       <div className='apple'><img src="https://cdn.britannica.com/95/182495-050-F88677C7/apples-cut-apple-foreground.jpg?w=840&h=460&c=crop" className='appleimg'></img>
//                <p className="app">Apple</p>
//                <p className="apprice">RS.150 per kg</p>
//                <div className="Addapp">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>

//             <div className='stra'><img src="https://hips.hearstapps.com/countryliving/assets/15/22/1432664914-strawberry-facts1.jpg" className='straimg'></img>
//                <p className="strawberry">Strwaberry</p>
//                <p className="strawprice">RS.200 per kg</p>
//                <div className="Addstraw">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='ora'><img src="https://static-bebeautiful-in.unileverservices.com/Why-you-must-eat-an-orange-every-day_1.jpg" className='oraimg'></img>
//                <p className="orange">Orange</p>
//                <p className="oraprice">RS.100 per kg</p>
//                <div className="Addora">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>



//             <div className='pome'><img src="https://images.herzindagi.info/image/2023/Feb/pomegranate-seeds-recipes.jpg" className='pomeimg'></img>
//                <p className="pomeo">Pomeogranate</p>
//                <p className="pomprice">RS.70 per kg</p>
//                <div className="Addpom">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='mang'><img src="https://c.ndtvimg.com/2023-05/3ph40r2_mango_625x300_02_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" className='mangimg'></img>
//                <p className="mango">Mango</p>
//                <p className="mangprice">RS.80 per kg</p>
//                <div className="Addmang">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='grape'><img src="https://images.healthshots.com/healthshots/en/uploads/2023/03/01181103/Grapes-1600x900.jpg" className='grapeimg'></img>
//                <p className="grapee">Grape</p>
//                <p className="grapeprice">RS.50 per kg</p>
//                <div className="Addgrape">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>






           
//       </div>

//       </Box>
//   );
//   }










import React, { useState,useEffect } from 'react';
import './Food.css';
import Store from './Stored';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import MenuIcon from '@mui/icons-material/Menu';
import 'react-slideshow-image/dist/styles.css';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Food = ({ addToCart }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // setClicked(!clicked);
    setDropdownVisible(!dropdownVisible);
  };

  const handle1Click = () => {
    setClicked(!clicked);
  };


const [anchorEl, setAnchorEl] = useState(null);
const [searchTerm, setSearchTerm] = useState('');
// const [cartItems, setCartItems,] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Wheat',
      image: 'https://dookan.com/cdn/shop/products/18jS3d68CWfbjra-d41L9bM3L6qt_wmji.png?v=1655906026',
      price: 200,
      description:" (5 kg)"
    },
    {
      id: 2,
      name: 'Oats',
      image: 'https://bagrrys.com/cdn/shop/products/WHITE-OATS_large.jpg?v=1634708821',
      price: 110,
      description:" per kg"
    },
    {
      id: 3,
      name: 'Barley',
      image: 'https://m.media-amazon.com/images/I/81M012KCTyL._AC_UF1000,1000_QL80_.jpg',
      price: 450,
      description:" per kg"
    },
    {
      id: 4,
      name: 'Corn',
      image: 'https://shop.annam-gourmet.com/pub/media/catalog/product/cache/1fe3c1e9e13fd64b7e8f99f9c9bdb2b0/F/1/F164367_4057.jpg',
      price: 144,
      description:" per kg"
    },
    {
      id: 5,
      name: 'Millet',
      image: 'https://m.media-amazon.com/images/I/81lYUYWaXGL._AC_UF1000,1000_QL80_.jpg',
      price: 61,
      description:" per kg"
    },
    {
      id: 6,
      name: 'Farro',
      image: 'https://m.media-amazon.com/images/I/71yNIhmCHIL.jpg',
      price: 400,
      description:" per kg"
    },
    {
      id: 7,
      name: 'Quinoa',
      image: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1399079_1_425x425.jpg',
      price: 450,
      description:" per kg"
    },
    {
      id: 8,
      name: 'Bulgar',
      image: 'https://m.media-amazon.com/images/I/71cGJxv5xxL._AC_UF1000,1000_QL80_.jpg',
      price: 485,
      description:" (500 g)"
    },
    {
      id: 9,
      name: 'Einkorn',
      image: 'https://m.media-amazon.com/images/I/813AvOTt9VL.jpg',
      price: 1500,
      description:" per kg"
    },
    {
      id: 10,
      name: 'Farro',
      image: 'https://m.media-amazon.com/images/I/71yNIhmCHIL._AC_UF1000,1000_QL80_.jpg',
      price: 150,
      description:" per kg"
    },

    {
        id: 11,
        name: 'Teff',
        image: 'https://www.bioliving.com.au/assets/full/04899.jpg?20210119140017',
        price: 260,
        description:" per kg"
      },

      {
        id: 12,
        name: 'Wild Rice',
        image: 'https://www.kroger.com/product/images/large/front/0007341650950',
        price: 150,
        description:" per kg"
      },
  ];


  const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product
  const handleQuantityChange = (event, productId) => {
    const newQuantities = { ...productQuantities };
    const newValue = parseInt(event.target.value);
  
    // Check if the input value is a number
    if (!isNaN(newValue)) {
      // If the input value is less than 1, set it to 1
      if (newValue < 1) {
        newQuantities[productId] = 1;
      } else {
        // Otherwise, set the new quantity
        newQuantities[productId] = newValue;
      }
    } else {
      // If the input value is not a number, reset it to 1
      newQuantities[productId] = 1;
    }
  
    setProductQuantities(newQuantities);
  };
  

const [cartItems, setCartItems] = useState(() => {
  const savedCartItems = localStorage.getItem('cartItems');
  return savedCartItems ? JSON.parse(savedCartItems) : [];
});

useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);



const handleAddToCart = (product) => {
  const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
  const item = { ...product, quantity };
  setCartItems((prevCartItems) => [...prevCartItems, item]);
  addToCart(item);
};
  
  
  
  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

const filteredProducts = products.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  

  return (
    <div>
      <div>
    <nav className='fooNavbarItems'>
      <h1 className='foonavbar-logo' onClick={handleClick}>KK
      {dropdownVisible && (
              <div className='foodropdown-menu'>
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
            )}</h1>


<div className='foomenu-icons' onClick={handle1Click}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`foonav-menu ${clicked ? 'active' : ''}`}>
     <Link to='./Homepage1'>
        <li className='#'>
          <a href='/' className='fooHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li>
        </Link>
        
        <Link to='./Category'>
        <li className='fooCategory'>
       
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li>
        </Link>
       
        <Link to='./Product'>
        <li className='fooProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        </Link>

        <Link to='./CartPage'>
        <li className='fooCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart({cartItems.length})
        </li>
        </Link>
             <Link to='./Feedback'>
        <li className='fooFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
        </li>
            </Link>



        {/* <button className='foohbtn'>SignUp</button> */}
      </ul>
    </nav>
    </div>

    <br></br><br></br>

    <div className='fsearch-container'>
          <input
            type='text'
            className='search-input'
            placeholder='Search products...'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {searchTerm && (
        <div className="search-term">
          <p>Showing results for: <strong>{searchTerm}</strong></p>
        </div>
      )}

      <br></br><br></br><br></br>

       <div className='fooprobox'>
       
       <div className='food'>
        <Grid  container spacing={2} align="center" >
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={3} key={product.id}>
            <Card>
              <CardMedia style={{border:"4px solid white",width:"185px"}}component="img" height="250" src={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h9" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                ₹{product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <Button
    onClick={() => handleQuantityChange({ target: { value: (productQuantities[product.id] || 1) - 1 } }, product.id)}
    sx={{ color: 'red', fontSize: '1.5rem' }}
    size="small"
  >
    -
  </Button>
  <TextField
    type='number'
    label='Quantity'
    variant='outlined'
    value={productQuantities[product.id] || 1}
    onChange={(event) => handleQuantityChange(event, product.id)}
    inputProps={{ min: 1 }}
    sx={{ width: '80px', mx: 1 }}
  />
  <Button
    onClick={() => handleQuantityChange({ target: { value: (productQuantities[product.id] || 1) + 1 } }, product.id)}
    sx={{ color: 'red', fontSize: '1.5rem' }}
    size="small"
  >
    +
  </Button>

                <div className='Foodcart'>
              <Button sx={{color:'red'}}onClick={() => handleAddToCart(product)}>Add to Cart</Button></div>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>


      </div>         
</div>
  );
};

export default Food;
