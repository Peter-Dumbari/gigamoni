import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import "../pages/StartBiddingFilled.css";
import BlueBall from "../assets/BlueEllipse.png"
import NairaSign from "../assets/nairasign.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";


export default function DashBoard() {
  const[data, setData] =  useState([]);
  const access = JSON.parse(localStorage.getItem('tokens'));

  useEffect(()=>{
      let items = {headers: {"Authorization": "Token "+access}}
      axios.get('https://test-gig.herokuapp.com/api/v1/crowdfunding/companytrans/', items)
      .then(response =>{
      setData(response.data.results);
      console.log(data)
      })
  }, [])
  return (
    <>
    <Navbar/>
    <div className="dashboard__container__container">
    <div className="startBiddings">
          <div className="startBidding__container">
          <div className="cards">
             {data.map((item, index) =>
               <div className="startbidding__card" key={index}>
               <img src={NairaSign} alt=""  width="100px" height="100px" className="startbbing__card__image" />
               <div className="card__text">
                   <h3>{item.asset_title}</h3>
                 <p>
                   {item.asset_descr}
                 </p>
                 <Link to='/startbiddings' style={{textDecortion: 'none'}}><button className="card__button"> view more</button></Link>
               </div>
               <h4>{item.po_value}</h4>
             </div>
            )
        }
            </div>
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
                        <h6>Margin</h6>
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
            {/* <div className="calculator__container">
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
            </div> */}
            </div>
          </div>
        </div>
    </>
  );
}
