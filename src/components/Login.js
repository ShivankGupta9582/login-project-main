import React from 'react'
import { useState } from "react";
import { ReactDOM } from 'react';
import './login.css'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import logo from "./Expedia_Group_logo.svg.png"
const Login = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  // console.clear();

//   const handleLoginClick = (e) => {
//     let parent = e.target.parentNode.parentNode;
//     Array.from(e.target.parentNode.parentNode.classList).find((element) => {
//       if (element !== 'slide-up') {
//         parent.classList.add('slide-up');
//       } else {
//         this.signupBtn.parentNode.classList.add('slide-up');
//         parent.classList.remove('slide-up');
//       }
//     });
//   };

//  const handleSignupClick = (e) => {
//     let parent = e.target.parentNode;
//     Array.from(e.target.parentNode.classList).find((element) => {
//       if (element !== 'slide-up') {
//         parent.classList.add('slide-up');
//       } else {
//         this.loginBtn.parentNode.parentNode.classList.add('slide-up');
//         parent.classList.remove('slide-up');
//       }
//     });

  return (
    <div>

      <form className="form" onSubmit={handleSubmit}>
        <img className='logo' src={logo} alt={"Logo Image"} height="300" width="380" />
        <br />
        <label className='label'>Enter your email id:
          <input className='input'
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='label'>Enter your password:
          <input className='input'
            type="password"
            name="pass"
            value={inputs.pass || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input activeClassName="active" className='input' type="submit" />
      </form>

      <h2> Note- This is a demo page for login . No server side functionality has been added.</h2>
    </div>
    // <>
    //   <div className="form-structor">
    //     <div className="signup">
    //       <h2 className="form-title" id="signup" onClick={handleSignupClick}><span>or</span>Sign up</h2>
    //       <div className="form-holder">
    //         <input type="text" className="input" placeholder="Name" />
    //         <input type="email" className="input" placeholder="Email" />
    //         <input type="password" className="input" placeholder="Password" />
    //       </div>
    //       <button className="submit-btn">Sign up</button>
    //     </div>
    //     <div className="login slide-up">
    //       <div className="center">
    //         <h2 className="form-title" id="login" onClick={handleLoginClick}><span>or</span>Log in</h2>
    //         <div className="form-holder">
    //           <input type="email" className="input" placeholder="Email" />
    //           <input type="password" className="input" placeholder="Password" />
    //         </div>
    //         <button className="submit-btn">Log in</button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}



export default Login