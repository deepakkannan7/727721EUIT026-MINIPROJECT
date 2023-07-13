import React, {useState } from 'react';
import './User.css'
// import {Link} from "react-router-dom"
// import { FaHeart } from 'react-icons/fa';

// import React from 'react'
const User=()=>
{
    const[fname,setfName]=useState('');
    const[lname,setlName]=useState('');
    
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[number,setNumber]=useState('');
   


    const handlefNameChange=(event) =>
    {
        setfName(event.target.value);
    };
    
    const handlelNameChange=(event) =>
    {
        setlName(event.target.value);
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
    
    <div class="ubg">
      <br></br>
    <h1 class="uh">User Registration</h1>
    <div className="utot">
        <div className="uside">
            <div className="uimg">
            </div>
        </div>
        <form className='uform'>
            <center>
            <div className="afterimg">
            <div className="uname">
                <label class="ufn">First Name</label><br></br>
                <input class="uin" type="text"
                 placeholder="Enter your name" 
                 value={fname} 
                 onChange={handlefNameChange} 
                 required></input>
            </div>
            <div className="uname">
                <label class="uln">Last Name</label><br></br>
                <input class="uin" type="text"
                 placeholder="Enter your name" 
                 value={lname} 
                 onChange={handlelNameChange} 
                 required></input>
            </div>
           
            <div className="uemail">
                <label class="uemail">Email</label><br></br>
                <input class="uin" type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={handleEmailChange} 
                 required></input>
            </div>
            <div className="upassword">
                <label class="upswrd">Password</label><br></br>
                <input class="uin" type="password"
                 placeholder="Enter your password"
                 value={password}
                 onChange={handlePasswordChange}
                  required></input>
            </div>
            <div className="ucontact">
                <label class="uph">Contact</label><br></br>
                <input class="uin" type="text" 
                placeholder="Enter your Phone Number" 
                value={number}
                onChange={handleNumberChange}
                required></input>
            </div>
           
            <div className="usubmit">
            <button type="submit" className='ubutton'>Submit</button>  
            </div>
            </div>
            </center>
        </form>
    </div>
    </div>
   
  );
};
export default User;