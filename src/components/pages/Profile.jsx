import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import { Link } from "react-router-dom";
import "./Profile.css";

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
        <div className="profile__container">
          <div className="profiles">
          <div className="profile__items">
            <h3>Profile Settings</h3>
          </div>
          <div className="holder"><div className="profile__list">
            <form>
              <div className="form__items">
                <div className="firstline">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstname">Last Name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form__items">
                <div className="secondline">
                  <label htmlFor="emailaddress">Email Address:</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phonenumber">Phone Number:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <button className="btn btn-primary">Update</button>
            </form>
          </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
