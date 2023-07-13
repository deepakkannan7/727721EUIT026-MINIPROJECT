// import React, {useState } from 'react';
// import './UserLogin.css'
// import {Link} from "react-router-dom"
// // import { FaHeart } from 'react-icons/fa';

// // import React from 'react'
// const Vendor=()=>
// {
//     const[Lemail,setLemail]=useState('');
//     const[Lpassword,setLpassword]=useState('');


// const handleLemailChange=(event)=>
// {
//     setLemail(event.target.value);
// };

// const handleLpasswordChange=(event)=>
// {
//    setLpassword(event.target.value);
// };


// // const handleupSubmit=(event)=>
// // {
// //     event.preventDefault();
// //     alert.window("Successfully LoggedIn");
// //     console.log('Name:',name);
// //     console.log('ShopName:',shopName);
// //     console.log('Email:',email);
// //     console.log('Password:',password);
// //     console.log('Number:',number);
// //     console.log('Address:',address);
// // };

//   return (
//       <>
//     <div className='ULbdy'>
//     <h1 className='ULvenhead'> User Login</h1>
//     <div className="ULtot">
//         <div className="ULside">
//             <div className="ULimg">
//             </div>
//         </div>
//         <form className='ULform'>
//             <center>
//                 <div className='ULogimg'>
//                 </div>
//             <div className="ULafterimg">

//             <div className="ULemail">
//                 <label className='ULemail1'>Email</label><br></br>
//                 {/* <div className='Lemail2'> */}
//                 {/* <div className='emailimg'> 
//                 </div> */}
//                 <input  type="email" className='ULemailbox'
//                  placeholder="Enter your email"
//                  value={Lemail}
//                  onChange={handleLemailChange} 
//                  required></input>
//             </div>
//             <div className="Lpassword">
//                 <label className='ULpassword1'>Password</label><br></br>
//                 <input type="password" id='ULpassbox'
//                  placeholder="Enter your password"
//                  value={Lpassword}
//                  onChange={handleLpasswordChange}
//                   required></input>
//             </div>
//             <div className='Ufp'>
//             <a href=''>Forgot Password?</a></div>
//             <Link to='/Homepage'><div className="ULsubmit">
//             <button type="submit" className='ULsubmitbut'>Login</button>  
//             </div></Link>
//             <p className='Uor'>or</p>
//             <div className='Usgoo'>
//             <button className='Uimage-button'><img src="https://cdn.freebiesupply.com/logos/large/2x/google-g-2015-logo-png-transparent.png">
//                 </img><span>Sign in with google</span></button>
//             </div><br></br>
//             <hr
//         style={{
//           background: 'lime',
//           color: 'lime',
//           width:'300px',
//           margin:'0px 40px',
//           borderColor: 'lime',
//           height: '1px',
//         }}
//       />
//             <div className='ULsignup'>
//             <p className='Uacc'>Don't have an account yet?</p>
//             <Link to="/User">
//             <div className='Usub'>
//            <button type='submit' className='Ubutt'>Signup</button></div></Link></div>
//             </div>
//             </center>
//         </form>
//     </div>
//     </div>
//     </> 
//   );
// };
// export default Vendor;


import React, { useState } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';

const Vendor = () => {
  const [Lemail, setLemail] = useState('');
  const [Lpassword, setLpassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLemailChange = (event) => {
    setLemail(event.target.value);
    setEmailError('');
  };

  const handleLpasswordChange = (event) => {
    setLpassword(event.target.value);
    setPasswordError('');
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (Lemail.trim() === '') {
      setEmailError('Please enter your email.');
      return;
    }

    if (!isValidEmail(Lemail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (Lpassword.trim() === '') {
      setPasswordError('Please enter your password.');
      return;
    }

    // Perform login action here since input fields are valid
    // ...
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <div className="ULbdy">
        <h1 className="ULvenhead">User Login</h1>
        <div className="ULtot">
          <div className="ULside">
            <div className="ULimg"></div>
          </div>
          <form className="ULform">
            <center>
              <div className="ULogimg"></div>
              <div className="ULafterimg">
                <div className="ULemail">
                  <label className="ULemail1">Email</label>
                  <br></br>
                  <input
                    type="email"
                    className={`ULemailbox ${emailError ? 'error' : ''}`}
                    placeholder="Enter your email"
                    value={Lemail}
                    onChange={handleLemailChange}
                    required
                  ></input>
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="Lpassword">
                  <label className="ULpassword1">Password</label>
                  <br></br>
                  <input
                    type="password"
                    id="ULpassbox"
                    className={`ULemailbox ${passwordError ? 'error' : ''}`}
                    placeholder="Enter your password"
                    value={Lpassword}
                    onChange={handleLpasswordChange}
                    required
                  ></input>
                  {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <div className="Ufp">
                  <a href="">Forgot Password?</a>
                </div>
                <Link to="/Homepage">
                  <div className="ULsubmit">
                    <button
                      type="submit"
                      className="ULsubmitbut"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </Link>
                <p className="Uor">or</p>
                <div className="Usgoo">
                  <button className="Uimage-button">
                    <img
                      src="https://cdn.freebiesupply.com/logos/large/2x/google-g-2015-logo-png-transparent.png"
                      alt="Google Logo"
                    ></img>
                    <span>Sign in with google</span>
                  </button>
                </div>
                <br></br>
                <hr
                  style={{
                    background: 'lime',
                    color: 'lime',
                    width: '300px',
                    margin: '0px 40px',
                    borderColor: 'lime',
                    height: '1px',
                  }}
                />
                <div className="ULsignup">
                  <p className="Uacc">Don't have an account yet?</p>
                  <Link to="/User">
                    <div className="Usub">
                      <button type="submit" className="Ubutt">
                        Signup
                      </button>
                    </div>
                  </Link>
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

