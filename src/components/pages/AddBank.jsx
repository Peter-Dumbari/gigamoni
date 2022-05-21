import React from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import { Link } from "react-router-dom";
import "./Profile.css";

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
        <div className="profile__container">
          <div className="profiles">
          <div className="profile__items">
            <h3>Add Bank</h3>
          </div>
          <div className="profile__list">
            <form>
              <div className="form__items">
                <div className="firstline">
                  <label htmlFor="firstname">BVN:</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstname">Account Name:</label>
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
                  <label htmlFor="emailaddress">Account Number:</label>
                  <input
                    type="text"
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
              <button className="btn btn-primary">Add Bank</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
