import React from "react";
import Logo from "../assets/Logo.png";
import EmptyImage from "../assets/undraw_empty_re_opql.svg";
import ".././pages/Dashboard.css";
import '../pages/EmptyStartBidding.css';
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="dashboard__containers">
      <div className="navbar__container">
        <p>Wallet Ballance N0:00</p>
      </div>
      <div className="dashboard__container__container">
        <div className="side__Nav">
          <img src={Logo} alt="logo" className="sidenav__image" />
          <ul className="sidenav__items">
            <li>
              <a href="/dashboard">Dasboard</a>
            </li>
            <li>
              <a href="/transactions">Transaction</a>
            </li>
            <li>
              <a href="/">IPOs</a>
            </li>
            <li>
              <a href="/">Wallet</a>
            </li>
            <li className="settings"><h5 className="dropbtn">Settings</h5>
    <div class="dropdown-content">
      <Link to="/profile" className="profile__setting">Profile Setting</Link>
      <Link to="/banksetting" className="bank__setting">Bank Setting</Link>
    </div></li>
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
          </div>
        <Link to="/startbiddings">Samples</Link>
      </div>
    </div>
  );
}
