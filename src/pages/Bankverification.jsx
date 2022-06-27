import React from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import { Link } from "react-router-dom";
import "./Banksetting.css";
import Image from "../assets/empty_void.svg";
import ".././pages/Bankverification.css";


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
        <div className="banksetting">
            <div className="banksttng__header">
              <h5>Bank Setting</h5>
              <div className="banksettings">
                <img src={Image} alt="" className="void__image" />
                <h4 className="image__text">No Bank added yet</h4>
                <Link to="/verification">
                <button className="btn btn-success">Add Bank</button>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <div className="overlay">
         <div className="wrapper">
         <div>
             <Link to="/banksetting" className="close">&times;</Link></div>
         </div>
            <div className="verfication__container">
                <h5>Add Bank</h5>
                <form>
                <div className="verification_form">
                    <h6>Enter BVN</h6>
                    <input type="password" name="" className="form-control" required/>
                </div>
                <button className="btn btn-primary">Verify</button>
                </form>
            </div>
         </div>
    </div>
  );
}
