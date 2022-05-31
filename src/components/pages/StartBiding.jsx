import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import NairaSign from '../assets/nairasign.png';

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

        <div className="startbbing__container">
          <div className="startbidding__header">
            <h2>Start Bidding</h2>
            <h5>Choose from the list of available assets</h5>
          </div>
          <div className="startbidding__card">
            <img src={NairaSign} alt=""  width="100px" height="100px" className="startbbing__card__image" />
            <div className="card__text">
              <h3>Asset Title</h3>
              <p>
                This is the asset descriptin the user should know before the can
                bid
              </p>
              <button className="card__button"> view more</button>
            </div>
            <h4>N70,000,000.00</h4>
          </div>
          <div className="startbidding__card">
            <img src={NairaSign} alt=""  width="100px" height="100px" className="startbbing__card__image" />
            <div className="card__text">
              <h3>Asset Title</h3>
              <p>
                This is the asset descriptin the user should know before the can
                bid
              </p>
              <button className="card__button"> view more</button>
            </div>
            <h4>N70,000,000.00</h4>
          </div>
          <div className="startbidding__card">
            <img src={NairaSign} alt=""  width="100px" height="100px" className="startbbing__card__image" />
            <div className="card__text">
              <h3>Asset Title</h3>
              <p>
                This is the asset descriptin the user should know before the can
                bid
              </p>
              <button className="card__button"> view more</button>
            </div>
            <h4>N70,000,000.00</h4>
          </div>
          <p className="clear_all_link"><Link to="/emptystartbidding">X</Link></p>
        </div>
      </div>
    </div>
  );
}
