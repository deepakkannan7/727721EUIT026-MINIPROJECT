import React, { useState } from 'react';
import './Navbar.css';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { Link } from 'react-router-dom';

// const Navbar = ({cartitems}) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <nav className='NavbarItems'>
//       <h1 className='navbar-logo'>Trippy</h1>

//       <div className='menu-icons' onClick={handleClick}>
//         <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//       </div>

//       <ul className='nav-menu'>
//         <li>
//           <a href='/' className='Home'>
//             <HomeIcon></HomeIcon>Home
//           </a>
//         </li>
//         <li>
//           <a href='/' className='Category'>
//             <CategoryIcon className='cat'></CategoryIcon>Category
//           </a>
//         </li>
//         <li>
//           <a href='/' className='Product'>
//             <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
//           </a>
//         </li >
//         <li className='Cart'>
//             <ShoppingCartIcon></ShoppingCartIcon>Cart
//         </li>
//         <li>
//           <a href='/' className='Feedback'>
//             <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
//           </a>
//         </li>

//         <button className='hbtn'>SignUp</button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ cartitems }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Trippy</h1>

      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`nav-menu ${clicked ? 'active' : ''}`}>
        <li className='Home'>
          <Link to='/' className='Home'>
            <HomeIcon></HomeIcon>Home
          </Link>
        </li>
        <li className='Category'>
          <Link to='/' className='Category'>
            <CategoryIcon className='cat'></CategoryIcon>Category
          </Link>
        </li>
        <li className='Product'>
          <Link to='/' className='Product'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
          </Link>
        </li >
        <li className='Cart'>
          <Link to='/CartPage'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
          </Link>
        </li>
        <li className='Feedback'>
          <Link to='/' className='Feedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
          </Link>
        </li>
      </ul>
  
    </nav>
  );
};

export default Navbar;
