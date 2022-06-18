import React, { useState, useEffect, useNavigate} from "react";
import { Link } from "react-router-dom";
import "./pages/Dashboard.css";
import Logo from "./assets/Logo.png";
import axios from "axios";
import { Navigate } from 'react-router'


export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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


  function Logout (context) {
    const refresh = JSON.parse(localStorage.getItem('tokens')).refresh
    
    const items = {headers: {"Authorization": "Bearer "+ refresh}}
    console.log(items);
    axios.post('https://test-gig.herokuapp.com/api/v1/accounts/logout/', items)
    localStorage.clear('user_data');
    context.commit("user_data", {
      token: null,
    });
    this.axios.setHeader('Authorization', null)
    return <Navigate to="/login" replace/>

  } 


  window.addEventListener("resize", showButton);
  const balance = localStorage.getItem('balance')
  return (
    <>
      <div className="navbar__container">
        <p>Wallet Ballance N{balance}</p>
        <img src={Logo} alt="logo" className="sidenav__image" />
      </div>
      <div onClick={handleClick} className="menu-icon">
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className="side__Nav">
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
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              IPOs
            </Link>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Wallet
            </Link>

            <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
              Logout
            </Link>
          </li>
          <li className="settings">
            <h5 className="dropbtn">Settings</h5>
            <div class="dropdown-content">
              <Link to="/profile" className="profile__setting">
                Profile Setting
              </Link>
              <Link to="/banksetting" className="bank__setting">
                Bank Setting
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

