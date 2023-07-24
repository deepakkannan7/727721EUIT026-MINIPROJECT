import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage1 from './Homepage1';
import User from './User';
import Product from './Product';
import Fruits from './Fruits';
import Food from './Food';
import Bakery from './Bakery';
import Cleaning from './Cleaning';
import CartPage from './CartPage';
import UserLogin from './UserLogin';
import VendorLogin from './VendorLogin';
import Choose from './Choose';
import Feedback from './Feedback'
import Adhomepage from './Adhomepage';
import Profile from './Profile';
import { useState,useEffect } from 'react';
import Category from './Category';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Retrieve cartItems from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cartItems to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  

  return (
    <div className="App">
      <Router>
      {/* <Bakery/> */}
           <Switch> 
           <Route exact path="/" component ={Choose}></Route>
           <Route exact path="/Homepage1" component ={Homepage1}></Route>
           <Route exact path="/Category" component ={Category}></Route>
           <Route exact path="/User" component ={User}></Route>
           <Route exact path="/UserLogin" component ={UserLogin}></Route>
           <Route exact path="/VendorLogin" component ={VendorLogin}></Route>
           <Route exact path="/User" component ={User}></Route>
           <Route exact path="/Feedback" component ={Feedback}></Route>
           <Route exact path="/Adhomepage" component ={Adhomepage}></Route>
           <Route exact path="/Profile" component ={Profile}></Route>
             

           <Route
            exact
            path="/CartPage"
            render={(props) => (
              <CartPage
                {...props}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            )}
          />
          <Route
            exact
            path="/Product"
            render={(props) => <Product {...props} addToCart={addToCart} />}
          />

          <Route
            exact
            path="/Fruits"
            render={(props) => <Fruits {...props} addToCart={addToCart} />}
          />


          
            <Route
            exact
            path="/Food"
            render={(props) => <Food {...props} addToCart={addToCart} />}
          />


            <Route
            exact
            path="/Cleaning"
            render={(props) => <Cleaning {...props} addToCart={addToCart} />}
          />

<Route
            exact
            path="/Bakery"
            render={(props) => <Bakery {...props} addToCart={addToCart} />}
          />



           </Switch>
     </Router>  
     </div>
  );
}
export default App;


// import React from 'react'
// import User from './User'
// import Homepage1 from './Homepage1';
// import Bakery from './Bakery'
// import Food from './Food';
// import Cleaning from './Cleaning';
// import UserLogin from './UserLogin';
// import User from './User';
// import Navbar from './Navbar';
// import Profile from './Profile'
// import Homepage1 from './Homepage1'
// import VendorLogin from './VendorLogin';
// import Feedback from './Feedback';
// import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// const App = () => {
//   return (
//       // <Router>
//     <div>

//       <Profile/>

//       {/* <Switch> 
//       <Route exact path="/" component ={UserLogin}></Route>
//       <Route exact path="/Homepage1" component ={Homepage1}></Route>
//       {/* <Route exact path="/VendorLogin" component ={VendorLogin}></Route> */}
//     {/* </Switch>  */}
//       </div>
// // </Router>
//   )
// }

// export default App



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CartPage from './CartPage';
// import CheckoutPage from './CheckoutPage';
// import Payment from './Payment';
// import { useState,useEffect } from 'react';
// import './App.css';

// const App = () => {


//     const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== productId);
//     setCartItems(updatedCartItems);
//   };

//   // Retrieve cartItems from local storage when the component mounts
//   useEffect(() => {
//     const storedCartItems = localStorage.getItem('cartItems');
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);

//   // Save cartItems to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);
//   // Your existing state and functions here

//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route exact path="/cart" render={(props) => <CartPage {...props} cartItems={cartItems} removeFromCart={removeFromCart} />} />
//           <Route exact path="/checkout" render={(props) => <CheckoutPage {...props} cartItems={cartItems} removeFromCart={removeFromCart} />} />
//           <Route exact path="/payment" render={(props) => <Payment {...props} cartItems={cartItems} />} />

//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default App;