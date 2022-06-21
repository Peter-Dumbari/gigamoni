 import gigmaoni from "../assets/gigamoni.svg";
import userimage from "../assets/user-image.svg";
import { useRef, useState, useEffect, useContext } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";




// const VALIDEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const VALIDPASSWORD = /^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 8, }$/;
export default function UserRegistration() {
  const [fullname, setFulname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [error, setError] = useState(null); 
  const [userFocus, setUserFocus] = useState(false);
 


  const {register, formState: {errors}, handleSubmit} = useForm();

  const handlingSubmit = async (data) => {
    const userdata = {
      full_name: data.fullname,
      email: data.email,
      phone_number: data.Phonenumber,  
      password: data.password,
    };
    console.log(userdata);
  
      await axios
      .post(
       'https://test-gig.herokuapp.com/api/v1/accounts/register/person/',
        userdata)
      .then((response) =>{
        if (response.status === null){
          console.log(response.status)
          Navigate('/home')
        }
      }).catch((error) =>{
        console.log(error.response)
        if (error.response.data.email[0]){
          setError(error.response.data.email[0])
        }

        if (error.response == null){
          setError("Your Account created successfully, checked your mail for verification")
        }
      }); 
    }


  const handlefullname = (event) => {
    const full_name = event.target.value;
    console.log(full_name);
    setFulname(full_name);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    console.log(email);
    setEmail(email);
  };

  const handlephone = (event) => {
    const phone_number = event.target.value;
    console.log(phone_number);
    setPhonenumber(phone_number);
  };
  const handlepwrd = (event) => {
    const password = event.target.value;
    console.log(password);
    setPwrd(password);
  };
  

  return (
    <div className="container">
      <div className="headboss">
        {" "}
        <img
          src={gigmaoni}
          alt=""
          width="200"
          height="100"
          className="gigalogo"
        />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="col-lg-8">
            <h4>User Registration</h4>
            <br />
            <div className="userformdiv">
              <form>
                {error && <div className="error__notifier">{ error }</div>}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fullname"
                  onChange={(e) => handlefullname(e)}
                  {...register("fullname",{required: true})}
                />
                <error>
                  {errors.fullname?.type === 'required' && 'Fullname is required'}
                </error>
                <br />
                 <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  onChange={(e) => handleemail(e)}
                  {...register("email", {required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}
                  />
                <br />
                <error>
                  {errors.email?.type === 'required' && 'Email is required'}
                  {errors.email?.type === 'pattern' && 'Entered Email is Wrong format'}
                </error>
                <input
                  type="int"
                  className="form-control"
                  placeholder="Phone"
                  onChange={(e) => handlephone(e)}
                  {...register("Phonenumber",{minLength: 11,
                    maxLength: 11})}
                />
                <error>
                {errors.Phonenumber?.type === 'minLength' && 'Entered number is less than 11 digits'}
                {errors.Phonenumber?.type === 'maxLength' && 'Entered number is more than 11 digits'}
                </error>
                <br />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  onChange={(e) => handlepwrd(e)}
                {...register("password",{minLength: 8,
                  maxLength: 20})}
                />
                <error>
                  {errors.password?.type === "minLength" && "The password is should not be less 8 digits"}
                  {errors.password?.type === "maxLength" && "The password is should not be more than 20 digits"}
                </error>
                <br />
                <p style={{ float: "right" }}>
                  Already a member?{" "}
                  <Link to="/login" className="login__link">
                    Login
                  </Link>{" "}
                </p>
                <br /> <br />
                <button onClick={handleSubmit(handlingSubmit)} className="Registration_btn">Register</button>
                <div className="or_line">
                  <hr className="line" />
                  <p className="hr_p">Or</p>
                  <hr className="line" />
                </div>
                {/* <button className="btn btn-success">Register</button> */}
                <Link to="/companyregistration" className="btn btn-default">
                  Company Registration
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <br />
          <img
            src={userimage}
            alt=""
            width="400"
            height="400"
            className="userImage"
          />
        </div>
      </div>
    </div>
  );
}
