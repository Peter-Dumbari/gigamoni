import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ".././pages/Dashboard.css";
import "../pages/startbbing.css";
import NairaSign from '../assets/nairasign.png';
import Navbar from "../components/Navbar";
import axios from "axios";
import Loaders2 from "../components/loaders/Loaders2";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'



export default function CreatedIpos() {
  const Notifier = localStorage.getItem('verified')

const [loading, setLoading] = useState(false)
const[data, setData] =  useState([]);
const access = JSON.parse(localStorage.getItem('tokens'));
const navigate = useNavigate();

useEffect(()=>{
  setLoading(true)
  let items = {headers: {"Authorization": "Token "  +    access}}
axios.get('https://test-gig.herokuapp.com/api/v1/crowdfunding/ipo/', items)
.then(response =>{
  setData(response.data.results)
  console.warn(response.data.results)
  setLoading(false)

  if (response.data.results.length === 0){
    navigate('/emptystartbidding')
    // console.log("never end")
  }
})

.catch(error =>{
  // console.log(error);
})
}, [])

  return (
        <>
        <Navbar/>
        {Notifier === 'NOT YET VERIFIED'? swal({
              title: "Account Not yet Verified",
              text: "Verify to get access this page",
              icon: "warning",
            }).then(function() {
              window.location = "/dashboard";
          }) :
          <div className="dashboard__container__container">
          <div className="startbbing__container">
            <div className="startbidding__header">
              <h2>Created IPO</h2>
              <h5>Choose from the list of available assets</h5>
            </div> 
            { loading ? <Loaders2/> : null}
           <div className="cards">
             {data.map((item, index) =>
               <div className="startbidding__card" key={index}>
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
          </div>
          </div>
          }
        </>
  );
}
