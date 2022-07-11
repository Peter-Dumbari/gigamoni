import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import undraw_finance from "../../assets/finance_image.svg";
import gigmaoni from "../../assets/gigamoni.svg"
import swal from 'sweetalert';
import axios from 'axios';
import Loaders from '../../components/loaders/Loaders';



export default function CompanyVerification() {
  const [utilityBill, setUtilityBil] = useState('')
  const [referenceLetter, setReferenceLetter] = useState('')
  const [contactPersonName, setContactPersonName] = useState('')
  const [contact_person_email, setContact_person_email] = useState('')
  const [contactPersonNumber, setContactPersonNumber] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const [err, setErr] = useState("")
  const [num, setNum] =  useState("")



  const _validateNumber = (e) =>{
    const Number = (e.target.value);
    if(!Number){
      setNum("Number is required")
    }
    else if(Number.length < 11){
      setNum("Numbers most be up to 11 digits")
    }
    else if(Number.length > 11){
      setNum("Numbers most not be morethan 11 digits")
    }
    else{
      setNum(null)
      setContactPersonNumber(Number)
    }
  }

  const onChangeFile = event => {
    let file = event.target.files[0];
   
 if (file.type.match(/\.(jpeg||jpg)$/)) {
      setError("File does not support. jpeg format only");
      return false;
   }
   else if (file.size > 2e6) {
     setError("Image Size should not be morethan 2MB");
   }
   else{
    setError(null)
    setUtilityBil(file)

   }
  };

  const _onChangeFile = event => {
    let file = event.target.files[0];
   
 if (file.type.match(/\.(jpeg||jpg)$/)) {
      setErr("File does not support. jpeg format only ");
      return false;
   }
   else if (file.size > 2e6) {
     setErr("Image size should not be morethan 2MB")
   }
   else{
    setErr(null)
    setReferenceLetter(file)

   }
  };

  const HandleSubmit= (e)=>{
    setLoading(true)
    e.preventDefault();

    

    let items = {}
    const Email = localStorage.getItem('email')
    
    items =  new FormData()

   items.append('utility_bill', utilityBill)
   items.append('reference_letter', referenceLetter)
   items.append('contact_person_name', contactPersonName)
   items.append('contact_person_number', contactPersonNumber)
   items.append('contact_person_email', contact_person_email)

    console.log(items)

     axios
      .post(
       `https://test-gig.herokuapp.com/api/v1/accounts/register/company1/`, items, 
       { params: 
        {
        email:Email,
        }} 
      )
       .then(response =>{
        if(response.statusText === 'OK'){
          setLoading(false);
            swal({
              title: "Account Created Successfully!",
              text: "Check your mail an OTP have been sent!",
              icon: "success",
            })  .then(function() {
              window.location = "verifyemail";
          }) 
        }
        console.log(response)
      })
      .catch(error=>{
        setLoading(false)
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
                    accept='image'
                    id="companyname"
                    className="form-control"
                    placeholder="Utility bill "
                    onChange={onChangeFile} 
                    required
                  />      
                  <div className='error__notifier'>{error}</div>
                  <br />
                   
                   <label>Upload your Refrence Letter</label>
                  <input
                    type="file"
                    accept='image'
                    id="companyaddress"
                    className="form-control"
                    placeholder="Reference letter "
                    onChange={_onChangeFile} 
                    required
                    />
                    <div className='error__notifier'>{err}</div>
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
                  onChange={(e)=>{setContact_person_email(e.target.value)}} 
                  required
                   />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contact person number"
                    onChange={_validateNumber} 
                    required
                    />     
                    <div className="error__notifier">{num}</div>             
                    <br />
                  <p style={{ float: "right" }}>
                    <Link to="/login" className="login__link">Skip</Link>{" "}
                  </p>
                  <br /> <br />
                  {loading? <Loaders/> : <button className='btn btn-success' onClick={HandleSubmit}>Continue</button>}
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
    
