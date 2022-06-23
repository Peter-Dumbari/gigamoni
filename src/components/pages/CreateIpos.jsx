import React, {useState} from "react";
import Navbar from "../Navbar";
import axios from "axios";
import "../pages/CreateIpos.css";
import { useForm } from "react-hook-form";
import "../../App.css";

 

function CreateIpos() {
  const [error, setError] = useState('');
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    

    const handleSubmiting = async (data) =>{
      const access = JSON.parse(localStorage.getItem('tokens'));

      const items = {
            po_value: data.Povalue,
            asset_title: data.AssetTitle,
            asset_descr: data.AssetDesc,
            asset_amount: data.AssetAmount
        }
        console.log(access);
        let info = {headers: { "Authorization": "Bearer " +access}, items}   
        await axios.post('https://test-gig.herokuapp.com/api/v1/crowdfunding/create_ipo/', info )
        .then(response =>{
            console.log(response)
        })

        .catch(error =>{
          console.log(error.response);
          setError(error.response.data.detail)
        })
    }

  return (
    <>
      <Navbar />
      <div className="dashboard__container__container">
        <div className="create__ipos__container">
          <h2>Create your IPO</h2>
          <h5>What do you want to do today?</h5>
          <div className="error__notifier">{error}</div>
          <form className="create__ipos__form" onSubmit={handleSubmit(handleSubmiting)}>
            <div className="input__first__line">
              <input
                type="text"
                placeholder="Asset Title"
                className="form-control"
                {...register("AssetTitle")}
                required
              />
              <input
                type="text"
                placeholder="Asset amount"
                className="form-control"
                {...register("AssetAmount")}
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
                  {...register("AssetDesc")}
                  required
                />
              </div>
              <div className="second__input">
                <input type="text" className="form-control" placeholder="PO Value" {...register("Povalue")} required/>
              </div>
            </div>
            

            <button className="btn btn-success">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateIpos;
