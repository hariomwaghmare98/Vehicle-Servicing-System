import React, { useState } from 'react';
import '../../style/registration.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ServiceCenter = () => {

    

  const navigate=useNavigate();
  const[formData,setFormData]=useState({centre_name:"",email:"",password:"",street:"",city:"",contact_number:"",PaymentOption:"",openingTime:"",closingTime:""});

  const handleChange=(e)=>
  {
      setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
  }  

  const handleSubmit=async(e)=>
    {
     e.preventDefault();         //it will stop the page to reload.
      try
       {
        axios.post('http://localhost:8081/service_center/register', formData).then((response => {
          console.log(response);
          console.log(response.data);
          if(response.data.status) {
             // sessionStorage.setItem('technicianId', response.data.customerId);
             // history.push('/confirmation')
             console.log(response.data.messageIfAny)
             setFormData({centre_name:"",email:"",street:"",city:"",contact_number:"",PaymentOption:"",openingTime:"",closingTime:""})
             if(formData!=null)
             {
              navigate('/Login')
             }
             else{
              navigate('/Registration')
             }
             
          }
          else {
              // setErrorMessage(response.data.messageIfAny);
             console.log( response.data.messageIfAny());

          }
      }))
      } catch (error)
       {
            console.log(error);
      }
    }

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Center_Name:</label>
          <input
            type="text"
            name="centre_name"
            
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
           
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
           
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            name="street"
           
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
           
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contact_Number:</label>
          <input
            type="long"
            name="contact_number"
           
            onChange={handleChange}
          />
        </div>

       

         <div className="form-group">
          <label>Payment_Option:</label>
          <input
            type="text"
            name="PaymentOption"
            value={formData.PaymentOption}
            onChange={handleChange}
          />
        </div> 
{/* 
<div className="radiobutton">
              <label htmlFor="paymentOption">Furnished</label><div></div>
              <input type="radio" name="paymentOption" onChange={handleChange} value="CASH" />CASH
              <input type="radio" name="paymentOption" onChange={handleChange} value="CREDIT_CARD" /> GOOGLE_PAY
              <input type="radio" name="paymentOption"  onChange={handleChange} value=" DEBIT_CARD" /> OTHER
            </div> */}

        <div className="form-group">
          <label>Opening_Time:</label>
          <input
            type="text"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Closing_Time:</label>
          <input
            type="text"
            name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServiceCenter;
