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
// import IconButton from '@mui/icons-material/Icon';
// import ProductIcon from '@mui/icons-material/Product';

export default function ButtonAppBar() {
  return (
      // <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
         <Toolbar>
         <IconButton
            size="large"
            // edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >  
          <Avatar sx={{ width: 32, height: 32 ,color:'black' }}>D</Avatar></IconButton>
          <IconButton
            size="large"
            // edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <div className='mic'>
            <MenuIcon /></div></IconButton>

            <IconButton
            size="large"
            // edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div className='hic'>
            <HomeIcon
             sx={{ fontSize: 35,color:"white" }}className='just'></HomeIcon></div><p className="hometxt">Home</p></IconButton>


<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <div className='catic'>
          <CategoryIcon sx={{ fontSize: 35,color:"white" }}className='just'></CategoryIcon></div><p className="cattxt">Category</p></IconButton>


          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

<div className='Prodic'>
          <HomeIcon sx={{ fontSize: 35,color:"white" }}className='just'> </HomeIcon></div><p className="Prodtxt">Product</p></IconButton>



          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

<div className='cartic'>
          <ShoppingCart sx={{ fontSize: 35,color:"white" }}className='just'> </ShoppingCart></div><p className="Carttxt">Cart</p></IconButton>




          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
<div className='revic'>
          < FeedbackIcon sx={{ fontSize: 35,color:"white" }}className='just'> </FeedbackIcon></div><p className="revtxt">Review</p></IconButton>



          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <div className='conic'>
          < CallIcon sx={{ fontSize: 35,color:"white" }}className='just'> </CallIcon></div><p className="contxt">Contact</p></IconButton>
          
          {/* <div className='contxt'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,}}>
         Contact
          </Typography></div> */}

          {/* </IconButton> */}
  
        </Toolbar>
      </AppBar>
    </Box>
  );
  }