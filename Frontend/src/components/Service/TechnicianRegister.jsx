import React, { useState } from 'react';
import '../../style/registration.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TechnicianRegister = () => {

  const navigate=useNavigate();
  const[formData,setFormData]=useState({name:"",email:"",password:"",experience:"",contact_number:"",skills:""});

  const handleChange=(e)=>
  {
      setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
  }  

  const handleSubmit=async(e)=>
    {
     e.preventDefault();         //it will stop the page to reload.
      try
       {
        axios.post('http://localhost:8081/technician/register', formData).then((response => {
          console.log(response);
          console.log(response.data);
          if(response.data.status) {
             // sessionStorage.setItem('technicianId', response.data.customerId);
             // history.push('/confirmation')
             console.log(response.data.messageIfAny)
             setFormData({name:"",email:"",password:"",experience:"",contact_number:"",skills:""})
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
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Experience:</label>
          <input
            type="int"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contact_Number:</label>
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
          />
        </div>

       

        <div className="form-group">
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TechnicianRegister;
