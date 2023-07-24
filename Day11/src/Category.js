// import * as React from 'react';
// import './Category.css';
// import {react,useState} from 'react';
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
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';

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
//   <li><Link to='/Homepage'>Home</Link></li>
//   <li><a  class="active" href="#news">Category</a></li>
//   <li><Link to='/Product'>Product</Link></li>
//   <li><a href="#contact">Cart</a></li>
//   <li><a href="#contact">Review</a></li>
  
// </ul>
        
//             {/* <div className='dropdown'>
//             <MenuIcon />
//             <div className='dropdown-content'>
//               <p id="dt">HomePage</p>
//               </div>
//               </div> */}
        




//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >


// <input type='search' placeholder='Search a place' className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// <Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
// {/* </div> */}
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


  
//         </Toolbar>
//       </AppBar>
//       <br></br><br></br>


      
 
//       <div className='Catot'>
//       <Link to='/Fruits'>
//             <div className='Cafruits'><img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=1200:*" className='Caimg'></img>
//                <p className="Cafr">Fruits</p>
//             </div></Link>



//             <div className='Caveg'><img src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6" className='Vegimg'></img>
//               <p className="Cavg">Vegetables</p>
//             </div>
//             <Link to='/Food'>
//             <div className='Cafoo'><img src="https://4.imimg.com/data4/WT/HN/MY-19032682/food-grains.jpg" className='fooimg'></img>
//               <p className="Cafg">Foodgrains</p>
//             </div></Link>


//             <div className='Cabev'><img src="https://www.tutorialspoint.com/food_and_beverage_services/images/non_alcoholic_beverages.jpg" className='bevimg'></img>
//               <p className="Cabv">Beverages</p>
//             </div>


//             <div className='Cahk'><img src="https://martha.com/cdn/shop/collections/Copper_Collection_Rack_0040_0040_square_1_1600x_a94d7c5c-93b8-49af-9ef6-f7d8b0716d63.jpg?v=1671475438" className='hkimg'></img>
//               <p className="Cahok">Home&Kitchen</p>
//             </div>


//             <div className='Cabs'><img src="https://m.economictimes.com/thumb/msid-95844398,width-900,height-900,resizemode-4,imgsize-51498/here-are-the-best-deodorants-for-men-in-india.jpg" className='bsimg'></img>
//               <p className="Cabes">Beauty Store</p>
//             </div>

           
//             <div className='Caeggs'> <Link to='/Meat'><img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/12de5b460881df43d11bd5a9dfe01176c761/i1080x475.jpg" className='mfimg'></img>
//               <p className="Camf">Eggs,Meat&Fish</p></Link>
//             </div>

//             <Link to='/Bakery'>
//             <div className='Cabk'><img src="https://thumbs.dreamstime.com/b/bakery-products-arrangement-tasty-31282431.jpg" className='bkimg'></img>
//               <p className="Cabks">Bakery</p>
//             </div></Link>


//             <div className='Cadia'><img src="https://www.idahomilkproducts.com/wp-content/uploads/2021/09/processing-differences-common-dairy-products.jpg" className='diaimg'></img>
//               <p className="Cadiary">Dairy</p>
//             </div>


//             <div className='Caba'><img src="https://www.mompshop.com/cdn/shop/products/JohnsonBabyProducts_1_1.jpg?v=1662372379" className='baimg'></img>
//               <p className="Cababy">Baby care</p>
//             </div>


//             <div className='Cagour'><img src="https://media.istockphoto.com/id/185065945/photo/pasta-variation.jpg?s=612x612&w=0&k=20&c=MQEjU7uAnvTISNoI78MpCdum7sjN93tjeED3rFqjdHw=" className='gourimg'></img>
//               <p className="Cagourment">Noodles and Pasta</p>
//             </div>

//             <div className='Cahh'><img src="https://i2-prod.gloucestershirelive.co.uk/incoming/article2388909.ece/ALTERNATES/s1200b/1_Poundland-Promotion.jpg" className='hhimg'></img>
//               <p className="Cahouse">Cleaning&Household</p>
//             </div>


           
//           </div>
//     </Box>
//   );
//   }


import React, { useState } from 'react';
import './Category.css';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Appbar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useHistory } from 'react-router-dom';

const Category = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div>
      <div>
    <nav className='catNavbarItems'>
      <h1 className='catnavbar-logo'>KK</h1>

      <div className='clemenu-icons' onClick={handleClick}>
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

      <ul className='catnav-menu'>
        <Link to='./Homepage1'>
        <li>
          <a href='/' className='catHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li></Link>
    
        <li className='catCategory'>
          <Link to='./Category'>
         
            <CategoryIcon className='cat'></CategoryIcon>Category
          </Link>
          
        </li>
         <Link to='./Product'>
        <li className='catProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
          
        </li></Link>

        <Link to='./CartPage'>
        <li className='catCart'>
         
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li>
          </Link>
          <Link to='./Feedback'>
        <li className='catFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
        </li>
            </Link>
      </ul>
    </nav>
    </div>

    <br></br><br></br>
        <br></br>

        <div className='catetot'>
        <Link to='./Fruits'>
        <div className='catefru'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=640:*" className='catefruimg'></img>
                <p>Fruits</p>
            </div></Link>
            <div className='cateveg'>
                <img src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg" className='catevegimg'></img>
                <p>Vegetables</p>
            </div>
            <div className='catedai'>
                <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" className='catedaiimg'></img>
                <p>Dairy</p>
            </div>

            <Link to='./Bakery'>
            <div className='catebak'>
                <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className='catebakimg'></img>
                <p>Bakery</p>
            </div></Link>

            <Link to='./Food'>
            <div className='catefg'>
                <img src="https://cutewallpaper.org/24/grocery-png/grocery-png-clipart-grocery-products-images-png-transparent-png--transparent-png-image-pngitem.png  " className='catefgimg'></img>
                <p>Foodgrains</p>
            </div>
            </Link>

            <Link to='./Cleaning'>
            <div className='cateCs'>
                <img src="https://t4.ftcdn.net/jpg/01/50/19/63/360_F_150196363_aDtMhQU9VWlp8ImlmTvqKZwJiHmMUgxv.jpg" className='cateCsimg'></img>
                <p>Cleaning and Supplies</p>
            </div>
            </Link>

            <div className='catemeat'>
                <img src="https://champigne.com/wp-content/uploads/2022/09/Get-the-Freshest-Meats-from-the-Market-with-Farmers-Market.jpg" className='catemeatimg'></img>
                <p>Meat</p>
            </div>
            <div className='catehd'>
                <img src="https://myfaayda.com/wp-content/uploads/2021/09/Top-10-Best-Healthy-Drinks-In-India-For-Men-Women-Kids.jpg" className='catehdimg'></img>
                <p>Health Drink</p>
            </div>
            <div className='caterice'>
                <img src="https://nammamaligai.com/wp-content/uploads/2016/10/ponni-rice-1207412-435x430.jpg" className='catericeimg'></img>
                <p>Rice</p>
            </div>
        </div>
</div>
  );
};

export default Category;



  