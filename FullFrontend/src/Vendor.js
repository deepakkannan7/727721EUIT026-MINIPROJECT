import React, {useState } from 'react';
import './Vendor.css'
import {Link} from "react-router-dom"
// import { FaHeart } from 'react-icons/fa';

// import React from 'react'
const Vendor=()=>
{
    const[name,setName]=useState('');
    const[shopName,setShopName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[number,setNumber]=useState('');
    const[address,setAddress]=useState('');


    const handleNameChange=(event) =>
    {
        setName(event.target.value);
    };

    const handleShopNameChange=(event)=>
    {
        setShopName(event.target.value);
    };


const handleEmailChange=(event)=>
{
    setEmail(event.target.value);
};

const handlePasswordChange=(event)=>
{
   setPassword(event.target.value);
};

const handleNumberChange=(event)=>
{
   setNumber(event.target.value);
};

const handleAddressChange=(event)=>
{
    setAddress(event.target.value);
};


// const handleupSubmit=(event)=>
// {
//     event.preventDefault();
//     alert.window("Successfully LoggedIn");
//     console.log('Name:',name);
//     console.log('ShopName:',shopName);
//     console.log('Email:',email);
//     console.log('Password:',password);
//     console.log('Number:',number);
//     console.log('Address:',address);
// };

  return (
      <>
    <div className='bdy'>
    <h1 className='venhead'>Vendor Registration</h1>
    <div className="tot">
        <div className="side">
            <div className="img">
            </div>
        </div>
        <form className='form'>
            <center>
            <div className="afterimg">
            <div className="name">
                <label className='name1'>Name</label><br></br>
                <input type="text" className='namebox'
                 placeholder="Enter your name" 
                 value={name} 
                 onChange={handleNameChange} 
                 required></input>
            </div>
            <div className="spname">
                <label className='spname1'>ShopName</label><br></br>
                <input type="text" className='spnamebox'
                placeholder="Enter your ShopName"
                value={shopName}
                onChange={handleShopNameChange}
                 required></input>
            </div>
            <div className="email">
                <label className='email1'>Email</label><br></br>
                <input type="email" className='emailbox'
                 placeholder="Enter your email"
                 value={email}
                 onChange={handleEmailChange} 
                 required></input>
            </div>
            <div className="password">
                <label className='password1'>Password</label><br></br>
                <input type="password" className='passbox'
                 placeholder="Enter your password"
                 value={password}
                 onChange={handlePasswordChange}
                  required></input>
            </div>
            <div className="contact">
                <label className='contact1'>ContactNumber</label><br></br>
                <input type="text"  className='contbox'
                placeholder="Enter your Phone Number" 
                value={number}
                onChange={handleNumberChange}
                required></input>
            </div>
            <div className="Address">
                <label className='Address1'>Address</label><br></br>
                <textarea rows="3" cols="20" className='addbox'
                 placeholder="Enter your Address" 
                 value={address}
                 onChange={handleAddressChange}
                 required></textarea>
            </div>
            <div className="submit">
            <button type="submit" className='submitbut'>Submit</button>  
            </div>
            </div>
            </center>
        </form>
    </div>
    </div>
    </> 
  );
};
export default Vendor;
