// import React, { useState, useEffect } from 'react';
// import './shopcart.css';

// const Shopcart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = localStorage.getItem('cartItems');
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (event) => {
//     const btn = event.target;
//     const btnGrandParent = btn.parentElement.parentElement;
//     const btnParent = btn.parentElement;
//     const itemImage = btnGrandParent.children[0].src;
//     const itemName = btnParent.children[0].innerText;
//     const itemPrice = btnParent.children[1].innerText;

//     const newItem = {
//       id: Date.now(),
//       image: itemImage,
//       name: itemName,
//       price: itemPrice,
//       quantity: 1,
//     };

//     setCartItems([...cartItems, newItem]);
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//   };

//   const updateQuantity = (itemId, quantity) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.id === itemId ? { ...item, quantity } : item
//     );
//     setCartItems(updatedCartItems);
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     return total.toFixed(2);
//   };

//   return (
//     <div className='shop'>
//       <nav className="navbar navbar-dark bg-dark" style={{ height: '100px' }}>
//         <div className="container-fluid">
//           <h2 style={{ color: 'white' }}>Shoprite Store</h2>
//           <i className="fas fa-cart-arrow-down"></i>
//         </div>
//       </nav>

//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 col-lg-4">
//             <div className="card" style={{ width: '18rem' }}>
//               <img
//                 src="img/choccolate_cake.jpg"
//                 className="card-img-top"
//                 alt="..."
//               />
//               <div className="card-body">
//                 <h3 className="card-title">Choccolate Cake</h3>
//                 <h4 className="card-text">$100</h4>
//                 <button className="btn btn-primary" onClick={addToCart}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Add more product cards here */}
//         </div>
//       </div>

//       <div className="uk-overflow-auto container" style={{ width: '70%' }}>
//         <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
//           <thead>
//             <tr>
//               <th className="uk-table-shrink"></th>
//               <th className="uk-table-small sty">
//                 <h3>ITEM</h3>
//               </th>
//               <th className="uk-table-small"></th>
//               <th className="uk-width-small sty">
//                 <h3>PRICE</h3>
//               </th>
//               <th className="uk-table-shrink uk-text-small sty">
//                 <h3>QUANTITY</h3>
//               </th>
//               <th className="uk-table-shrink uk-text-small sty">
//                 <h3>TOTAL</h3>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   <input className="uk-checkbox" type="checkbox" />
//                 </td>
//                 <td>
//                   <img
//                     className="uk-preserve-width uk-border-circle"
//                     src={item.image}
//                     width="40"
//                     alt=""
//                   />
//                 </td>
//                 <td className="uk-table-link">
//                   <h3 className="item-name">{item.name}</h3>
//                 </td>
//                 <td className="uk-text-truncate item-price">
//                   <h3>{item.price}</h3>
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     className="num"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       updateQuantity(item.id, parseInt(e.target.value))
//                     }
//                   />
//                 </td>
//                 <td className="uk-text-truncate total-price">
//                   <h3>${(item.price * item.quantity).toFixed(2)}</h3>
//                 </td>
//                 <td>
//                   <button
//                     className="uk-button uk-button-danger"
//                     type="button"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td>
//                 <input className="uk-checkbox" type="checkbox" />
//               </td>
//               <td>
//                 <img
//                   className="uk-preserve-width uk-border-circle"
//                   width="40"
//                   alt=""
//                 />
//               </td>
//               <td className="uk-table-link">
//                 <h3 className="item-name">
//                   <strong>Grand Total</strong>
//                 </h3>
//               </td>
//               <td className="uk-text-truncate"></td>
//               <td className="uk-text-truncate"></td>
//               <td className="uk-text-truncate grand-total" colSpan="2">
//                 <h3>
//                   <strong>${calculateTotal()}</strong>
//                 </h3>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Shopcart;
