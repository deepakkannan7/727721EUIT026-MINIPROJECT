import * as React from 'react';
import  './Homepage.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import HomeIcon from'@mui/icons-material/Home';
import  CategoryIcon  from '@mui/icons-material/Category';
import {ShoppingCart} from '@mui/icons-material';
// import {ReviewsIcon} from '@mui/icons-material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CallIcon from '@mui/icons-material/Call';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import IconButton from '@mui/icons-material/Icon';
// import ProductIcon from '@mui/icons-material/Product';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function ButtonAppBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const spanStyle = {
      padding: '20px',
      background: '#efefef',
      color: '#000000'
    }
    
    const divStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '400px'
    }
    const slideImages = [
      {
        url: 'https://dom.com.cy/upload/iblock/519/51926b61cb8c76dce9260544b7336eaf.jpg',
       
      },
      {
        url: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/Grocery-Hero-1392x464.jpg?rev=e9e1996b83ef4241be6b0d0c095e20db&sc_lang=en-IN&w=1392&hash=FB26914DC7411A3D3A37C82040CDBA02',
  
      },
      {
        url: 'https://sugermint.com/wp-content/uploads/2022/06/Best-Health-Drink-for-Kids.jpg',

      },
      {
        url: 'https://st.depositphotos.com/1063437/2337/i/600/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg',

      },
    ];


      
           
  return (
      // <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
    <Box sx={{ flexGrow: 1 }}>
      <div className='appb'>
      <AppBar position="fixed" sx={{height:'40px',bgcolor:'brown'}}>
         <Toolbar>
        

        <div className='avtr'>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
         {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
        {/* <Typography sx={{ : 100 }}>Profile</Typography>   */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32,bgcolor:'orange',margin:'0px 0px 20px'}}>D</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </div>
        
            {/* <div className='dropdown'>
            <MenuIcon />
            <div className='dropdown-content'>
              <p id="dt">HomePage</p>
              </div>
              </div> */}
        

            <div className='hom'>
            <IconButton
            size="large"
            // edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
    
            <div className='hic'>
            <HomeIcon
             sx={{ fontSize: 20,color:"white", }}className='just'></HomeIcon></div>
             <div className='homet'>
             <a href="#" className="hometxt">Home</a></div>
             </IconButton></div>


<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <div className='catic'>
          <CategoryIcon sx={{ fontSize: 20,color:"white" }}className='just'></CategoryIcon></div>
          <div className='dropdown'>
          <a href="#" className="hmtxt">Category</a>
          <div className='dropdown-content'>
             <a href="#">Fruits</a>
             <a href="#">Vegetables</a>
             <a href="#">Dairy</a>
             <a href="#">Meat and Fish</a>
             <a href="#">Pasta,rice and cereals</a>
             <a href="#">Drinks</a>
             </div>
            </div>
          </IconButton>


          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

<div className='Prodic'>
          <ProductionQuantityLimitsIcon sx={{ fontSize: 20,color:"white" }}className='just'> </ProductionQuantityLimitsIcon></div>
          <div className='Prot'>
          <a href="#" className="Prodtxt">Product</a></div>

          </IconButton>



          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

<div className='cartic'>
          <ShoppingCart sx={{ fontSize: 20,color:"white" }}className='just'> </ShoppingCart></div>
          <div className='cartt'>
          <a href="#" className="Carttxt">Cart</a></div>
          </IconButton>




          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
<div className='revic'>
          < FeedbackIcon sx={{ fontSize: 20,color:"white" }}className='just'> </FeedbackIcon></div>
          <div className='revt'>
          <a href="#"  className="revtxt">Review</a></div>
          </IconButton>



          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >


<input type='search' placeholder='Search a place' className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
{/* </div> */}


  
        </Toolbar>
      </AppBar>
      </div>
      <div className='Hbdy'>
      <br></br><br></br>
      {/* <h1 className='wel'>WELCOME!!!</h1>
      <h1 className='see'>See the Exclusive Offers</h1> */}

      <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,'height':500 }}>
                 
                </div>
              </div>
            ))} 
          </Slide>
        </div>


      <div className='fa'>
        <h3 className='fav'>Fruits and Vegetables</h3>
        <div className='frefru'><img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=1200:*" className='img'></img> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>     
         <p className='ff'>Fresh Fruits</p>
        <h3 className='min1'>UPTO 24% OFF</h3> </div>

        <div className='freveg'><img src="https://bookmysabzi.com/image/cache/catalog/cat-veggi-2-480x320.png" className='img1'></img> <br></br><br></br>     
         <p className='fv'>Fresh Vegetables</p>
        <h3 className='min2'>UPTO 20% OFF</h3> </div>

        <div className='Cuts'><img src="https://as2.ftcdn.net/v2/jpg/02/93/45/87/1000_F_293458795_M056lAFqUvX4esHvUL3Dj9SXzAj5PNTc.jpg" className='img2'></img> <br></br><br></br>     
         <p className='fc'>Cuts & Exotics</p>
        <h3 className='min3'>UPTO 18% OFF</h3> </div>
      </div>

      <div className='bev'>
        <h3 className='beva'>Beverages</h3>
        <div className='tc'><img src="https://cdn.shopify.com/s/files/1/0504/6360/4895/collections/Tea_Coffee_1200x1200.png?v=1647911202" className='tcimg'></img> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>     
         <p className='tc1'>Tea & Coffee</p>
        <h3 className='tcmin'>UPTO 15% OFF</h3> </div>

        <div className='juice'><img src="https://images.squarespace-cdn.com/content/v1/5558b449e4b02de6a6eda24f/1550399003138-HX8DLS6E5T5H7YOZJTAG/Photo+03-02-2019%2C+21+12+01+copy.jpg?format=1500w" className='juiimg'></img> <br></br><br></br>     
         <p className='jui1'>Juices</p>
        <h3 className='juimin'>UPTO 10% OFF</h3> </div>

        <div className='hea'><img src="https://sugermint.com/wp-content/uploads/2022/06/Best-Health-Drink-for-Kids.jpg" className='heaimg'></img> <br></br><br></br>     
         <p className='hea1'>Health Drinks</p>
        <h3 className='heamin'>UPTO 16% OFF</h3> </div>
 
      </div>

      <div className='emf'>
        <h3 className='eamaf'>Eggs,Meat&Fish</h3>
        <div className='egg'><img src="https://clearwaterfarm.ca/wp-content/uploads/2016/08/Eggs.jpg" className='eggimg'></img> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>     
         <p className='egg1'>Farm Eggs</p>
        <h3 className='eggmin'>UPTO 25% OFF</h3> </div>


        <div className='chick'><img src="https://img.freepik.com/premium-photo/raw-chicken-meat-white-background_58830-688.jpg?w=2000" className='chickimg'></img> <br></br><br></br>     
         <p className='chick1'>Chicken & Cuts</p>
        <h3 className='chickmin'>UPTO 28% OFF</h3> </div>


        <div className='fish'><img src="https://img.freepik.com/free-photo/front-view-fresh-fish-slices-with-pepper-dark-surface-ocean-meat-raw-meal-water-photo-color-dinner_179666-24530.jpg" className='fishimg'></img> <br></br><br></br>     
         <p className='fish1'>Fish & Fillets</p>
        <h3 className='fishmin'>UPto 30% OFF</h3> </div>

      </div>
      </div>
      <div className='foo'>
          <div className='sr'>
            <h3 className='sr1'>Support&Resources</h3>
            <a href="#" id='suoo'>Support</a><br></br>
            <a href="#" id='suoo'>FAQ</a><br></br>
            <a href="#" id='suoo'>Privacy policy</a><br></br>
            <a href="#" id='suoo'>Terms and Conditions</a><br></br>
            <a href="#" id='suoo'>Help & Support</a>

          </div>

          <div className='About'>
            <h3 className='abt'>About</h3>
            <a href="#" id='suoo'>About Us</a><br></br>
            <a href="#" id='suoo'>Terms and Policy</a><br></br>
            <a href="#" id='suoo'>Community</a><br></br>
          </div>

          <div className='Contac'>
            <h3 className='cont1'>Contact</h3>
            <a href="#" id='suoo'>Call Center</a><br></br>
            <a href="#" id='suoo'>Email Us</a><br></br>
            <a href="#" id='suoo'>Help Center</a><br></br>
            
              <div className='inst'>
             <a href='#'> <img src="https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg?w=2000" className='instimg'></img></a>
              </div>

              <div className='email'>
             <a href='#'> <img src="https://www.pcworld.com/wp-content/uploads/2023/04/gmail_logo-100758589-orig.jpg?quality=50&strip=all" className='emailimg'></img></a>
              </div>
            
              <div className='face'>
              <a href='#'> <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg?w=360" className='faceimg'></img></a>
              </div>
            
          </div>
      </div>
    </Box>
  );
  }






  