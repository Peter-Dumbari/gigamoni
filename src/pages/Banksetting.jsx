import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import { Link } from "react-router-dom";
import "./Banksetting.css";
import Image from "../assets/empty_void.svg";
import Navbar from "../components/Navbar";

export default function DashBoard() {
  return (
    <>
    <Navbar/>
     <div className="dashboard__container__container">
     <div className="banksetting">
        <div className="banksttng__header">
          <h5>Bank Setting</h5>
          <div className="banksettings">
            <img src={Image} alt="" className="void__image" />
            <h4 className="image__text">No Bank added yet</h4>
            <Link to="/addBank">
              <div className="button_div">
                <button className="btn btn-success">Add Bank</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
