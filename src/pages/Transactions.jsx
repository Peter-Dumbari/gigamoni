import React, { useState, useEffect } from "react";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import NairaSign from "../assets/nairasign.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import swal from 'sweetalert'


export default function DashBoard() {
    const Notifier = localStorage.getItem('verified')
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
    {Notifier ===  'NOT YET VERIFIED'? 
           swal({
              title: "Account Not yet Verified",
              text: "Verify to get access this page",
              icon: "warning",
            }).then(function() {
              window.location = "/dashboard";
          }) : 
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
                            <input type="search" className="form-control" placeholder="Search" rel="search"/>
                          </div>
                      </div>   
                            <div className="transactions__table">
                            <table className="table">
                                <tr>
                                    <th scope="col">IPO ID</th>
                                    <th scope="col">Asset Amount</th>
                                    <th scope="col">Repay Amount</th>  
                                    <th scope="col">Amount Received</th>  
                                    <th scope="col">Status</th>
                                </tr>
                            { data.map((items)=>
                                <tr>
                                    <td >{items.ipo_id}</td>
                                    <td>{items.asset_amount}</td>
                                    <td>{items.repay_amount}</td>
                                    <td>{items.amount_received}</td>
                                    <td><h6 className="completed">{items.status}</h6></td>
                                </tr>
                                
                            )}
                            </table>
                        </div>
                            
            
                  </div>
                  
              </div>
          </div>
      </div>}
     
    </>
  );
}
