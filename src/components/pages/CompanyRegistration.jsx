import gigmaoni from "../assets/gigamoni.svg";
import undraw_finance from "../assets/finance_image.svg";
import { useRef, useState, useEffect, useContext } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const REGISTER_URL = "api/v1/accounts/register/person/";
const VALIDEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const VALIDPASSWORD = /^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 8, }$/;
export default function UserRegistration() {
  const userRef = useRef();
  const errRef = useRef();

  const [companyname, setCompanyname] = useState("");
  const [companytype, setCompanytype] = useState("");
  const [email, setEmail] = useState("");
  const [rc, setRc] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [error, setError] = useState("")
  const [userFocus, setUserFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  

  const handleCompanyname = (event) => {
    const company_name = event.target.value;
    console.log(company_name);
    setCompanyname(company_name);
  };
  const handleCompanytype = (event) => {
    const company_type = event.target.value;
    console.log(company_type);
    setCompanytype(company_type);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    console.log(email);
    setEmail(email);
  };

  const handlerc = (event) => {
    const rc_no = event.target.value;
    console.log(rc);
    setRc(rc);
  };
  const handlepwrd = (event) => {
    const password = event.target.value;
    console.log(password);
    setPwrd(password);
  };
  


    const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = {
      company_name: companyname,
      company_type: companytype,
      email: email,
      rc_noy: rc,
      password: pwrd,
    };
    console.log(userdata);
  
      await axios
      .post(
       'https://test-gig.herokuapp.com/api/v1/accounts/register/company1/',
        userdata)
      .then((response) =>{
        if (response.status === 200){
          throw Error(error.response);
        }
      }).catch(error =>{
        console.log(error.response)
        setError(error.message)
      })
      ;    
  };

  return (
    <div className="container">
     <div className="headboss"> <img src={gigmaoni} alt="" width="200" height="100"  className="gigalogo"/></div>
      <div className="row">
        <div className="col-lg-6">
          <div className="col-lg-8">
            <h4>Company Registration</h4>
            <br />
            <div className="userformdiv"><form>
              <p ref={errRef} aria-live="assertive">
                {/* {errMsg} */}
              </p>
              <input
                type="text"
                id="companyname"
                ref={userRef}
                className="form-control"
                placeholder="Company Name"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => handleCompanyname(e)}
                required
              />
              <br />
              <input
                type="text"
                id="companytype"
                ref={userRef}
                className="form-control"
                placeholder="Company Type"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => handleCompanytype(e)}
                required
              />
              <br />
              <input
                type="email"
                id="email"
                ref={userRef}
                value={email}
                className="form-control"
                placeholder="Company Email"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => handleemail(e)}
                required
              />
              <br />
              <input type="text" 
              className="form-control" 
              placeholder="Company RC"                   
              onChange={(e) => handlerc(e)} />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => handlepwrd(e)}
                />
              <br />
              <p style={{ float: "right" }}>
                Already a member? <Link to="/login" className="login__link">Login</Link>{" "}
              </p>
              <br /> <br />
              <button onClick={handleSubmit} className="Registration_btn">Register</button>
          <div className="or_line">
            <hr className="line"/>
            <p className="hr_p">Or</p>
            <hr className="line"/>
          </div>
              {/* <button className="btn btn-success">Register</button> */}
              <Link to="/userregistration" className="btn btn-default">
                 Registration
              </Link>
            </form></div>
          </div>
        </div>
        <div className="col-lg-6">
          <br />
          <img
            src={undraw_finance}
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
