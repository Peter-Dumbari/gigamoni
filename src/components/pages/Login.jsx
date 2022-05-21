import gigmaoni from "../assets/gigamoni.svg";
import userimage from "../assets/user-image.svg";
import { useRef, useState, useEffect, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// const VALIDEMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const VALIDPASSWORD = /^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 8, }$/;
export default function UserRegistration() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
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
    // const result = VALIDEMAIL.test(email);
    console.log(email);
    // console.log(result);
    setValidEmail(email);
  }, [email]);

  useEffect(() => {
    // const result = VALIDPASSWORD.test(pwd);
    console.log(pwd);
    console.log(pwd);
    // setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={gigmaoni} alt="" width="200" height="100" />
          <div className="col-lg-8">
            <h4>Login</h4>
            <br />
            <form onSubmit={handleSubmit}>
              <p ref={errRef} aria-live="assertive">
                {/* {errMsg} */}
              </p>
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => setPwd(e.target.value)}
              />
              <br />
              <p style={{ float: "right" }}>
                <Link to="/confirmEmail">Forgot password</Link>
              </p>
              <br /> <br />
              <button className="btn btn-success ">Login</button>
              <br />
              <br />
              <p style={{ float: "right" }}>
                No Account yet? <Link to="/userregistration">Signup</Link>{" "}
              </p>
            </form>
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
