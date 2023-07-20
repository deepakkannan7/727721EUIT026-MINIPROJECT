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
           <Route exact path="/" component ={User}></Route>
           <Route exact path="/Homepage1" component ={Homepage1}></Route>
           <Route exact path="/Category" component ={Category}></Route>
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
// import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// const App = () => {
//   return (
//       // <Router>
//     <div>

//       <Cleaning/>
//       {/* <Switch> 
//       <Route exact path="/" component ={User}></Route>
//       <Route exact path="/Homepage1" component ={Homepage1}></Route>
//     <User/>
//     </Switch>  */}
//       </div>
//     // </Router>
//   )
// }

// export default App


