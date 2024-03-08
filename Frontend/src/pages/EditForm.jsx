import React, { useEffect, useState } from 'react';
import './Registration.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function EditForm() 
{
    const[formData,setFormData]=useState({name:"",email:"",gender:"",state:"",password:"",city:""});

    const params=useParams(); 

    const handleChange=(e)=>
    {
        setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
    }  
  
    const handleSubmit=async(e)=>
      {
       e.preventDefault();         //it will stop the page to reload.
        try
         {
          axios.post("http://localhost:8081/customer/update", formData).then((response => {
            console.log(response);
            console.log(response.data);
            if(response.data.status) {
              //  sessionStorage.setItem('customerId', response.data.customerId);
               // history.push('/confirmation')
               console.log(response.data.messageIfAny)
               setFormData({name:"",email:"",gender:"",state:"",password:"",city:""})
            }
            else {
                console.log(e)
            }
        }))
        } catch (error)
         {
              console.log(error);
        }
      }


      
    useEffect(() => {
      axios.get(`http://localhost:8081/customer/fetch/${params.id}`).then((response => {
          setFormData(response.data);
      }))
  }, [params.id])


  
  return (
  

    <div className="registration-container">
      <h2>Edit Your Details</h2>
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
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="tel"
            name="state"
            value={formData.state}
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
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

  )
}
