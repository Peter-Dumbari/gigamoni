import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import undraw_finance from "../../assets/finance_image.svg";
import gigmaoni from "../../assets/gigamoni.svg"
import swal from 'sweetalert';
import axios from 'axios';



export default function CompanyVerification() {
  const [utilityBill, setUtilityBil] = useState('')
  const [referenceLetter, setReferenceLetter] = useState('')
  const [contactPersonName, setContactPersonName] = useState('')
  const [contactPersonEmail, setContactPersonEmail] = useState('')
  const [contactPersonNumber, setContactPersonNumber] = useState('')


  const HandleSubmit= async(e)=>{
    e.preventDefault();

    // swal({
    //   title: "Account Created Successfully!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });

    let items = {}

         items = new FormData();
        items.append("utility_bill", utilityBill);
        items.append("reference_letter", referenceLetter)
        items.append("contact_person_name", contactPersonName)
        items.append("contact_person_email", contactPersonEmail)
        items.append("contact_person_number", contactPersonNumber)

        console.log(items);
        await axios
        .post(
         'https://test-gig.herokuapp.com/api/v1/accounts/register/company1/', items)
        .then(response =>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error);
        })
  }

    return (
        <div className="container">
        <div className="headboss"> <img src={gigmaoni}  className="gigalogo"/></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="col-lg-8">
                <h4>Verification</h4>
                <br />
                <div className="userformdiv"><form>
                  <br />
                  <label>Upload your Utility bill</label>
                  <input
                    type="file"
                    accept='jpeg'
                    id="companyname"
                    className="form-control"
                    placeholder="Utility bill "
                    onChange={(e)=>{setUtilityBil(e.target.files[0])}} 
                    required
                  />      
                  <br />
                   
                   <label>Refrence Letter in PDF format</label>
                  <input
                    type="file"
                    accept='pdf'
                    id="companyaddress"
                    className="form-control"
                    placeholder="Reference letter "
                    onChange={(e)=>{setReferenceLetter(e.target.files[0])}} 
                    required
                    />
                    <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact person name"
                    onChange={(e)=>{setContactPersonName(e.target.value)}} 
                    required
                   />
                  <br />
                  <input type="text" 
                  className="form-control" 
                  placeholder="Contact person email"
                  onChange={(e)=>{setContactPersonEmail(e.target.value)}} 
                  required
                   />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contact person number"
                    onChange={(e)=>{setContactPersonNumber(e.target.value)}} 
                    required
                    />                  
                    <br />
                  <p style={{ float: "right" }}>
                    <Link to="/login" className="login__link">Skip</Link>{" "}
                  </p>
                  <br /> <br />
                  <button className='btn btn-success' onClick={HandleSubmit}>Continue</button>
                </form></div>
              </div>
            </div>
            <div className="col-lg-6">
              <br />
              <img
                src={undraw_finance}
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
    
