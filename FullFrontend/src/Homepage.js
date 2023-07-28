// import React, { useState } from 'react';
// import './Homepage.css';
// import Bakery from './Bakery';
// // import Bakery1 from './Bakery1';
// // import BakeryCarts from './BakeryCarts';
// // import bakerylist from './BakeryData';
// // import BakeryNavbar from './BakeryNavbar';
// // import BakeryRoutes from './BakeryRoutes';
// import CategoryIcon from '@mui/icons-material/Category';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import HomeIcon from '@mui/icons-material/Home';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
// import { Link } from 'react-router-dom';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const Homepage = () => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//     height: '400px'
//   }

//   const slideImages = [
//     {
//       url: 'https://dom.com.cy/upload/iblock/519/51926b61cb8c76dce9260544b7336eaf.jpg',
     
//     },
//     {
//       url: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/Grocery-Hero-1392x464.jpg?rev=e9e1996b83ef4241be6b0d0c095e20db&sc_lang=en-IN&w=1392&hash=FB26914DC7411A3D3A37C82040CDBA02',

//     },
//     {
//       url: 'https://sugermint.com/wp-content/uploads/2022/06/Best-Health-Drink-for-Kids.jpg',

//     },
//     {
//       url: 'https://st.depositphotos.com/1063437/2337/i/600/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg',

//     },
//   ];

  

//   return (
//     <div>
//       <div>
//     <nav className='hNavbarItems'>
//       <h1 className='hnavbar-logo'>Trippy</h1>

//       <div className='hmenu-icons' onClick={handleClick}>
//         <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//       </div>

//       <ul className='hnav-menu'>
//         <li>
//           <a href='/' className='hHome'>
//             <HomeIcon></HomeIcon>Home
//           </a>
//         </li>
       
//         <li className='hCategory'>
       
//             <CategoryIcon className='cat'></CategoryIcon>Category
//         </li>
       
//         <li className='hProduct'>
//             <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
//         </li>
        
//         <li className='hCart'>
//             <ShoppingCartIcon></ShoppingCartIcon>Cart
//         </li>
//         <li>
//           <a href='/' className='hFeedback'>
//             <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
//           </a>
//         </li>

//         <button className='hhbtn'>SignUp</button>
//       </ul>
//     </nav>
//     </div>

//     <br></br><br></br>

//     <div className="slide-container">
//           <Slide>
//            {slideImages.map((slideImage, index)=> (
//               <div key={index}>
//                 <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,'height':500 }}>
                 
//                 </div>
//               </div>
//             ))} 
//           </Slide>
//         </div>

//         <br></br>
//        <div className='otot'>
//           <div className='fruof'>
//             <img src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg" className='fruoffimg'></img>
//             <p><b>Fruits</b></p>
//             <p>Upto 10% offer</p>
//           </div>

//           <div className='vegof'>
//             <img src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg" className='vegoffimg'></img>
//             <p><b>Vegetables</b></p>
//             <p>Upto 5% offer</p>
//           </div>

          
//           <div className='bevof'>
//             <img src="https://www.tutorialspoint.com/food_and_beverage_services/images/non_alcoholic_beverages.jpg" className='bevoffimg'></img>
//             <p><b>Beverages</b></p>
//             <p>Upto 7% offer</p>
//           </div>


//           <div className='hdof'>
//             <img src="https://myfaayda.com/wp-content/uploads/2021/09/Top-10-Best-Healthy-Drinks-In-India-For-Men-Women-Kids.jpg" className='hdimg'></img>
//             <p><b>Health Drinks</b></p>
//             <p>Upto 15% offer</p>
//           </div>


          
//           <div className='meatof'>
//             <img src="https://livekarts.in/wp-content/uploads/2021/04/Mutton-Curry-Cut-With-Bone.jpg" className='meatimg'></img>
//             <p><b>Meats</b></p>
//             <p>Upto 25% offer</p>
//           </div>

//           <div className='daiof'>
//             <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" className='daiimg'></img>
//             <p><b>Dairy</b></p>
//             <p>Upto 20% offer</p>
//           </div>
      
//        </div>

//           <div className='foo'>
//             <div className='sr'>
//               <h3 id="lin">Support and Resources</h3>
//             <a href='#' id="lin">Support</a><br></br>
//             <a href='#' id="lin">FAQ</a><br></br>
//             <a href='#' id="lin">Privacy Policy</a><br></br>
//             <a href='#' id="lin">Terms and Conditions</a><br></br>
//             <a href='#' id="lin">Help and Support</a><br></br></div>
//           </div>

//            <div className='about'>
//             <h3 id="lin">About</h3>
//             <a href="#" id='lin'>About Us</a><br></br>
//             <a href="#" id='lin'>Terms and Policy</a><br></br>
//             <a href="#" id='lin'>Community</a>
//            </div>

//            <div className='cont'>
//             <h3 id="lin">Contact</h3>
//             <a href="#" id='lin'>Call Canter</a><br></br>
//             <a href="#" id='lin'>Email Us</a><br></br>
//             <a href="#" id='lin'>Help Center</a><br></br>

//             <div className='ins'>
//               <a href='#'><img src="https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fv1675319063%2Finstasize-website%2Flearn%2Finstagram-paint-logo.webp&w=3840&q=75" className='insimg'></img></a>
//             </div>


//             <div className='fac'>
//             <a href='#'id='lin'> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" className='facimg'></img></a>
//             </div>

//             <div className='twi'>
//             <a href='#' id='lin'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" className='twiimg'></img></a>
//             </div>
//             <div className='copy'>
//               <p  id='lin' className='link'>@Copyrights 2023 all rights reserved</p>
//             </div>

//            </div>
// </div>
//   );
// };

// export default Homepage;
