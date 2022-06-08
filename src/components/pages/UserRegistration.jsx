import gigmaoni from "../assets/gigamoni.svg";
import userimage from "../assets/user-image.svg";
import { useRef, useState, useEffect, useContext } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const VALIDEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const VALIDPASSWORD = /^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 8, }$/;
export default function UserRegistration() {
  const userRef = useRef();
  const errRef = useRef();

  const [fullname, setFulname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [message, setMessage] = useState("");

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

  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = VALIDEMAIL.test(email);
    console.log(email);
    console.log(result);
    setValidEmail(email);
  }, [email]);

  useEffect(() => {
    const result = VALIDPASSWORD.test(pwd);
    console.log(pwd);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);


    const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = {
      full_name: fullname,
      email: email,
      phone_number: phonenumber,
      password: pwrd,
    };
    console.log(userdata);
  
      await axios
      .post(
       'https://127.0.0.1:8000/api/v1/accounts/register/person/',
        userdata)
      .then((response) =>{
        if (response.status === 200){
          console.log(response);
        }
      }).catch(error =>{
        console.log(error.response)
      })
      ;

   

    
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
            <p>{JSON.response}</p>
            <div className="userformdiv">
              <form onSubmit={handleSubmit}>
                <p ref={errRef} aria-live="assertive">
                  {/* {errMsg} */}
                </p>
                <input
                  type="text"
                  id="fullname"
                  ref={userRef}
                  value={fullname}
                  className="form-control"
                  placeholder="Fullname"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  onChange={(e) => handlefullname(e)}
                  required
                />
                <br />
                <input
                  type="email"
                  id="email"
                  ref={userRef}
                  value={email}
                  className="form-control"
                  placeholder="Email"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  onChange={(e) => handleemail(e)}
                  required
                />
                <br />
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  value={phonenumber}
                  onChange={(e) => handlephone(e)}
                />
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
                  Already a member?{" "}
                  <Link to="/login" className="login__link">
                    Login
                  </Link>{" "}
                </p>
                <br /> <br />
                <button className="Registration_btn">Register</button>
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
