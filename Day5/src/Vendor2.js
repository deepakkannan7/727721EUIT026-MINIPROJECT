import React, {useState } from 'react';
import './Vendor2.css'
const Vendor2=()=>
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
  return (
    <div className='Container'>
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true">
        </input>

        <div className='signup'>
            <form>
                <label className="III" for="chk" aria-hidden="true">Sign up</label>
                <input type="text" 
                className='usr'
                 name="txt" 
                 placeholder='UserName'
                 value={name}
                 onChange={handleNameChange} 
                  required></input>
                <input type="text" 
                name="txt" 
                placeholder='ShopName'
                value={shopName}
                onChange={handleShopNameChange} 
                 required></input>
                <input type="email"
                  name="email" 
                  placeholder='Email'
                  value={email}
                  onChange={handleEmailChange} 
                   required></input>
                <input type="Password" 
                 name="pwd" 
                 placeholder='Password' 
                 value={password}
                 onChange={handlePasswordChange} 
                 required></input>
                <input type="number"
                 name="num" 
                 placeholder='ContactNumber'
                 value={number}
                 onChange={handleNumberChange} 
                  required></input>
                <input type="text" 
                 name="add"
                  placeholder='Address'
                  value={address}
                  onChange={handleAddressChange} 
                   required></input>
                <button className='bt'>Sign Up</button>
            </form>

        </div>
          
          <div className="Login">
            <form>
                <label className="II" for="chk" arial-hidden="true">Log in</label>
                <input className="email" type="email" 
                name="email" placeholder='Email' 
                value={email}
                onChange={handleEmailChange} 
                required></input>
                <input type="Password" name="pwd" placeholder='Password' 
                 value={password}
                 onChange={handlePasswordChange} 
                required></input>
                <button className='bt'>Login</button>
            </form>
            <p className='or'>or</p>
            <div className='sgoo'>
            <button className='image-button'><img src="https://static.vecteezy.com/system/resources/previews/022/484/503/original/google-lens-icon-logo-symbol-free-png.png">
                </img><span>Sign in with google</span></button>
            </div>

          </div>
    </div>
    </div>
  )
}

export default Vendor2;