import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './4136591-removebg-preview.png';

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
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <h2>EG Login Project</h2>
      <div className='nav-link'>
        <img src={logo} width="50" height="50" alt="EG" className='logo' />
        <NavLink activeClassName="active" className='link' to="/">Home</NavLink>
        <NavLink activeClassName="active" className='link' to="/about">About</NavLink>
        <NavLink activeClassName="active" className='link' to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
