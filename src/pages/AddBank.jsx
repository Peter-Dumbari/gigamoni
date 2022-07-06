import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import { Link } from "react-router-dom";
import "./Profile.css";
import Navbar from "../components/Navbar";

export default function DashBoard() {
 
  return (
    <>
    <Navbar/>
    <div className="dashboard__container__container">
        <div className="profile__container">
          <div className="profiles">
          <div className="profile__items">
            <h3>Settings</h3>
          </div>
          <div className="profile__list">
            <form>
              <div className="settings_form">
              <div className="formscontainer1">
                  <label>BVN</label>
                  <input type="" className="form-control" required/>
                  <label>Account Name:</label>
                  <input type="text" className="form-control" required />
      
                </div>
                <div className="formscontainer2">
                  <label>BVN</label>
                  <input type="" className="form-control" required/>
                  <label>Account Name:</label>
                  <input type="text" className="form-control" required/>
                </div>
              </div>
                <button className="btn btn-primary">SEND</button>
{/* 
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
              </div> */}
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
