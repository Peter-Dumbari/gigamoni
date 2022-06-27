import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loaders from "../components/loaders/Loaders";



export default function ConfirmEmail() {

  const {register, formState:{errors}, handleSubmit} = useForm()
  const [ info, setInfo] = useState("")
  const[loading, setLoading] = useState("");

  const handleSubmiting=async(data)=>{
    const items = {
      email:data.email
    }
    setLoading(true);
    console.log(items);
    let result = await axios.post("https://test-gig.herokuapp.com/api/v1/accounts/forgot_password/", items)
    
    .then(response =>{
      if(response.status ===200){
        setInfo(response.data);
        console.log(response.status)
        setLoading(false);
      }
    })
    .catch(error =>{
        setLoading(false);
      })
      // result= await result.json()
      // localStorage.setItem("user-info",JSON.stringify(result))
  }

  return (
    <div className="confirmEmail__container">
      <div className="confirmEmail__Item">
        <img src={Logo} className="giga_Logo" />

        <h3 className="confirmEmail__header">Reset Password</h3>
        <form>
          <p className="success">{info}</p>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email Address"
            {...register("email", {required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}
          />
           <error>
                  {errors.email?.type === 'required' && 'Email is required'}
                  {errors.email?.type === 'pattern' && 'Entered Email is of Wrong format'}
                 
          </error>
          <br />
          <p style={{ float: "right" }} className="resend__p">
            did you recieve any email?{" "}
            <Link to="" className="resend__button">
              Resend
            </Link>{" "}
          </p>
          { loading ? <Loaders/> : <button onClick={handleSubmit(handleSubmiting)} className="Registration_btn">Reset Password</button>}
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
        </form>
      </div>
    </div>
  );
}
