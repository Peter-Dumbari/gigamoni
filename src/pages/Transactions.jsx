import React, { useState, useEffect } from "react";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import NairaSign from "../assets/nairasign.png";
import Navbar from "../components/Navbar";
import axios from "axios";


export default function DashBoard() {
    const[data, setData] =  useState([]);
    const access = JSON.parse(localStorage.getItem('tokens'));

    useEffect(()=>{
        let items = {headers: {"Authorization": "Token "+access}}
        axios.get('https://test-gig.herokuapp.com/api/v1/crowdfunding/companytrans/', items)
        .then(response =>{
        setData(response.data.results);
        console.log(data)
        })
    }, [])
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
        
                          <div className="search__container">
                              <form>
                              <input type="search" className="form-control" required/>
                              <button className="search__button">search</button>
                              </form>
                          </div>
                      </div>   
                            <div className="transactions__table">
                            <table>
                                <tr>
                                    <th>IPO ID</th>
                                    <th>Asset Amount</th>
                                    <th>Repay Amount</th>  
                                    <th>Amount Received</th>  
                                    <th>Status</th>
                                </tr>
                            { data.map((items)=>
                                <tr>
                                    <td>{items.ipo_id}</td>
                                    <td>{items.asset_amount}</td>
                                    <td>{items.repay_amount}</td>
                                    <td>{items.amount_received}</td>
                                    <td><h6 className="completed">{items.status}</h6></td>
                                </tr>
                                
                            )}
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
