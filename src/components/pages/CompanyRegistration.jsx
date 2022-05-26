import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import undraw_finance from "../assets/finance_image.svg";
import "../../App.css";

export default function CompanyRegistration() {
  return (
    <div className="companyreg__container">
      <div className="companyreg__image">
        <img src={Logo} alt="/" className="gigamoni__logo" />
     
      <h4 className="company_reg_heading">Company Registration</h4>

      <div className="companyreg__form">
        <form>
          <input
            type="text"
            id="fullname"
            className="form-control"
            placeholder="Fullname"
            required
          />
          <br />
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            required
          />
          <br />
          <input type="tel" className="form-control" placeholder="Phone" />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <br />
          <p style={{ float: "right" }}>
            Already a member? <Link to="/login" className="login__link">Login</Link>{" "}
          </p>
          <br /> <br />
          <button className="Registration_btn">Register</button>
          <div className="or_line">
            <hr className="line"/>
            <p className="hr_p">Or</p>
            <hr className="line"/>
          </div>


          <div className="or_userRegistration">
            <Link to="/userregistration"><button className="or_User_Reg_btn">User Registration</button></Link>
          </div>
        </form>
      </div>
    </div>
    <img src={undraw_finance} alt=""  className="undraw__finance"/>
    </div>
  );
}
