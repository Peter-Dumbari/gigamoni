import React, { useState, useEffect, useNavigate} from "react";
import { Link } from "react-router-dom";
import "../pages/Dashboard.css";
import Logo from "../assets/Logo.png";
import axios from "axios";
import { Navigate } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


export default function Navbar() {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [indicator, setIndicator] =useState('');
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const Notifier = localStorage.getItem('verified')
  // console.log(Notifier)


  return (
    <>
      <div className="navbar__container">
        <>{Notifier === "VERIFIED"? <p style={{color: 'green'}}>VERIFIED</p> : <p style={{color: 'red'}}>NOT YET VERIFIED</p>}</>

      </div>
      <div className="menu-icon" onClick={handleClick} >
        <>{click? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-bars"></i>}</>
      </div>
      <div className="side__Nav">
      <img src={Logo} alt="logo" className="sidenav__image" />
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dashboard 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/transactions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Transactions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/startbiding" className="nav-links" onClick={closeMobileMenu}>
              IPOs
            </Link>
          </li>            
          <li className="nav-item">
            <Link to="/addBank" className="nav-links" onClick={closeMobileMenu}>
              Settings
            </Link>
          </li>            
          <li>
            <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

