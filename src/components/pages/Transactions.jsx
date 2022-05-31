import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import NairaSign from "../assets/nairasign.png";
import { Link } from "react-router-dom";


export default function DashBoard() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <div className="dashboard__containers">
      <div className="navbar__container">
        <p>Wallet Ballance N0:00</p>
        <img src={Logo} alt="logo" className="sidenav__image" />
      </div>
      <div onClick={handleClick} className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
      <div className="dashboard__container__container">
        <div className="side__Nav">
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/transactions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Transactions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                IPOs
              </Link>
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Wallet
              </Link>
            </li>
            <li className="settings">
              <h5 className="dropbtn">Settings</h5>
              <div class="dropdown-content">
                <Link to="/profile" className="profile__setting">
                  Profile Setting
                </Link>
                <Link to="/banksetting" className="bank__setting">
                  Bank Setting
                </Link>
              </div>
            </li>
          </ul>
        </div>

          <div className="transaction__container">
              <div className="transaction__items">
                  <div className="transactions">
                      <div className="transaction__heading">
                          <h4>Transactions</h4>
                          <h6>Investment list</h6>
                      </div>
                      <div className="transaction__managers">
                          <div className="buttons">
                              <button className="investiment__button">Investment</button>
                              <Link to="/withdraw">
                              <button  className="withdraw__button" >Withdraws</button>
                              </Link>
                          </div>
                          <div className="search__container">
                              <input type="search" className="form-control"/>
                              <button className="search__button">search</button>
                          </div>
                      </div>
                        <div className="transactions__table">
                            <table>
                                <tr>
                                    <th>IPO</th>
                                    <th>Deposit</th>
                                    <th>Expected</th>
                                    <th>Duration</th>
                                    <th>Percentage</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Eeo 1</td>
                                    <td>N9,000.00</td>
                                    <td>N9,600.00</td>
                                    <td>9 days left</td>
                                    <td>12%</td>
                                    <td><h6 className="completed">Completed</h6></td>
                                </tr>
                                <tr>
                                    <td>Eeo 1</td>
                                    <td>N9,000.00</td>
                                    <td>N9,600.00</td>
                                    <td>9 days left</td>
                                    <td>12%</td>
                                    <td><h6 className="ongoing">On going</h6></td>
                                </tr>
                                <tr>
                                    <td>Eeo 1</td>
                                    <td>N9,000.00</td>
                                    <td>N9,600.00</td>
                                    <td>9 days left</td>
                                    <td>12%</td>
                                    <td><h6 className="completed">Completed</h6></td>
                                </tr>
                            </table>
                        </div>
                  </div>
                  <div className="transaction__last__row">
                        <img src={NairaSign} alt="" className="row__image"/>
                        <div className="row__text">
                            <h5>N900,000.00</h5>
                            <h6>Total Invesmtent</h6>
                        </div>
                        <div className="row__text">
                            <h5>N900,000.00</h5>
                            <h6>Withdrawals</h6>
                        </div>
                        <div className="row__text">
                            <h5>N900,000.00</h5>
                            <h6>Deposit</h6>
                        </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
