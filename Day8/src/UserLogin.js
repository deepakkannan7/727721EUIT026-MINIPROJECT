import React, { useState } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [Lemail, setLemail] = useState('');
  const [Lpassword, setLpassword] = useState('');
  const [LemailError, setLemailError] = useState('');
  const [LpasswordError, setLpasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLemailChange = (event) => {
    setLemail(event.target.value);
  };

  const handleLpasswordChange = (event) => {
    setLpassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLemailError('');
    setLpasswordError('');

    let isValid = true;

    // Email validation
    if (!Lemail) {
      setLemailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(Lemail)) {
      setLemailError('Please enter a valid email');
      isValid = false;
    }

    // Password validation
    if (!Lpassword) {
      setLpasswordError('Please enter your password');
      isValid = false;
    } else if (Lpassword.length < 5) {
      setLpasswordError('Password should be at least 5 characters long');
      isValid = false;
    } else if (!/[A-Z]/.test(Lpassword) || !/[a-z]/.test(Lpassword)) {
      setLpasswordError('Password should contain both uppercase and lowercase characters');
      isValid = false;
    }

    if (isValid) {
      alert('Successfully LoggedIn');
      console.log('Email:', Lemail);
      console.log('Password:', Lpassword);
    } else {
      setErrorMessage(`${LemailError}\n${LpasswordError}`);
    }
  };

  const isFormValid = Lemail && Lpassword;

  return (
    <>
      <div className="ULbdy">
        <h1 className="ULvenhead"> User Login</h1>
        <div className="ULtot">
          <div className="ULside">
            <div className="ULimg"></div>
          </div>
          <form className="ULform" onSubmit={handleSubmit}>
            <center>
              <div className="ULogimg"></div>
              <div className="ULafterimg">
                <div className="ULemail">
                  <label className="ULemail1">Email</label>
                  <br />
                  <input
                    type="email"
                    className="ULemailbox"
                    placeholder="Enter your email"
                    value={Lemail}
                    onChange={handleLemailChange}
                    required
                  ></input>
                  <span className="ULerror">{LemailError}</span>
                </div>
                <div className="Lpassword">
                  <label className="ULpassword1">Password</label>
                  <br />
                  <input
                    type="password"
                    id="ULpassbox"
                    placeholder="Enter your password"
                    value={Lpassword}
                    onChange={handleLpasswordChange}
                    required
                  ></input>
                  <span className="ULerror">{LpasswordError}</span>
                </div>
                <div className="Ufp">
                  <a href="#">Forgot Password?</a>
                </div>
                <Link to="./Homepage">
                  <div className="ULsubmit">
                    <button
                      type="submit"
                      className="ULsubmitbut"
                      disabled={!isFormValid}
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
                      alt="Google"
                    ></img>
                    <span>Sign in with Google</span>
                  </button>
                </div>
                <br />
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
                {errorMessage && <div className="ULerror-message">{errorMessage}</div>}
              </div>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
