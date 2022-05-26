import React from "react";
import "../../App.css";
import welcome from "../assets/welcome.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="sidenav">
        <h1>Welcome</h1>
        <p>
          This is a dummy text that will be replaced by another text. It is a
          placeholder that used beacuse real text are not available
        </p>

        <img src={welcome} alt="/" width="300" height="300" className="home_image"/>
      </div>
      <div className="body">
        <h2>Choose your account type</h2>
        <p>
          This is a dummy text that will be replaced by another text. <br /> It
          is a placeholder that used beacuse real text are not available
        </p>
        <Link to="/userregistration">
          <div className="chip">
            <div className="smallBox"></div>
            Individual Account
          </div>
        </Link>
        <br />


        <Link to="/companyregistration">
        <div className="chip">
            <div className="smallBox"></div>
            Company Account
          </div>
        </Link>
      </div>
    </div>
  );
}
