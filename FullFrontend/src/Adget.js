// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Adget = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     // Fetch product details from the API
// //     axios.get('http://localhost:8081/api/v1/user/showpro')
// //       .then(response => {
// //         setProducts(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching product details:', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Product Details</h1>
// //       {products.map(product => (
// //         <div key={product.pid}>
// //           <h2>{product.pname}</h2>
// //           {product.pimagesUrl && (
// //             <img
// //               src={product.pimagesUrl} // Use the imageUrl directly
// //               alt={product.pname}
// //               style={{ width: '200px', height: '200px' }}
// //             />
// //           )}
// //           <p>Price: {product.pprice}</p>
// //           <p>{product.pdescription}</p>
// //           <hr />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Adget;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Aget.css';
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

// const Adget = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch product details from the API
//     axios
//       .get('http://localhost:8081/api/v1/user/showpro')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product details:', error);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.pname.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  

//   return (
//     <div>

// <div className='adsearch-container'>
//           <input
//             type='text'
//             className='search-input'
//             placeholder='Search products...'
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//          <h1 className='pro'>Products</h1>
//      <Grid  container spacing={2} align="center" >
// {products.map((product) => (
//   <Grid item xs={12} sm={3} md={2} key={product.pid}>
//     <Card>
//       <CardMedia style={{border:"4px solid white",width:"185px"}}component="img" height="250" src={product.pimagesUrl} alt={product.name} />
//       <CardContent>
//         <Typography variant="h9" component="div" fontWeight="bold" color="red">
//           {product.pname}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//         ₹{product.pprice}{product.pdescription}
//         </Typography>
//         {/* <Typography variant="body2" color="text.secondary">              
//         </Typography> */}
//       </CardContent>

//     </Card>
//   </Grid>
// ))}
// </Grid>
//     </div>
//   );
// };

// export default Adget;


// ... other import statements

const Adget = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch product details from the API
    axios
      .get('http://localhost:8081/api/v1/user/showpro')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.pname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='adsearch-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search products...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <h1 className='pro'>Products</h1>
      {searchTerm && (
        <div className="search-term">
          <p>Showing results for: <strong>{searchTerm}</strong></p>
        </div>
      )}
      <Grid container spacing={2} align="center">
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={2} key={product.pid}>
            <Card>
              <CardMedia
                style={{ border: '4px solid white', width: '185px' }}
                component="img"
                height="250"
                src={product.pimagesUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h9" component="div" fontWeight="bold" color="red">
                  {product.pname}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  ₹{product.pprice} {product.pdescription}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">              
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Adget;
