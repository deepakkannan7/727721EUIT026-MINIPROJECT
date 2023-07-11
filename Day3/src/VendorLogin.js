import React, {useState } from 'react';
import './VendorLogin.css'
import {Link} from "react-router-dom"
// import { FaHeart } from 'react-icons/fa';

// import React from 'react'
const VendorLogin=()=>
{
    const[Lemail,setLemail]=useState('');
    const[Lpassword,setLpassword]=useState('');


const handleLemailChange=(event)=>
{
    setLemail(event.target.value);
};

const handleLpasswordChange=(event)=>
{
   setLpassword(event.target.value);
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
    <div className='Lbdy'>
    <h1 className='Lvenhead'> Vendor Login</h1>
    <div className="Ltot">
        <div className="Lside">
            <div className="Limg">
            </div>
        </div>
        <form className='Lform'>
            <center>
                <div className='Logimg'>
                </div>
            <div className="Lafterimg">

            <div className="Lemail">
                <label className='Lemail1'>Email</label><br></br>
                {/* <div className='Lemail2'> */}
                {/* <div className='emailimg'> 
                </div> */}
                <input  type="email" className='Lemailbox'
                 placeholder="Enter your email"
                 value={Lemail}
                 onChange={handleLemailChange} 
                 required></input>
            </div>
            <div className="Lpassword">
                <label className='Lpassword1'>Password</label><br></br>
                <input type="password" id='Lpassbox'
                 placeholder="Enter your password"
                 value={Lpassword}
                 onChange={handleLpasswordChange}
                  required></input>
            </div>
            <div className='fp'>
            <a href=''>Forgot Password?</a></div>
            <div className="Lsubmit">
            <button type="submit" className='Lsubmitbut'>Login</button>  
            </div>
            <p className='or'>or</p>
            <div className='sgoo'>
            <button className='image-button'><img src="https://cdn.freebiesupply.com/logos/large/2x/google-g-2015-logo-png-transparent.png">
                </img><span>Sign in with google</span></button>
            </div><br></br>
            <div className='Lsignup'>
            <p>Don't have an account yet?<a href=''><Link to="/Vendor">signup</Link></a></p>
            
            </div></div>
            </center>
        </form>
    </div>
    </div>
    </> 
  );
};
export default VendorLogin;
