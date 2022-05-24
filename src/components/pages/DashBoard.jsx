import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import Realtime from "../assets/real-time-bidding 1.png";
import image2 from "../assets/image2.png";
import construction from "../assets/construction-bidding 1.png";
import BlueBall from "../assets/BlueEllipse.png"
import RedBall from "../assets/RedEllipse.png"
import YellowBall from "../assets/YellowEllipse.png"
import PurpleBall from "../assets/PurpleEcllipse.png"
import ".././pages/Dashboard.css";


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

        <div className="dashboards">
          <div className="dashboard__medle__items">
            <div className="middle_first">
              <h1>Hi Sammy Cliffy</h1>
              <p>What do you want to do today?</p>
            </div>
            <Link to="/startbiding" className="cardlink"> <div className="card1">
              <div className="cardText">
                <h3>Start Bidding</h3>
                <p>You now start biding for IPOs as little as 5,000</p>
              </div>
              <img src={Realtime} alt="/" width="200px" height="100px" className="card__image"/>
            </div></Link>

           <div className="card2">
              <div className="cardText">
                <h3>Current IPOs</h3>
                <p>Here are the list of IPO</p>
              </div>
              <img src={image2} alt="/" width="200px" height="100px" className="card__image"/>
            </div>
           
           <div className="card3" >
              <div className="cardText">
                <h3>Transaction History</h3>
              </div>
              <img src={construction} alt="/" width="200px" height="100px" className="card__image"/>
            </div>
           
            
          </div>

          <div className="dashboard__last__items">
            <button className="fund_wallet__button"> Fund Wallet</button>
            <div className="dashboard__row">
                <h4>Analytics</h4>
              <div className="dashboard__row_container">
              <div className="analytics">
                <img src={PurpleBall} alt="/" width="30px" height="30px" className="Ball" />
                <div className="analytics__items">
                  <h6>Total Active IPOs</h6>
                  <h6>0</h6>
                </div>
              </div>
              <div className="analytics">
                <img src={BlueBall} alt="/" width="30px" height="30px" className="Ball" />
                <div className="analytics__items">
                  <h6>Total Bid</h6>
                  <h6>0</h6>
                </div>
              </div>
              <div className="analytics">
                <img src={YellowBall} alt="/" width="30px" height="30px" className="Ball" />
                <div className="analytics__items">
                  <h6>Total withdraw</h6>
                  <h6>0</h6>
                </div>
              </div>
              <div className="analytics">
                <img src={RedBall} alt="/" width="30px" height="30px" className="Ball" />
                <div className="analytics__items">
                  <h6>Pending Bid</h6>
                  <h6>0</h6>
                </div>
              </div>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
