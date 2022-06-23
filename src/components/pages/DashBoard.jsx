import { Link } from "react-router-dom"
import React, { useState} from "react";
import Realtime from "../assets/real-time-bidding 1.png";
import image2 from "../assets/image2.png";
import construction from "../assets/construction-bidding 1.png";
import BlueBall from "../assets/BlueEllipse.png";
import RedBall from "../assets/RedEllipse.png";
import YellowBall from "../assets/YellowEllipse.png";
import PurpleBall from "../assets/PurpleEcllipse.png";
import ".././pages/Dashboard.css";
import Navbar from "../Navbar";
import axios from "axios";


export default function DashBoard() {
  const access = JSON.parse(localStorage.getItem('tokens')).access;
  const user_data = JSON.parse(localStorage.getItem('user_data'));
  const [wallet, setWallet] = useState("");


  let items = {headers: {"Authorization": "Bearer "+access}}
 axios.get("https://test-gig.herokuapp.com/api/v1/crowdfunding/dashboard/", items)
 .then(response =>{
  setWallet(response.data);
  localStorage.setItem('balance', wallet.wallet_amount);
 })
 .catch(err =>{
  console.warn(err)
 })


  return (<> <Navbar/>
   <div className="dashboard__container__container">
      <div className="dashboards">
        <div className="dashboard__medle__items">
          <div className="middle_first">
            <h1>Hi {user_data.full_name}!</h1>
            <p>What do you want to do today?</p>
          </div>
          <Link
            to="/createipos"
            style={{ textDecoration: "none" }}
            className="cardlink"
          >
            <div className="card1">
              <div className="cardText">
                <h3>Create IPO</h3>
                <p>You now start biding for IPOs as little as 5,000</p>
              </div>
              <img
                src={Realtime}
                alt="/"
                width="200px"
                height="100px"
                className="card__image"
              />
            </div>
          </Link>

          <div className="card2">
            <div className="cardText">
              <h3>Current IPOs</h3>
              <p>Here are the list of IPO</p>
            </div>
            <img
              src={image2}
              alt="/"
              width="200px"
              height="100px"
              className="card__image"
            />
          </div>

          <div className="card3">
            <div className="cardText">
              <h3>Transaction History</h3>
            </div>
            <img
              src={construction}
              alt="/"
              width="200px"
              height="100px"
              className="card__image"
            />
          </div>
        </div>
        <div className="dashboard__last__items">
          <div className="fund_wallet__button">
            <button className="btn btn-success"> Fund Wallet</button>
          </div>
          <div className="dashboard__row">
            <h4>Analytics</h4>
            <div className="dashboard__row_container">
              <div className="analytics">
                <img
                  src={PurpleBall}
                  alt="/"
                  width="30px"
                  height="30px"
                  className="Ball"
                />
                <div className="analytics__items">
                  <h6>Total Active IPOs</h6>
                  <h6>{wallet.active_IPO}</h6>
                </div>
              </div>
              <div className="analytics">
                <img
                  src={BlueBall}
                  alt="/"
                  width="30px"
                  height="30px"
                  className="Ball"
                />
                <div className="analytics__items">
                  <h6>Total Bid</h6>
                  <h6>{wallet.total_IPO}</h6>
                </div>
              </div>
              <div className="analytics">
                <img
                  src={YellowBall}
                  alt="/"
                  width="30px"
                  height="30px"
                  className="Ball"
                />
                <div className="analytics__items">
                  <h6>Total withdraw</h6>
                  <h6>{wallet.total_amount_withdrawn}</h6>
                </div>
              </div>
              <div className="analytics">
                <img
                  src={RedBall}
                  alt="/"
                  width="30px"
                  height="30px"
                  className="Ball"
                />
                <div className="analytics__items">
                  <h6>Pending Bid</h6>
                  <h6>{wallet.pending_IPO}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
