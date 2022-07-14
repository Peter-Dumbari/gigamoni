import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loaders from "../components/loaders/Loaders";
import swal from "sweetalert";



export default function ConfirmEmail() {
  const Email = localStorage.getItem('email')
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [optError, setOptError] = useState("")
  const [loading, setLoading] = useState(false);


  const {register, formState:{errors}, handleSubmit} = useForm()

  

  const handleotp = (event) => {
    const otp = event.target.value;
    setOtp(otp);
  };

  const handleSubmiting = async (data) => {
    const items = {
      email: Email,
      otp: parseInt (data.otp)
    };
    setLoading(true);
    console.log(items);
    let result = await axios.post("https://test-gig.herokuapp.com/api/v1/accounts/verify/", items)

    .then(response =>{
      console.log(response);
      if(response.statusText === 'OK'){
        swal({
          title: "Email confirmation successful",
          text: "you can now login with the correct credentials",
          icon: "success",
        })
        .then(function() {
          window.location = "/login";
      })
      }
    })
    
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
        <h3 className="confirmEmail__header">Email Confirmation</h3>
        <form >
        <p className="alert alert-danger">{error}</p>
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
          { loading ? <Loaders/> : <button onClick={handleSubmit(handleSubmiting)} className="btn btn-success">
            Send
          </button> }
        </form>
      </div>
    </div>
  );
}
