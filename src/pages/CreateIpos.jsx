import React, {useState} from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../pages/CreateIpos.css";
import "../App.css";
import Loaders from "../components/loaders/Loaders";
import swal from "sweetalert";
import { useNavigate } from "react-router";

 

function CreateIpos() {
  const [assettitle, setAssettitle] = useState('')
  const [assetdescr, setAssetdescr] = useState('')
  const [assetamount, setAssetamount] = useState('')
  const [povalue, setPovalue] = useState('')
  const [po, setPo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');
  const [messenger, setMessenger] = useState('');
  const navigate = useNavigate();
   


  const Notifier = localStorage.getItem('verified')

  const onChangeFile = event => {
    let file = event.target.files[0];
    console.log(file.type)
   
 if (!file.type.includes('jpeg', 'jpg', 'image')) {
      setError("Image file not supported. You must use .jpeg or  .jpg ");
      return false;
   }
   if (file.size > 2e6) {
     setError("Image Size too big");
   }
   else{
    setError(null)
    setPo(file)
   }
  };


    const handleSubmit =  (e) =>{
      e.preventDefault();
      setLoading(true)
      const access = JSON.parse(localStorage.getItem('tokens'));

      
      let items = { }

         items = new FormData();
        items.append("po", po);
        items.append("po_value", povalue)
        items.append("asset_descr", assetdescr)
        items.append("asset_amount", assetamount)
        items.append("asset_title", assettitle)
        
        console.log (items);
        const info = {headers: {"Authorization": "Token "+access}}
        console.log(info);
        axios.post('https://test-gig.herokuapp.com/api/v1/crowdfunding/ipo/', items, info)
        .then(response =>{
            console.log(response)
            setLoading(false)
          if(response.statusText === 'OK'){
            navigate("/startbiding")
          }
          
        })

        .catch(error =>{
          console.log(error.response);
          setLoading(false)
        })

      
    }

  return (
    <>
      <Navbar />
      {Notifier === 'NOT YET VERIFIED'? swal({
              title: "Account Not yet verified",
              text: "Verify to be able to create IPO",
              icon: "warning",
            })
            .then(function() {
              window.location = "/dashboard";
          }) :  <div className="dashboard__container__container">
          <div className="create__ipos__container">
            <h2>Create your IPO</h2>
            <h5>What do you want to do today?</h5>
            <form className="create__ipos__form" onSubmit={handleSubmit} method="post" encType="multipart/FormData" >
              <div className="input__first__line">
                <input
                  type="text"
                  placeholder="Asset Title"
                  className="form-control"
                  onChange={(e) => {setAssettitle(e.target.value)}}
                  required
                />
                <input
                  type="number"
                  placeholder="Asset amount"
                  className="form-control"
                  onChange={(e) => {setAssetamount(e.target.value)}}
                  required
                />
              </div>
              <div className="input__second__line">
                <div className="textarea__container">
                  <textarea
                    type="textarea"
                    cols="30"
                    rows="7"
                    placeholder="Asset Description"
                    className="form-control"
                    onChange={(e) => {setAssetdescr(e.target.value)}}
                    required
                  />
                </div>
                <div className="second__input">
                  <input type="number" className="form-control" placeholder="PO Value" onChange={e => setPovalue(e.target.value)} required/>
                  <label htmlFor="">Select your PO image not more than 2MB:</label>
                  <div className="error__notifier">{error}</div>
                  <input type="file" 
                  accept="file" 
                  className="form-control" 
                  onChange= {onChangeFile} 
                  required/>
                </div>
              </div>
              
              {loading ? <Loaders/> : <button className="btn btn-success">Create</button>}
            </form>
          </div>
        </div>}
    </>
  );
}

export default CreateIpos;
