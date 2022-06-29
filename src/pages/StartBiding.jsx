import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import NairaSign from '../assets/nairasign.png';
import Navbar from "../components/Navbar";
import axios from "axios";
import Loaders2 from "../components/loaders/Loaders2";



export default function CreatedIpos() {
const [loading, setLoading] = useState(false)
const[data, setData] =  useState([]);
const access = JSON.parse(localStorage.getItem('tokens'));

useEffect(()=>{
  setLoading(true)
  let items = {headers: {"Authorization": "Token "  +    access}}
axios.get('https://test-gig.herokuapp.com/api/v1/crowdfunding/ipo/', items)
.then(response =>{
  setData(response.data.results)
  // console.log(response.data.results)
  setLoading(false)
})

.catch(error =>{
  // console.log(error);
})
}, [])

  return (
        <>
        <Navbar/>
          <div className="dashboard__container__container">
          <div className="startbbing__container">
            <div className="startbidding__header">
              <h2>Created IPO</h2>
              <h5>Choose from the list of available assets</h5>
            </div> 
            { loading ? <Loaders2/> : null}
           <div className="cards">
             {data.map((item) =>
               <div className="startbidding__card">
               <img src={NairaSign} alt=""  width="100px" height="100px" className="startbbing__card__image" />
               <div className="card__text">
                   <h3>{item.asset_title}</h3>
                 <p>
                   {item.asset_descr}
                 </p>
                 <Link to='/startbiddings' style={{textDecortion: 'none'}}><button className="card__button"> view more</button></Link>
               </div>
               <h4>{item.po_value}</h4>
             </div>
            )
        }
            </div>
    
            <p className="clear_all_link"><Link to="/emptystartbidding">X</Link></p>
          </div>
          </div>
        </>
  );
}
