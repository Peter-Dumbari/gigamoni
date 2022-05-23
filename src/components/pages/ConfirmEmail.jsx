import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../../App.css";

export default function confirmEmail() {
  return (
    <div className="confirmEmail__container">
      <div className="confirmEmail__Item">
        <img src={Logo} className="giga_Logo" />

        <h3 className="confirmEmail__header">Email Confirmation</h3>
        <form>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Code Here"
          />

          <p style={{ float: "right" }} className="resend__p">
            did you recieve any email?{" "}
            <Link to="" className="resend__button">
              Resend
            </Link>{" "}
          </p>
          <button className="Registration_btn">Register</button>

          <div className="or_line">
            <hr className="line" />
            <p className="hr_p">Or</p>
            <hr className="line" />
          </div>

          <div className="or_userRegistration">
            <Link to="/userregistration">
              <button className="or_User_Reg_btn">User Registration</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
