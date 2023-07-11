import React, {useState } from 'react';
import './UserLogin.css'
import {Link} from "react-router-dom"
// import { FaHeart } from 'react-icons/fa';

// import React from 'react'
const Vendor=()=>
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
    <div className='ULbdy'>
    <h1 className='ULvenhead'> User Login</h1>
    <div className="ULtot">
        <div className="ULside">
            <div className="ULimg">
            </div>
        </div>
        <form className='ULform'>
            <center>
                <div className='ULogimg'>
                </div>
            <div className="ULafterimg">

            <div className="ULemail">
                <label className='ULemail1'>Email</label><br></br>
                {/* <div className='Lemail2'> */}
                {/* <div className='emailimg'> 
                </div> */}
                <input  type="email" className='ULemailbox'
                 placeholder="Enter your email"
                 value={Lemail}
                 onChange={handleLemailChange} 
                 required></input>
            </div>
            <div className="Lpassword">
                <label className='ULpassword1'>Password</label><br></br>
                <input type="password" id='ULpassbox'
                 placeholder="Enter your password"
                 value={Lpassword}
                 onChange={handleLpasswordChange}
                  required></input>
            </div>
            <div className='Ufp'>
            <a href=''>Forgot Password?</a></div>
            <div className="ULsubmit">
            <button type="submit" className='ULsubmitbut'>Login</button>  
            </div>
            <p className='Uor'>or</p>
            <div className='Usgoo'>
            <button className='Uimage-button'><img src="https://cdn.freebiesupply.com/logos/large/2x/google-g-2015-logo-png-transparent.png">
                </img><span>Sign in with google</span></button>
            </div><br></br>
            <div className='ULsignup'>
            <p>Don't have an account yet?<a href=''><Link to="/User">signup</Link></a></p>
            
            </div></div>
            </center>
        </form>
    </div>
    </div>
    </> 
  );
};
export default Vendor;
