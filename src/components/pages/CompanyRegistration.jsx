import gigmaoni from "../assets/gigamoni.svg";
import undraw_finance from "../assets/finance_image.svg";
import { useRef, useState, useEffect, useContext } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";



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
  const {register, formState: {errors}, handleSubmit} = useForm();


  

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
  


    const handleSubmiting = async ( data) => {
    const userdata = {
      company_name: data.companyname,
      company_type: data.companytype,
      email: data.email,
      company_address: data.companyaddress,
      rc_no: data.companyrc,
      password: data.password,
    };
    console.log(userdata);
  
      await axios
      .post(
       'https://test-gig.herokuapp.com/api/v1/accounts/register/company1/',
        userdata)
      .then((response) =>{
        if (response.status === 200){
          throw Error(error.response);
          console.log(response)
        }
      }).catch(error =>{
        console.log(error.response)
        setError(error.message)
      })
      ;    
  };

  return (
    <div className="container">
     <div className="headboss"> <img src={gigmaoni}  className="gigalogo"/></div>
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
                {...register("companyname",{required: true})}
              />
               <error>
                  {errors.fullname?.type === 'required' && 'Companyname is required'}
                </error>
              <br />
                <select {...register("companytype",{required: true})} className="form-control">
                <option defaultValue>Computer Engineering</option>
                <option >Mobile Banking</option>
                <option >Graphic Designing</option>
                <option >Farming</option>
                <option>Mechanical Engineering</option>
                <option>Hunting</option>
                <option >Transportation Company</option>
                <option >Software Engineering</option>
                <option >Others</option>
                </select>
                 <error>
                  {errors.companytype?.type === 'required' && 'Company-type is required'}
                </error>
              <br />
              <input
                type="text"
                id="companyaddress"
                ref={userRef}
                className="form-control"
                placeholder="Company Address"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                {...register("companyaddress",{required: true})}/>
                 <error>
                  {errors.companyaddress?.type === 'required' && 'Company-Address is required'}
                </error>
              <br />
              <input
                type="email"
                id="email"
                ref={userRef}
                className="form-control"
                placeholder="Company Email"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                {...register("email", {required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}
              />
              <error>
                  {errors.email?.type === 'required' && 'Email is required'}
                  {errors.email?.type === 'pattern' && 'Entered Email is Wrong format'}
                </error>
              <br />
              <input type="text" 
              className="form-control" 
              placeholder="Company RC"                   
              {...register("companyrc",{required: true})} />
              <br />
              <error>
              {errors.companyrc?.type === 'required' && 'Company-Rc is required'}
              </error>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                {...register("password",{minLength: 8,
                  maxLength: 20})}
                  />
              <br />
              <error>
                  {errors.password?.type === "minLength" && "The password is should not be less 8 digits"}
                  {errors.password?.type === "maxLength" && "The password is should not be more than 20 digits"}
                </error>
              <p style={{ float: "right" }}>
                Already a Registered? <Link to="/login" className="login__link">Login</Link>{" "}
              </p>
              <br /> <br />
              <button onClick={handleSubmit(handleSubmiting)} className="Registration_btn">Register</button>
          <div className="or_line">
            <hr className="line"/>
            <p className="hr_p">Or</p>
            <hr className="line"/>
          </div>
              {/* <button className="btn btn-success">Register</button> */}
              <Link to="/userregistration" className="btn btn-default">
                 Users Registration
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
