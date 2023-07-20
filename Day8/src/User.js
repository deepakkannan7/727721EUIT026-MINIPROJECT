// import React, {useState } from 'react';
// import './User.css'
// // import {Link} from "react-router-dom"
// // import { FaHeart } from 'react-icons/fa';

// // import React from 'react'
// const User=()=>
// {
//     const[fname,setfName]=useState('');
//     const[lname,setlName]=useState('');
    
//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('');
//     const[number,setNumber]=useState('');
   


//     const handlefNameChange=(event) =>
//     {
//         setfName(event.target.value);
//     };
    
//     const handlelNameChange=(event) =>
//     {
//         setlName(event.target.value);
//     };

   

// const handleEmailChange=(event)=>
// {
//     setEmail(event.target.value);
// };

// const handlePasswordChange=(event)=>
// {
//    setPassword(event.target.value);
// };

// const handleNumberChange=(event)=>
// {
//    setNumber(event.target.value);
// };

//   return (
    
//     <div class="ubg">
//       <br></br>
//     <h1 class="uh">User Registration</h1>
//     <div className="utot">
//         <div className="uside">
//             <div className="uimg">
//             </div>
//         </div>
//         <form className='uform'>
//             <center>
//             <div className="afterimg">
//             <div className="uname">
//                 <label class="ufn">First Name</label><br></br>
//                 <input class="uin" type="text"
//                  placeholder="Enter your name" 
//                  value={fname} 
//                  onChange={handlefNameChange} 
//                  required></input>
//             </div>
//             <div className="uname">
//                 <label class="uln">Last Name</label><br></br>
//                 <input class="uin" type="text"
//                  placeholder="Enter your name" 
//                  value={lname} 
//                  onChange={handlelNameChange} 
//                  required></input>
//             </div>
           
//             <div className="uemail">
//                 <label class="uemail">Email</label><br></br>
//                 <input class="uin" type="email"
//                  placeholder="Enter your email"
//                  value={email}
//                  onChange={handleEmailChange} 
//                  required></input>
//             </div>
//             <div className="upassword">
//                 <label class="upswrd">Password</label><br></br>
//                 <input class="uin" type="password"
//                  placeholder="Enter your password"
//                  value={password}
//                  onChange={handlePasswordChange}
//                   required></input>
//             </div>
//             <div className="ucontact">
//                 <label class="uph">Contact</label><br></br>
//                 <input class="uin" type="text" 
//                 placeholder="Enter your Phone Number" 
//                 value={number}
//                 onChange={handleNumberChange}
//                 required></input>
//             </div>


           
//             <div className="usubmit">
//             <button type="submit" className='ubutton'>Submit</button>  
//             </div>
//             </div>
//             </center>
//         </form>
//     </div>
//     </div>
//   );
// };
// export default User;




import React, { useState } from 'react';
import './User.css';
import { useHistory, Link} from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [isFormValid, setFormValid] = useState(false); // Form validation state

  const history = useHistory();

  const handlefNameChange = (event) => {
    setfName(event.target.value);
  };

  const handlelNameChange = (event) => {
    setlName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page


    const data={
        firstName:fname,
        lastName:lname,
        email:email,
        password:password,
        contactNumber:number
    }

    axios.post('http://127.0.0.1:8080/Signadd', data);
    // Perform form validation here
    const isFirstNameValid = fname.trim() !== '';
    const isLastNameValid = lname.trim() !== '';
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 6;
    const isNumberValid = /^\d{10}$/.test(number);

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isNumberValid) {
      // All fields are valid, you can proceed with form submission or further processing
      setFormValid(true);
    
      history.push('/Homepage1');
      // Additional actions can be performed here, e.g., sending data to a server
    } else {
      // Display an error message or perform any other necessary action
      alert('Please fill in all the fields correctly.');
      setFormValid(false);
    }

    
  };

  return (
    <div class="ubg">
      <br />
      <h1 class="uh">User Registration</h1>
      <div className="utot">
        <div className="uside">
          <div className="uimg"></div>
        </div>
        <form className="uform" onSubmit={handleSubmit}>
          <center>
            <div className="afterimg">
              <div className="uname">
                <label class="ufn">First Name</label>
                <br />
                <input
                  class="uin"
                  type="text"
                  placeholder="Enter your name"
                  value={fname}
                  onChange={handlefNameChange}
                  required
                ></input>
              </div>
              <div className="uname">
                <label class="uln">Last Name</label>
                <br />
                <input
                  class="uin"
                  type="text"
                  placeholder="Enter your name"
                  value={lname}
                  onChange={handlelNameChange}
                  required
                ></input>
              </div>

              <div className="uemail">
                <label class="uemail">Email</label>
                <br />
                <input
                  class="uin"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                ></input>
              </div>
              <div className="upassword">
                <label class="upswrd">Password</label>
                <br />
                <input
                  class="uin"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                ></input>
              </div>
              <div className="ucontact">
                <label class="uph">Contact</label>
                <br />
                <input
                  class="uin"
                  type="text"
                  placeholder="Enter your Phone Number"
                  value={number}
                  onChange={handleNumberChange}
                  required
                ></input>
              </div>

              <div className="usubmit">
                <button type="submit" className="ubutton">
                  Submit
                </button>
              </div>
            </div>
          </center>
        </form>
      </div>
      {isFormValid && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default User;
