import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeDrawerMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeDrawerMenu}>
            GERMOR...
            <i class="fab fa-android" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeDrawerMenu}>
                HomePage
              </Link>
            </li>
            <li >
              <Link to="/" className="nav-spacer">
               
              </Link>
            </li>
            <li className="nav-item" onClick={closeDrawerMenu}>
              <a
                className="nav-links"
                target="_blank"
                href="https://gersonmorales.com/#/"
              >
                FlutterPage
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" >
                
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
