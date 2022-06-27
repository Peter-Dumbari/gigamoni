import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import NairaSign from '../assets/nairasign.png';
import Navbar from "../components/Navbar";
import axios from "axios";



export default function CreatedIpos() {
const access = JSON.parse(localStorage.getItem('tokens')).access;

let items = {headers: {"Authorization": "Bearer "  +    access}}
axios.get('https://test-gig.herokuapp.com/api/v1/crowdfunding/current_ipo/', items)
.then(response =>{
  console.log(response)
})

.catch(error =>{
  console.log(error);
})


  return (
        <>
        <Navbar/>
        <div className="dashboard__container__container">
        <div className="startbbing__container">
          <div className="startbidding__header">
            <h2>Created IPO</h2>
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
