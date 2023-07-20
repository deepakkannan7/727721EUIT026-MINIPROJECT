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
import './Fruits.css';
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


const Fruits = ({ addToCart }) => {
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
      name: 'Apple',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      price: 100,
    },
    {
      id: 2,
      name: 'Grape',
      image: 'https://images.healthshots.com/healthshots/en/uploads/2023/03/01181103/Grapes.jpg',
      price: 50,
    },
    {
      id: 3,
      name: 'Mango',
      image: 'https://www.ciad.mx/wp-content/uploads/2017/06/NL-107-NOTA-1.jpg',
      price: 50,
    },
    {
      id: 4,
      name: 'Cucumber',
      image: 'https://www.thedailymeal.com/img/gallery/are-cucumbers-a-fruit-if-so-what-are-pickles/l-intro-1680297622.jpg',
      price: 30,
    },
    {
      id: 5,
      name: 'Plum',
      image: 'https://t4.ftcdn.net/jpg/00/09/36/05/360_F_9360559_nyKoigqjFgX4gdXSMSZCUMlyLLkwy42c.jpg',
      price: 70,
    },
    {
      id: 6,
      name: 'Orange',
      image: 'https://static-bebeautiful-in.unileverservices.com/Why-you-must-eat-an-orange-every-day_1.jpg',
      price: 50,
    },
    {
      id: 7,
      name: 'Pineapple',
      image: 'https://thumbs.dreamstime.com/b/pineapple-slices-isolated-white-30985039.jpg',
      price: 40,
    },
    {
      id: 8,
      name: 'Strawberry',
      image: 'https://hips.hearstapps.com/countryliving/assets/15/22/1432664914-strawberry-facts1.jpg',
      price: 120,
    },
    {
      id: 9,
      name: 'WaterMelon',
      image: 'https://guardian.ng/wp-content/uploads/life/2016/01/vsetop.com_1436355790_19.jpg',
      price: 30,
    },
    {
      id: 10,
      name: 'BlueBerry',
      image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22726_16560822540037952.jpg',
      price: 150,
    },

    {
        id: 11,
        name: 'Papaya',
        image: 'https://images.healthshots.com/healthshots/en/uploads/2022/01/08125002/papaya1.jpg',
        price: 40,
      },

      {
        id: 12,
        name: 'Pomeogranate',
        image: 'https://images.herzindagi.info/image/2023/Feb/pomegranate-seeds-recipes.jpg',
        price: 60,
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
    <nav className='fNavbarItems'>
      <h1 className='fnavbar-logo'>KK</h1>


      <div className='fmenu-icons' onClick={handleClick}>
        <MenuIcon />
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
     
      <ul className='fnav-menu'>
     <Link to='./Homepage1'>
        <li className='#'>
          <a href='/' className='fHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li></Link>
        
        <Link to='./Category'>
        <li className='fCategory'>
       
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li></Link>
       
       <Link to='./Product'>
        <li className='fProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        </Link>

        <Link to='./CartPage'>
        <li className='fCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li></Link>
        <li className='#'>
          <a href='/' className='fFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
          </a>
        </li>
      </ul>
    </nav>
    </div>

    <br></br><br></br>
       <div className='fprobox'>
       
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

export default Fruits;
