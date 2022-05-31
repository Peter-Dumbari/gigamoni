import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import "../pages/StartBiddingFilled.css";
import BlueBall from "../assets/BlueEllipse.png"
import NairaSign from "../assets/nairasign.png";
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
        <div className="startBiddings">
          <div className="startBidding__container">
            <div className="startbidding__card">
              <img
                src={NairaSign}
                alt=""
                width="100px"
                height="100px"
                className="startbbing__card__image"
              />
              <div className="card__text">
                <h3>Asset Title</h3>
                <p>
                  This is the asset descriptin the user should know before the
                  can bid
                </p>
                <button className="card__button"> view more</button>
              </div>
              <h4>N70,000,000.00</h4>
            </div>
            <div className="gigasec__container">
            <div className="gigasec__services_list">
              <div className="gigasec__header_text">
                <h3>Gigasec Services Ltd</h3>
                <p>
                  This is the asset descriptin the user should know before the
                  can bid
                </p>
              </div>
              <div className="gigasec__items__container">
                  <img src={BlueBall} alt="" className="text__icon"/>
                    <div className="gigasec__text">
                        <h6>Rate</h6>
                        <h5>12%</h5>
                    </div>
              </div>
              <div className="gigasec__items__container">
                  <img src={BlueBall} alt="" className="text__icon"/>
                    <div className="gigasec__text">
                        <h6>Duration</h6>
                        <h5>12 Months</h5>
                    </div>
              </div>
              <div className="gigasec__items__container">
                  <img src={BlueBall} alt="" className="text__icon"/>
                    <div className="gigasec__text">
                        <h6>Valution Left</h6>
                        <h5>N30,000,000.00</h5>
                    </div>
              </div>
            </div>
            <div className="calculator__container">
                <div className="calculator__items">
                    <h6>Interest:</h6>
                    <h6>0</h6>
                </div>
                <div className="calculator__items2">
                    <h6>Percentage:</h6>
                    <h6>0%</h6>
                </div>
                <hr className="line"/>
                <input type="text"  placeholder="Enter amount to invest"  className="input__search"/>
                <button className="invest_button">Invest N70,000.00</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
