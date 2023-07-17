import React from 'react'
import { useState, useContext } from "react";
import './login.css'
import logo from "./Expedia_Group_logo.svg.png"
import { AppContext } from '../App';
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

  const { userLogged, userInfo } = useContext(AppContext);
  return (
    <div>
      <div>
        {userLogged && userInfo ?
          <div className='profile-page'>
            <img src={userInfo.picture} alt="Profile picture of the user" className='profile-pic' />
            <div className='profile-welcome'>Hello {userInfo.given_name}, you are logged in as {userInfo.email}.</div>
            <div class="user-box">
              <div className="row">
                <span className="label">Trips Completed:</span>
                <span className="value">10</span>
              </div>
              <div className="row">
                <span className="label">Countries visited:</span>
                <span className="value">5</span>
              </div>
              <div className="row">
                <span className="label">Last Trip status:</span>
                <span className="value">2023-07-01</span>
              </div>
            </div>
          </div> :
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
          </div>
        }
      </div>


      <footer className='page-disclaimer'> Important Note- This is a demo page for login . No server side functionality has been added. For more details contact <a href='https://www.expedia.com.sg/service/'>here.</a>Thank you. </footer>
    </div>
  )
}



export default Login