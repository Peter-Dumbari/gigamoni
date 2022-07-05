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
      <Navbar />
      <div className="banksetting">
        <div className="dasboard__container__container">
          <div className="left_setter">
            <h4 style={cl}>Bank setting</h4>
          </div>
          <div className="banksettings">
            <img src={Image} alt="" className="void__image" />
            <h4 className="image__text">No Bank added yet</h4>
            <br />
            <br />
            <Link to="/addBank">
              <button className="btn btn-success">Add Bank</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
