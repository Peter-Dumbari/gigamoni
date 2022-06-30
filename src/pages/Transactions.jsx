import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import NairaSign from "../assets/nairasign.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";


export default function DashBoard() {
     const[transactions, setTransactions] = useState("");
     const access = JSON.parse(localStorage.getItem('tokens'));

     let items = {headers: {"Authorization": "Token "+access}}
    axios.get('https://test-gig.herokuapp.com/api/v1/crowdfunding/ipo/', items)
    .then(response =>{
    console.log(response.data);
    })
  return (
    <>
    <Navbar/>
     <div className="dashboard__container__container">
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
                                {/* <tr>
                                    <td>Eeo 1</td>
                                    <td></td>
                                    <td></td>
                                    <td>{transactions.previous}</td>
                                    <td>{transactions.result}%</td>
                                    <td><h6 className="completed">Completed</h6></td>
                                </tr> */}
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
    </>
  );
}
