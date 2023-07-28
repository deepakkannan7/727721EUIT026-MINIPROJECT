import React, { useState } from 'react';
import './Feedback.css';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import 'react-slideshow-image/dist/styles.css';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Feedback = () => {
  const initialFormData = {
    name: '',
    email: '',
    rating: null, // Set initial rating as null
    comments: '',
  };


  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const [clicked, setClicked] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [productQuantities, setProductQuantities] = useState({});

  const handleClick = () => {
    // setClicked(!clicked);
    setDropdownVisible(!dropdownVisible);
  };

  const handle1Click = () => {
    setClicked(!clicked);
  };
  const handleQuantityChange = (event, productId) => {
    const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
    setProductQuantities(newQuantities);
  };

  const products = [
    // Your product data here
  ];



  const handleRatingClick = (ratingValue) => {
    // If the rating is already selected, reset it to null
    const newRating = formData.rating === ratingValue ? null : ratingValue;
    setFormData({ ...formData, rating: newRating });
  };


 



  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulated API call using fetch (replace with your actual API endpoint).
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData(initialFormData);
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error('Error submitting feedback:', error);
        });
    }
  };

  return (
    <div>
      <div>
    <nav className='feeNavbarItems'>
      <h1 className='feenavbar-logo' onClick={handleClick}>KK
      {dropdownVisible && (
              <div className='feedropdown-menu'>
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
            )}</h1>


<div className='feemenu-icons' onClick={handle1Click}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`feenav-menu ${clicked ? 'active' : ''}`}>
        <li className='#'>
          <a href='/' className='feeHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li>
        
       <Link to='./Category'>
        <li className='feeCategory'>
            <CategoryIcon ></CategoryIcon>Category
        </li>
        </Link>
        
       <Link to='./Product'>
        <li className='feeProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        </Link>
        
        <Link to='./CartPage'>
        <li className='feeCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li>
        </Link>
         <Link to='./Feedback'>
        <li className='feeFeedback'>
          <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
        </li>
          </Link>
      </ul>
    </nav>
    </div>



    <div className="app">
        <h1 className="feedback">Feedback</h1>
        {!isSubmitted ? (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <div className="input-container">
                <TextField
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                />
              </div>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <div className="input-container">
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                />
              </div>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <div className="input-container">
          <TextField
  id="comments"
  name="comments"
  value={formData.comments}
  onChange={handleInputChange}
  required
  fullWidth
  multiline
  rows={4}
  variant="standard" // Use "standard" to remove the box around the comments field
/>
              </div>
            <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={formData.rating >= star ? 'selected' : ''}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>
        {errors.rating && <span className="error">{errors.rating}</span>}
      </div>
              {errors.comments && <span className="error">{errors.comments}</span>}
            </div>
            <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </Button>
          </form>
        ) : (
          <div className="success-message">
            <p>Thank you for your feedback!</p>
            <button className="feebut" onClick={() => setIsSubmitted(false)}>
              Submit Another Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
