import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import NairaSign from '../assets/nairasign.png';
import Navbar from "../Navbar";

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
        <>
        <Navbar/>
        <div className="dashboard__container__container">
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
        </>
    

  );
}
