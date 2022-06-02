import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import EmptyImage from "../assets/undraw_empty_re_opql.svg";
import ".././pages/Dashboard.css";
import '../pages/EmptyStartBidding.css';
import { Link } from "react-router-dom";

export default function DashBoard() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

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
    return (
      <div className="dashboard__containers">
        <div className="navbar__container">
          <p>Wallet Ballance N0:00</p>
          <img src={Logo} alt="logo" className="sidenav__image" />
        </div>
        <div onClick={handleClick} className="menu-icon">
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
        <div className="dashboard__container__container">
          <div className="side__Nav">
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
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
                <Link
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  IPOs
                </Link>
                <Link
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Wallet
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
  
          <div className="emptyStartBiddingContainer">
            <div className="biddingContainer">
            <div className="emtpty_header_text">
              <h4>Start Bidding</h4>
              <div className="container__items">
                <img src={EmptyImage} alt="" width="400px" height="400px" className="empty__void"/>
                <h3>No Investment Yet</h3>
                <h4>Check back later for new bidding</h4>
              </div>
            </div >
            </div>
            <Link to="/startbiddings">Samples</Link>
          </div>
      </div>
    </div>
  );
}
