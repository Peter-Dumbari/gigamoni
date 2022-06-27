import gigmaoni from "../assets/gigamoni.svg";
import userimage from "../assets/user-image.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loaders from "../components/loaders/Loaders";


// const VALIDEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const VALIDPASSWORD = /^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 8, }$/;

export default function UserRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if (localStorage.getItem('user-info'))
  //      { navigate.push('/dashboard')}
  // },[])

  async function handleSubmiting(data, e) {
    e.preventDefault();
    let items = { email: data.email, password: data.password };
    setLoading(true);
    let result = await axios
      .post("https://test-gig.herokuapp.com/api/v1/accounts/login/", items)

      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
          localStorage.setItem(
            "user_data",
            JSON.stringify(response.data.user_data)
          );
          setLoading(false);
          navigate("/dashboard");
          console.log(response.data.user_data);
        }
      })

      .catch((error) => {
        console.log(error.response);
        setLoading(false);
        
         if (error.response.status === 400) {
          setError("User does not Exit!");
        }

        else if(error.response.status === 401){
          setError(error.response.data.detail)
        }


      });
  }

  return (
    <div className="container">
      <div className="headboss">
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
            <h4>Welcome!</h4>

         

            <p className="loginheading_paragraph">
              Enter your Credentials to continue
            </p>
            {error && <div className="error__notifier">{error}</div>}
            <br />
            <form onSubmit={handleSubmit(handleSubmiting)}>
              <p className="error__notifier">{emailErrorMessage}</p>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                })}
              />
              <error>
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Entered Email is of Wrong format"}
              </error>
              <br />
              <p className="error__notifier">{passwordErrorMessage}</p>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("password", { minLength: 8, maxLength: 20, required: true })}
              />
              <error>
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "The password should not be less 8 digits"}
                {errors.password?.type === "maxLength" &&
                  "The password should not be more than 20 digits"}
              </error>
              <br />
              <p style={{ float: "right" }}>
                <Link to="/confirmEmail" className="forgot__password">
                  Forgot password?
                </Link>
              </p>
              <p style={{ float: "left" }}>
                <Link to="/verifyemail" className="verifyaccount">
                  Verify Account
                </Link>
              </p>
              <br /> <br />
              { loading ? <Loaders/> :  <button className="btn btn-success ">Login</button>}
               
            
            </form>
            <br />
            <br />
            <p style={{ float: "right" }}>
              No Account yet?{" "}
              <Link to="/userregistration" className="signup__link">
                Signup
              </Link>{" "}
            </p>
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
