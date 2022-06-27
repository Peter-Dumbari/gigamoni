import React from "react";
import Logo from "../assets/Logo.png";
import "./Dashboard.css";
import "./Transactions.css";
import NairaSign from "../assets/nairasign.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";


export default function DashBoard() {
const items ={

}

  return (
    <div className="dashboard__containers">
        <Navbar/>
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
                              <button  className="withdraw__button" hre="#divOne">Withdraws</button>
                          </div>
                          <div className="search__container">
                              <input type="search" className="search__inputbox"/>
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
      <div className="overlay">
         <div className="wrapper">
         <div><Link to="/transactions" className="close">&times;</Link></div>
         </div>
          <div className="content">
                <div className="withdraw__items"><h5>Wallet Balance: N0.00</h5></div>
                <img src={NairaSign} alt="" width="100px" height="100px" className="withdraw__image"/>
                <h4 className="withdraw__text">Withdraw</h4>
                <form>
                <div className="withdraw__balance">
                    <h6>Insufficience Balance</h6>
                    <input type="text" className="form-control" required/>
                </div>
                <button className="withdraw__button2">Withdraw</button>
                </form>
          </div>
         </div>
    </div>
  );
}
