





import React, { useState } from 'react';
import './Product.css';
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


const Product = ({ addToCart }) => {
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
      name: 'Milk',
      image: 'https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/06/cover-milk-1.jpg?fit=1200%2C675&ssl=1',
      price: 15,
    },
    {
      id: 2,
      name: 'Eggs',
      image: 'https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2021/eggs-in-a-wood-bowl.jpg',
      price: 6,
    },
    {
      id: 3,
      name: 'Bread',
      image: 'https://assets.epicurious.com/photos/611137f4ae1741cb107078b4/16:9/w_2560%2Cc_limit/Baker\'sPercentages_HERO_072921_19667.jpg',
      price: 30,
    },
    {
      id: 4,
      name: 'Soft Drinks',
      image: 'https://img.freepik.com/free-photo/colorful-soda-drinks-macro-shot_53876-18225.jpg?w=2000',
      price: 25,
    },
    {
      id: 5,
      name: 'Bottled Water',
      image: 'https://static9.depositphotos.com/1177973/1206/i/600/depositphotos_12066692-stock-photo-plastic-bottles-of-water-close.jpg',
      price: 20,
    },
    {
      id: 6,
      name: 'Chocolates',
      image: 'https://media.istockphoto.com/id/1276645382/photo/chocolate-assortment-background-top-view-of-different-kinds-of-chocolate.jpg?s=612x612&w=0&k=20&c=VSi2enumIt0aHCKTu4_yzvAFIm7DFGdNXZii0mj9iYs=',
      price: 30,
    },
    {
      id: 7,
      name: 'Cakes',
      image: 'https://drivemehungry.com/wp-content/uploads/2022/04/sponge-cake-16.jpg',
      price: 10,
    },
    {
      id: 8,
      name: 'Cookies',
      image: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
      price: 80,
    },
    {
      id: 9,
      name: 'Fresh Fruits',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/world_breakfast/fresh_fruit_bowl_recipe_400.jpg',
      price: 100,
    },
    {
      id: 10,
      name: 'Chicken',
      image: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/19237803-92b4-44ae-a355-90f58cffac43/2adc74b3-4411-45c9-b7eb-1b8cc1b7edf7/1280x720/match/image.jpg',
      price: 500,
    },
    {
      id: 11,
      name: 'Apple Juice',
      image: 'https://i.ytimg.com/vi/bGfJILzw6Mc/maxresdefault.jpg',
      price: 50,
    },
    {
      id: 12,
      name: 'Rice',
      image: 'https://nammamaligai.com/wp-content/uploads/2016/10/ponni-rice-1207412-435x430.jpg',
      price: 1000,
    },
    {
      id: 13,
      name: 'Ice Creams',
      image: 'https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg',
      price: 50,
    },
    {
      id: 14,
      name: 'Boost',
      image: 'https://cdn01.pharmeasy.in/dam/products_otc/X79579/boost-health-energy-sports-nutrition-drink-450gm-pet-jar-3-1654249513.jpg',
      price: 200,
    },
    {
      id: 15,
      name: 'Flour',
      image: 'https://thumbs.dreamstime.com/b/wheat-grain-flour-22804776.jpg',
      price: 200,
    },
    {
      id: 16,
      name: 'Noodles',
      image: 'https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg',
      price: 60,
    },
    {
      id: 17,
      name: 'Toothpaste',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_12/3599096/230320-toothpaste-kb-2x1.jpg',
      price: 20,
    },
    {
      id: 18,
      name: 'Soap',
      image: 'https://images.mamaearth.in/catalog/product/t/e/tea-tree-bathing-soap.jpg',
      price: 30,
    },
    {
      id: 19,
      name: 'Baking Powder',
      image: 'https://lacasa.co.in/wp-content/uploads/2021/09/baking-soda-powder.jpeg',
      price: 100,
    },
    {
      id: 20,
      name: 'Sugar',
      image: 'https://img.freepik.com/free-photo/world-diabetes-day-sugar-wooden-bowl-dark-surface_1150-26666.jpg',
      price: 20,
    },
    {
      id: 21,
      name: 'Tea Powder',
      image: 'https://www.meltingfoods.in/cdn/shop/products/Tea-Powder.jpg?v=1618981356',
      price: 20,
    },

    {
      id: 22,
      name: 'Sprite',
      image: 'https://etimg.etb2bimg.com/photo/95086262.cms',
      price: 45,
    },
    {
      id: 23,
      name: 'Chicken',
      image: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/19237803-92b4-44ae-a355-90f58cffac43/2adc74b3-4411-45c9-b7eb-1b8cc1b7edf7/1280x720/match/image.jpg',
      price: 500,
    },
    {
      id: 24,
      name: 'Curd',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_To_Make_Fresh_Homemade_Yogurt_Curd.jpg',
      price: 20,
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
    <nav className='pNavbarItems'>
      <h1 className='pnavbar-logo'>KK</h1>


      <div className='pmenu-icons' onClick={handleClick}>
        <MenuIcon />
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
     
      <ul className='pnav-menu'>
     <Link to='./'>
        <li className='#'>
          <a href='/' className='pHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li></Link>
        
        <Link to='./Category'>
        <li className='pCategory'>
       
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li></Link>
       
        <li className='pProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        <Link to='./CartPage'>
        <li className='pCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li></Link>
        <li className='#'>
          <a href='/' className='pFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
          </a>
        </li>
      </ul>
    </nav>
    </div>

    <br></br><br></br>
       <div className='probox'>
       
        <Grid  container spacing={2} align="center" >
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={2} key={product.id}>
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

export default Product;
