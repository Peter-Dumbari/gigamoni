import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loaders from "../components/loaders/Loaders";



export default function ConfirmEmail() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [optError, setOptError] = useState("")
  const [loading, setLoading] = useState(false);


  const {register, formState:{errors}, handleSubmit} = useForm()

  const handleemail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleotp = (event) => {
    const otp = event.target.value;
    setOtp(otp);
  };

  const handleSubmiting = async (data) => {
    const items = {
      email: data.email,
      otp: parseInt (data.otp)
    };
    setLoading(true);
    console.log(items);
    let result = await axios.post("https://test-gig.herokuapp.com/api/v1/accounts/verify/", items)
    
    .catch(error =>{
        console.log(error.response.data)
        if(error.response.data){
          setError("The OTP is Invalid")
          setLoading(false);
        }
    
      })
  };


  return (
    <div className="confirmEmail__container">
      <div className="confirmEmail__Item">
        <img src={Logo} className="giga_Logo" />

        <h3 className="confirmEmail__header">Email Confirmation</h3>
        <form >
        <p className="error__notifier">{error}</p>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            {...register("email", {required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}
          />
           <error>
                  {errors.email?.type === 'required' && 'Email is required'}
                  {errors.email?.type === 'pattern' && 'Entered Email is Wrong format'}
                 
          </error>
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter OTP Code Here"
            {...register("otp", {required: true, minLength: 6, maxLength: 6, pattern: /^[0-9]*\d$/})}

          />
          <error>
                  {errors.otp?.type === 'required' && 'OTP is required'}
                  {errors.otp?.type === 'pattern' && 'Incorrect OTP'}
                  {errors.otp?.type === 'minLength' && 'OTP cannt be less than 6 digits'}
                  {errors.otp?.type === 'maxLength' && 'OTP cannt be more than 6 digits'}
                </error>
          <br />
          { loading ? <Loaders/> : <button onClick={handleSubmit(handleSubmiting)} className="Registration_btn">
            Register
          </button> }
        </form>
        <div className="or_line">
          <hr className="line" />
          <p className="hr_p">Or</p>
          <hr className="line" />
        </div>

        <div className="or_userRegistration">
          <Link to="/userregistration">
            <button className="btn btn-default">User Registration</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
