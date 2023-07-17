import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './EG_IconLogo_White-on-Transparent_04-27-2023.png';
import logo2 from './EG_WordmarkLogo_White-on-Transparent_04-27-2023.png'
function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar'>
      <img src={logo2} className='logo2'/>
      <br/>
      <div className='nav-link'>
        <NavLink activeClassName="active" className='link' to="/">Home</NavLink>
        <NavLink activeClassName="active" className='link' to="/about">About</NavLink>
        <NavLink activeClassName="active" className='link' to="/login">Login</NavLink>
      </div>
      {isSticky}
    </div>
  );
}

export default Navbar;
