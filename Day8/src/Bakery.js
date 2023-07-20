// import {react,useState} from 'react';
// import './Bakery.css'
// import {Link} from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import { Avatar } from '@mui/material';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import {useDispatch,useSelector} from 'react-redux';
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

//     const counter=useSelector((state)=>state.counter);
//     const increment =()=>{
//       dispatch({type:"INC"})
//     }
//     const decrement =()=>{
//       dispatch({type:"DEC"})
//     }
//     const dispatch=useDispatch();
    




      
           
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
//   <li><Link to='/Homepage'>Home</Link></li>
//   <li class='active'><Link to='/Category'>Category</Link></li> 
//    <li><Link to='/Product'>Product</Link></li>
//   <li><a href="#contact">Cart{counter}</a></li>
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

//       <div className="baktot">
//       <h1 className='bakery'>Bakery</h1>
//       <div className='bread'><img src="https://assets.epicurious.com/photos/611137f4ae1741cb107078b4/16:9/w_2560%2Cc_limit/Baker'sPercentages_HERO_072921_19667.jpg" className='breadimg'></img>
//                <p className="brea">Bread</p>
//                <p className="breadprice">RS.30 per Packet</p>
//                <div className="Addbread">
//                 <button class="cart" onClick={increment}>Add To Cart</button>
//                 <button class="cartt"onClick={decrement}>Remove</button>
//                </div>
//             </div>

//             <div className='cakes'><img src="https://i.ytimg.com/vi/5R9uZZpfKO4/maxresdefault.jpg" className='cakesimg'></img>
//                <p className="cak">Cakes</p>
//                <p className="cakprice">RS.700 per kg</p>
//                <div className="Addcak">
//                 <button class="cart" onClick={increment}>Add To Cart</button>
//                 <button class="cartt"onClick={decrement}>Remove</button>
//                </div>
//             </div>


//             <div className='cook'><img src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg   " className='cookimg'></img>
//                <p className="cookies">Cookies</p>
//                <p className="cookprice">RS.100 per Packet</p>
//                <div className="Addcook">
//                 <button class="cart" onClick={increment}>Add To Cart</button>
//                 <button class="cartt"onClick={decrement}>Remove</button>
//                </div>
//             </div>



//             <div className='puff'><img src="https://anitalianinmykitchen.com/wp-content/uploads/2018/11/puff-pastry-sq.jpg" className='puffimg'></img>
//                <p className="puffs">Puff Pastry</p>
//                <p className="puffprice">RS.20 per piece</p>
//                <div className="Addpuff">
//                 <button class="cart" onClick={increment}>Add To Cart</button>
//                 <button class="cartt"onClick={decrement}>Remove</button>
//                </div>
//             </div>


//             <div className='bisc'><img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/07/shutterstock_1840378465-1.jpg" className='biscimg'></img>
//                <p className="biscuit">biscuits</p>
//                <p className="biscprice">RS.40 per Packet</p>
//                <div className="Addbis">
//                 <button class="cart" onClick={increment}>Add To Cart</button>
//                 <button class="cartt"onClick={decrement}>Remove</button>
//                </div>
//             </div>


//             <div className='dough'><img src="https://www.escoffieronline.com/wp-content/uploads/2015/10/Two-donuts-with-chocolate-icing-on-a-white-plate-1400.jpeg" className='doughimg'></img>
//                <p className="doughnuts">Doughnuts</p>
//                <p className="biscprice">RS.70 per piece</p>
//                <div className="Adddough">
//                 <button class="cart" onClick={increment}>Add To Cart</button>
//                 <button class="cartt"onClick={decrement}>Remove</button>
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










import React, { useState } from 'react';
import './Bakery.css';
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


const Bakery = ({ addToCart }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


const [anchorEl, setAnchorEl] = useState(null);
const [searchTerm, setSearchTerm] = useState('');
const [cartItems, setCartItems,] = useState([]);

const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product
const handleQuantityChange = (event, productId) => {
  const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
  setProductQuantities(newQuantities);
};
  const products = [
    {
      id: 1,
      name: 'Cakes',
      image: 'https://www.hersheyland.com/content/dam/hersheyland/en-us/blogs/blog-images/peanut-butter-drip-cake.jpg',
      price: 400,
    },
    {
      id: 2,
      name: 'Cookies',
      image: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
      price: 50,
    },
    {
      id: 3,
      name: 'Bread',
      image: 'https://m.media-amazon.com/images/I/61RMy7+c38L._AC_UF1000,1000_QL80_.jpg',
      price: 30,
    },
    {
      id: 4,
      name: 'Macron',
      image: 'https://m.media-amazon.com/images/I/41l851CPa0L._AC_UF1000,1000_QL80_.jpg',
      price: 20,
    },
    {
      id: 5,
      name: 'Bagels',
      image: 'https://www.foodandwine.com/thmb/dtO6AaS7-Af4TleXBuFIAnqhCn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-bagels-in-america-call-your-mother-FT-BLOG0321-5424eb5dc8754bfdbf646dae7290143b.jpg',
      price: 70,
    },
    {
      id: 6,
      name: 'Puff Pastry',
      image: 'https://www.theflavorbender.com/wp-content/uploads/2014/12/Easy-Rough-Puff-Pastry-2051-Copy-Copy-Copy-1-500x375.jpg',
      price: 50,
    },
    {
      id: 7,
      name: 'Donuts',
      image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Glazed-Donuts.png',
      price: 80,
    },
    {
      id: 8,
      name: 'Candy',
      image: 'https://media.istockphoto.com/id/1270389595/photo/assortment-of-multicolored-candies-jelly-beans-and-lollipops-background.webp?b=1&s=170667a&w=0&k=20&c=JEBI13fSRaf2G7bDqKnfkzl65pDmR1Od_Oi2KCsW3Fw=',
      price: 100,
    },
    {
      id: 9,
      name: 'Croissants',
      image: 'https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg ',
      price: 60,
    },
    {
      id: 10,
      name: 'Pies',
      image: 'https://sallysbakingaddiction.com/wp-content/uploads/2016/06/blueberry-pie.jpg',
      price: 130,
    },

    {
        id: 11,
        name: 'Biscuits',
        image: 'https://rukminim1.flixcart.com/image/300/300/krtjgcw0/cookie-biscuit/e/e/d/bourbon-sandwich-biscuits-britannia-original-imag5j4u3dggthky.jpeg',
        price: 40,
      },

      {
        id: 12,
        name: 'Cupcakes',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2017/01/Eggless-Vanilla-Cupcakes-500x500.jpg',
        price: 30,
      },
  ];

  const handleAddToCart = (product) => {
    const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
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
    <nav className='bakNavbarItems'>
      <h1 className='baknavbar-logo'>KK</h1>


      <div className='bakmenu-icons' onClick={handleClick}>
        <MenuIcon />
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
     
      <ul className='baknav-menu'>
     <Link to='./Homepage1'>
        <li className='#'>
          <a href='/' className='bakHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li>
        </Link>
        
        <Link to='./Category'>
        <li className='bakCategory'>
       
            <CategoryIcon className='bakcat'></CategoryIcon>Category
        </li>
        </Link>
       
       <Link to='./Product'>
        <li className='bakProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        </Link>

        <Link to='./CartPage'>
        <li className='bakCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li>
        </Link>
        <li className='#'>
          <a href='/' className='bakFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
          </a>
        </li>
      </ul>
    </nav>
    </div>

    <br></br><br></br>
       <div className='bakprobox'>
       
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
                  {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  type="number"
                  label="Quantity"
                  variant="outlined"
                  value={productQuantities[product.id] || 1} // Use the selected quantity or default to 1 if not set
                  onChange={(event) => handleQuantityChange(event, product.id)}
                  inputProps={{ min: 1 }}
                  sx={{ width: '80px', mr: 2 }}
                />
              <Button sx={{color:'red'}}onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>


      </div>         
</div>
  );
};

export default Bakery;
