import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import { Link } from "react-router-dom";
import "./Profile.css";
import Navbar from "../Navbar";

export default function DashBoard() {
 
  return (
    <>
    <Navbar/>
    <div className="dashboard__container__container">
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
    </>
  );
}
