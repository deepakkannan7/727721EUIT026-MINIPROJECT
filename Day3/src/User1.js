import React, {useState } from 'react';
import './User1.css'
const User1=()=>
    {
        const[UfirstName,setUfirstame]=useState('');
        const[UlastName,setUlastName]=useState('');
        const[Uemail,setUemail]=useState('');
        const[Upassword,setUpassword]=useState('');
        const[Unumber,setUnumber]=useState('');
        // const[address,setAddress]=useState('');
    
    
        const handleUfirstnameChange=(event) =>
        {
            setUfirstame(event.target.value);
        };
    
        const handleUlastNameChange=(event)=>
        {
            setUlastName(event.target.value);
        };
    
    
    const handleUemailChange=(event)=>
    {
        setUemail(event.target.value);
    };
    
    const handleUpasswordChange=(event)=>
    {
       setUpassword(event.target.value);
    };
    
    const handleUnumberChange=(event)=>
    {
      setUnumber(event.target.value);
    };
    
  return (
    <div className='UContainer'>
    <div className="Umain">
        <input type="checkbox" id="Uchk" aria-hidden="true">
        </input>

        <div className='Usignup'>
            <form>
                <label className="UIII"
                 for="chk" 
                 aria-hidden="true">Sign up</label>
                <input type="text" 
                className='Uusrfn' 
                name="txt" 
                placeholder='FirstName' 
                value={UfirstName}
                onChange={handleUfirstnameChange} 
                required></input>
                <input type="text" 
                name="txt" 
                placeholder='LastName'
                value={UlastName}
                onChange={handleUlastNameChange} 
                 required></input>
                <input type="email" 
                 name="email" 
                 placeholder='Email'
                 value={Uemail}
                 onChange={handleUemailChange} 
                  required></input>
                <input type="Password"  
                name="pwd" 
                placeholder='Password' 
                value={Upassword}
                onChange={handleUpasswordChange} 
                required></input>
                <input type="number" 
                name="num" 
                placeholder='ContactNumber' 
                value={Unumber}
                onChange={handleUnumberChange} 
                required></input>
                <button className='Ubt'>Sign Up</button>
            </form>

        </div>
          
          <div className="ULogin">
            <form>
                <label className="UII"
                 for="chk" 
                 arial-hidden="true">Log in</label>
                <input className="email" 
                type="email" 
                name="email" 
                placeholder='Email' 
                value={Uemail}
                onChange={Uemail} 
                required></input>
                <input type="Password"
                 name="pwd" 
                 placeholder='Password' 
                 value={Upassword}
                 onChange={handleUpasswordChange} 
                 required></input>
                <button className='bt'>Login</button>
            </form>
            <p className='Uor'>or</p>
            <div className='Usgoo'>
            <button className='Uimage-button'><img src="https://static.vecteezy.com/system/resources/previews/022/484/503/original/google-lens-icon-logo-symbol-free-png.png">
                </img><span>Sign in with google</span></button>
            </div>

          </div>
    </div>
    </div>
  )
}

export default User1;
