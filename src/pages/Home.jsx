import React from "react";
import "../App.css";
import welcome from "../assets/welcome.svg";
import { Link } from "react-router-dom";
import users from "../assets/profile.png";
import greenball from "../assets/office-building.png";
import Logo from "../assets/gigamonilogo.jpeg"

export default function Home() {
  return (
    <div>
      <div className="sidenav">
        <h1>Welcome</h1>
        <p>
          This is a dummy text that will be replaced by another text. It is a
          placeholder that used beacuse real text are not available
        </p>

        <img
          src={welcome}
          alt="/"
          width="300"
          height="300"
          className="home_image"
        />
      </div>
      <div className="body">
      <img src={Logo} alt="" className="gigaimage"/>
        <div className="home_items"><h2>Choose your account type</h2>
       
        <Link  style={{ textDecoration: 'none'}} to="/userregistration">
          <div className="userregistration__box">
            <img src={users} alt="" className="angle__pic" />
            <div className="userbox_text">
              <h5>Individual</h5>
              <h6>For Individuals who want to Invest</h6>
            </div>
          </div>
        </Link>
        <br />
        <Link  style={{ textDecoration: 'none'}} to="/companyregistration">
          <div className="userregistration__box">
            <img src={greenball} alt="" className="greenball__pic" />
            <div className="userbox_text">
              <h5>Company</h5>
              <h6>For Companies looking for funds</h6>
            </div>
          </div>
        </Link></div>
      </div>
    </div>
  );
}
