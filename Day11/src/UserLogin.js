// import React, { useState } from 'react';
// import './UserLogin.css';
// import { Link } from 'react-router-dom';

// const UserLogin = () => {
//   const [Lemail, setLemail] = useState('');
//   const [Lpassword, setLpassword] = useState('');
//   const [LemailError, setLemailError] = useState('');
//   const [LpasswordError, setLpasswordError] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLemailChange = (event) => {
//     setLemail(event.target.value);
//   };

//   const handleLpasswordChange = (event) => {
//     setLpassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setLemailError('');
//     setLpasswordError('');

//     let isValid = true;

//     // Email validation
//     if (!Lemail) {
//       setLemailError('Please enter your email');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(Lemail)) {
//       setLemailError('Please enter a valid email');
//       isValid = false;
//     }

//     // Password validation
//     if (!Lpassword) {
//       setLpasswordError('Please enter your password');
//       isValid = false;
//     } else if (Lpassword.length < 5) {
//       setLpasswordError('Password should be at least 5 characters long');
//       isValid = false;
//     } else if (!/[A-Z]/.test(Lpassword) || !/[a-z]/.test(Lpassword)) {
//       setLpasswordError('Password should contain both uppercase and lowercase characters');
//       isValid = false;
//     }

//     if (isValid) {
//       alert('Successfully LoggedIn');
//       console.log('Email:', Lemail);
//       console.log('Password:', Lpassword);
//     } else {
//       setErrorMessage(`${LemailError}\n${LpasswordError}`);
//     }
//   };

//   const isFormValid = Lemail && Lpassword;

//   return (
//     <>
//       <div className="ULbdy">
//         <h1 className="ULvenhead"> User Login</h1>
//         <div className="ULtot">
//           <div className="ULside">
//             <div className="ULimg"></div>
//           </div>
//           <form className="ULform" onSubmit={handleSubmit}>
//             <center>
//               <div className="ULogimg"></div>
//               <div className="ULafterimg">
//                 <div className="ULemail">
//                   <label className="ULemail1">Email</label>
//                   <br />
//                   <input
//                     type="email"
//                     className="ULemailbox"
//                     placeholder="Enter your email"
//                     value={Lemail}
//                     onChange={handleLemailChange}
//                     required
//                   ></input>
//                   <span className="ULerror">{LemailError}</span>
//                 </div>
//                 <div className="Lpassword">
//                   <label className="ULpassword1">Password</label>
//                   <br />
//                   <input
//                     type="password"
//                     id="ULpassbox"
//                     placeholder="Enter your password"
//                     value={Lpassword}
//                     onChange={handleLpasswordChange}
//                     required
//                   ></input>
//                   <span className="ULerror">{LpasswordError}</span>
//                 </div>
//                 <div className="Ufp">
//                   <a href="#">Forgot Password?</a>
//                 </div>
//                 <Link to="./Homepage1">
//                   <div className="ULsubmit">
//                     <button
//                       type="submit"
//                       className="ULsubmitbut"
//                       disabled={!isFormValid}
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </Link>
//                 <p className="Uor">or</p>
//                 <div className="Usgoo">
//                   <button className="Uimage-button">
//                     <img
//                       src="https://cdn.freebiesupply.com/logos/large/2x/google-g-2015-logo-png-transparent.png"
//                       alt="Google"
//                     ></img>
//                     <span>Sign in with Google</span>
//                   </button>
//                 </div>
//                 <br />
//                 <hr
//                   style={{
//                     background: 'lime',
//                     color: 'lime',
//                     width: '300px',
//                     margin: '0px 40px',
//                     borderColor: 'lime',
//                     height: '1px',
//                   }}
//                 />
//                 <div className="ULsignup">
//                   <p className="Uacc">Don't have an account yet?</p>
//                   <Link to="/User">
//                     <div className="Usub">
//                       <button type="submit" className="Ubutt">
//                         Signup
//                       </button>
//                     </div>
//                   </Link>
//                 </div>
//                 {errorMessage && <div className="ULerror-message">{errorMessage}</div>}
//               </div>
//             </center>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserLogin;

// import React, { useState,useEffect } from 'react';
// import './UserLogin.css';
// import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode'
// import { Typography } from '@mui/material';

// const UserLogin = () => {
//   const [Lemail, setLemail] = useState('');
//   const [Lpassword, setLpassword] = useState('');
//   const [LemailError, setLemailError] = useState('');
//   const [LpasswordError, setLpasswordError] = useState('');
//   const[apiError,setApiError]=useState('');
//   const[user,setUser]=useState({});
//   const history = useHistory(); 
//   function handleCallbackResponse(response){
//     console.log("JWT ID token: "+response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     document.getElementById('signInDiv').hidden = true;
//     history.push('./Homepage1')
//   }

// useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id:"641221569189-jje3suv3eeloi0mgtjir85e64276cs2r.apps.googleusercontent.com",
//       callback:handleCallbackResponse

//     });
//     google.accounts.id.renderButton(
//       document.getElementById("signInDiv"),
//       {theme:"outline",size:"large"}
//     );
   
//   });

//   const handleLemailChange = (event) => {
//     setLemail(event.target.value);
//     setLemailError('');
//   };

//   const handleLpasswordChange = (event) => {
//     setLpassword(event.target.value);
//     setLpasswordError('');
//   };
//  // Create a history object

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     let isValid = true;

//     // Email validation
//     if (!Lemail.trim()) {
//       setLemailError('Please enter your email');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(Lemail)) {
//       setLemailError('Please enter a valid email');
//       isValid = false;
//     }

//     // Password validation
//     if (!Lpassword.trim()) {
//       setLpasswordError('Please enter your password');
//       isValid = false;
//     } else if (Lpassword.length < 8) {
//       setLpasswordError('Password should be at least 8 characters long');
//       isValid = false;
//     }

//     if (isValid) {
//       // alert('Successfully LoggedIn');
//       console.log('Email:', Lemail);
//       console.log('Password:', Lpassword);


//       axios.post('http://127.0.0.1:8080/login',{
//         email:Lemail,
//         password:Lpassword
//       })

//       .then((response)=>{
//         console.log('Response from backend:',response.data)
//         // Navigate to Homepage1 only when the form is valid and input fields are not empty
//         if (Lemail.trim() && Lpassword.trim()) {
//           history.push('./Homepage1');
//         }
//       })

//       .catch((error)=>
//       {
//         console.error('Error:',error);
//         setApiError('*Invalid email or password');
//       })


//     }
//   };

//   return (
//     <>
//       <div className='Lbdy'>
//         <h1 className='Lvenhead'>Login</h1>
//         <div className="Ltot">
//           <div className="Lside">
//             <div className="Limg"></div>
//           </div>
//           <form className='Lform' onSubmit={handleSubmit}>
//             <center>
//               <div className='Logimg'></div>
//               <div className="Lafterimg">
//                 <div className="Lemail">
//                   <label className='Lemail1'>Email</label><br />
//                   <input
//                     type="email"
//                     className='Lemailbox'
//                     placeholder="Enter your email"
//                     value={Lemail}
//                     onChange={handleLemailChange}
//                     required
//                   />
//                   <span className='Lerror'>{LemailError}</span>
//                 </div>
//                 <div className="Lpassword">
//                   <label className='Lpassword1'>Password</label><br />
//                   <input
//                     type="password"
//                     id='Lpassbox'
//                     placeholder="Enter your password"
//                     value={Lpassword}
//                     onChange={handleLpasswordChange}
//                     required
//                   />
//                   <span className='Lerror'>{LpasswordError}</span>
//                 </div>

//                 <div className='error'>
//                 {apiError&&(
//                   <Typography variant="body2" color="error" align='center'>
//                     {apiError}
//                   </Typography>
//                 )}</div>
//                 <div className='fp'>
//                   <a href=''>Forgot Password?</a>
//                 </div>

         
//                 <div className="Lsubmit">
//                   <button type="submit" className='Lsubmitbut'>Login</button>
//                 </div>
//                 <p className='or'>or</p>
//                 {/* <div className='sgoo'>
//                   <button className='image-button'>
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="Google" />
//                     <span>Sign in with Google</span>
//                   </button> */}
                  
//                 </div><br />

//                 <div id='signInDiv' ></div>

               
//                 <div className='Lsignup'>
//                   <p>Don't have an account yet? <Link to='./User'>signup</Link></p>
//                 </div>
//               {/* </div> */}
//             </center>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserLogin;



import React, { useState,useEffect } from 'react';
import './UserLogin.css';
import jwt_decode from 'jwt-decode'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [Lemail, setLemail] = useState('');
  const [Lpassword, setLpassword] = useState('');
  const [LemailError, setLemailError] = useState('');
  const [LpasswordError, setLpasswordError] = useState('');
  const [apiError, setApiError] = useState('');
  const[user,setUser]=useState({});
  const history = useHistory();


    function handleCallbackResponse(response){
    console.log("JWT ID token: "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    history.push('./Homepage1')
  }

  
useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"641221569189-jje3suv3eeloi0mgtjir85e64276cs2r.apps.googleusercontent.com",
      callback:handleCallbackResponse

    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
   
  });

  // Function to handle email change
  const handleLemailChange = (event) => {
    setLemail(event.target.value);
    setLemailError('');
  };

  // Function to handle password change
  const handleLpasswordChange = (event) => {
    setLpassword(event.target.value);
    setLpasswordError('');
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email and password
    let isValid = true;

    // Email validation
    if (!Lemail.trim()) {
      setLemailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(Lemail)) {
      setLemailError('Please enter a valid email');
      isValid = false;
    }

    // Password validation
    if (!Lpassword.trim()) {
      setLpasswordError('Please enter your password');
      isValid = false;
    } else if (Lpassword.length < 8) {
      setLpasswordError('Password should be at least 8 characters long');
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post('http://127.0.0.1:8082/api/v1/auth/authenticate', {
          email: Lemail,
          password: Lpassword
        });

        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));

        alert("Login Successful.");
        history.push("./Homepage1");
      } catch (error) {
        console.error('Error:', error);
        
        setApiError('*Invalid email or password');
      }
    }
  };

  const isButtonDisabled = !Lemail || !Lpassword; // Disable button if username or password is empty

  return (
    <>
      <div className='Lbdy'>
        <h1 className='Lvenhead'>Login</h1>
        <div className="Ltot">
          <div className="Lside">
            <div className="Limg"></div>
          </div>
          <form className='Lform' onSubmit={handleSubmit}>
            <center>
              <div className='Logimg'></div>
              <div className="Lafterimg">
                <div className="Lemail">
                  <label className='Lemail1'>Email</label><br />
                  <input
                    type="email"
                    className='Lemailbox'
                    placeholder="Enter your email"
                    value={Lemail}
                    onChange={handleLemailChange}
                    required
                  />
                  <span className='Lerror'>{LemailError}</span>
                </div>
                <div className="Lpassword">
                  <label className='Lpassword1'>Password</label><br />
                  <input
                    type="password"
                    id='Lpassbox'
                    placeholder="Enter your password"
                    value={Lpassword}
                    onChange={handleLpasswordChange}
                    required
                  />
                  <span className='Lerror'>{LpasswordError}</span>
                </div>

                {/* Display API error message */}
                {apiError && <div className='error'>{apiError}</div>}

                <div className='fp'>
                  <a href=''>Forgot Password?</a>
                </div>

                {/* <div className="Lsubmit"> */}
                  <button type="submit" className='Lsubmitbut'  >
                    Login
                  </button>
                {/* </div> */}
                <p className='or'>or</p>

  

                <br />
                <div id='signInDiv'></div>

                <div className='Lsignup'>
                  <p>
                    Don't have an account yet? <Link to='./User'>Signup</Link>
                  </p>
                </div>
              </div>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;







