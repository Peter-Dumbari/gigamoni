import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import EmptyImage from "../assets/undraw_empty_re_opql.svg";
import ".././pages/Dashboard.css";
import '../pages/EmptyStartBidding.css';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DashBoard() {
    return (

      <>
      <Navbar/>
      <div className="dashboard__container__container">
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
      </>
  );
}
