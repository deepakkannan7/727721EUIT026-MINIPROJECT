import React, { useState,useEffect } from 'react';
import './Cleaning.css';
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


const Cleaning = ({ addToCart }) => {
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
      name: 'Vacuum Cleaner',
      image: 'https://images.philips.com/is/image/philipsconsumer/4ab0349e31fc4fe582b2ad14004cbbc8?$jpglarge$&wid=960',
      price: 1000,
      description:" 800 watts"
    },
    {
      id: 2,
      name: 'Sponges',
      image: 'https://growstar.in/wp-content/uploads/2022/07/OCT150001378xx19OCT21_5_B-min.jpg',
      price: 300,
      description:" pack of 5"
    },
    {
      id: 3,
      name: 'Squeegee',
      image: 'https://groceries.morrisons.com/productImages/404/404411011_0_640x640.jpg?identifier=81716b31a2ef2500840959efa65582ea',
      price: 400,
      description:" 30 cm"
    },
    {
      id: 4,
      name: 'Spray Bottles',
      image: 'https://m.media-amazon.com/images/I/71l42gsjdBS._AC_UY1100_.jpg',
      price: 300,
      description:" 300 ml"
    },
    {
      id: 5,
      name: 'Scrub Brush',
      image: 'https://m.media-amazon.com/images/I/61o9CWm+sYL._AC_SS300_.jpg',
      price: 150,
      description:" 120 degree rotation"
    },
    {
      id: 6,
      name: 'Broom',
      image: 'https://rukminim1.flixcart.com/image/850/1000/kuh9yfk0/broom-brush/z/q/g/1-plastic-broom-stick-soft-synthetic-bristles-like-natural-grass-original-imag7hgf2yfhpn8g.jpeg?q=90',
      price: 150,
      description:" 39' phool  Grip" 
    },
    {
      id: 7,
      name: 'Harpic',
      image: 'https://www.spencers.in/media/catalog/product/1/1/1191358_1.jpg',
      price: 400,
      description:" pack of 2"
    },
    {
      id: 8,
      name: 'Dustpan',
      image: 'https://www.spenlo.com/image/cache/catalog/products/Spenlo/Clean-Plus-180-Dust-Pan-Waste-Kori-700x700.jpg',
      price: 90,
      description:" per dustpan"
    },
    {
      id: 9,
      name: 'Vanish',
      image: 'https://demandsforever.com/wp-content/uploads/2020/09/vanish-oxi-action-liquid-800ml1.jpg',
      price: 200,
      description:" per liter"
    },
    {
      id: 10,
      name: 'Lizol',
      image: 'https://m.media-amazon.com/images/I/61BB131d7ZL._SL1000_.jpg',
      price: 150,
      description:" per liter"
    },

    {
        id: 11,
        name: 'Vim',
        image: 'https://5.imimg.com/data5/TD/ID/MY-60598140/vim-double-power-concentrated-gel-500x500.jpg',
        price: 130,
        description:" per liter"
      },

      {
        id: 12,
        name: 'White Vinegar',
        image: 'https://www.ubuy.com.pr/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMTRhM2M4MGItNzRjYS00YjY4LTlhYWMtYTAwZGFhZGJkNjExLmJlMWNmYTBkOWU0NGZjMjJmN2VhYWRlNjAzNDVlMWE1LmpwZWc.jpg',
        price: 140,
        description:" 500 ml"
      },
  ];

  const handleAddToCart = (product) => {
    const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
    const item = { ...product, quantity };
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    addToCart(item);
  };
  
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

const filteredProducts = products.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

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

  

  return (
    <div>
      <div>
    <nav className='cleNavbarItems'>
      <h1 className='clenavbar-logo' onClick={handleClick}>KK
      {dropdownVisible && (
              <div className='cledropdown-menu'>
                <div className='dropdown-column'>

                  <Link to='./Profile'>
                  <div className='bprofile'>
                    <AccountCircleIcon /> Profile
                  </div>
                  </Link>
                  <div className='bmyacc'>
                    <AddIcon /> My Account
                  </div>
                  <div className='bsa'>
                    <SwitchAccountIcon /> Switch Account
                  </div>

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
     <div className='clemenu-icons' onClick={handle1Click}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`clenav-menu ${clicked ? 'active' : ''}`}>
      
     <Link to='./Homepage1'>
        <li className='#'>
          <a href='/' className='cleHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li>
        </Link>
        
        <Link to='./Category'>
        <li className='cleCategory'>
       
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li>
        </Link>
       
        <Link to='./Product'>
        <li className='cleProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        </Link>
        
        <Link to='./CartPage'>
        <li className='cleCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart({cartItems.length})
        </li>
        </Link>
          <Link to='./Feedback'>
        <li className='cleFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
        </li>
            </Link>


      </ul>
    </nav>
    </div>
    <br></br><br></br>

    <div className='clsearch-container'>
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

       <div className='cleprobox'>
        <div className='cle'>
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
                ₹{product.price}{product.description}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography> */}
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

                <div className='cleaningcart'>
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

export default Cleaning;