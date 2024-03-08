import React, { useState } from 'react';
import '../../style/ServiceAppointment.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Validation from '../../pages/Validation';

const ServiceAppointment = () => {

  const navigate=useNavigate();
  const[formData,setFormData]=useState({name:"",email:"",vehicleName:"",date:"",time:"",payment_mode:"",serviceDescription:""});
  const [errors,setErrors]=useState({})

  const handleChange=(e)=>
  {
      setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
      setErrors(Validation(formData));
  }  

  const handleSubmit=async(e)=>
    {
     e.preventDefault();         //it will stop the page to reload.
    // setErrors(Validation(formData));
      try
       {
        axios.post('http://localhost:8081/appointment/register', formData).then((response => {
          //console.log(response);
          navigate('/');
          console.log(response.data);
          if(response.data.status) {
              //sessionStorage.setItem('customerId', response.data.customerId);
             // history.push('/confirmation')
             console.log(response.data.messageIfAny)
             setFormData({name:"",email:"",vehicleName:"",date:"",time:"",payment_mode:"",serviceDescription:""})
             if(formData.value !=="")
             {
              navigate('/')
             }
             else{
              navigate('/Registration')
             }
             
          }
          else {
              // setErrorMessage(response.data.messageIfAny);
          }
      }))
      } catch (error)
       {
            console.log(error);
      }
    }

  return (<section>
    <h2>Service Appointment</h2>
    <div className="registration-container">
     
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

        <div className="form-group">
          <label>vehicleName:</label>
          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            required
          />
        </div>
        {/* {errors.name && <p style={{color:"red"}}>{errors.name}</p>} */}

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
       

        

        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            requiredp
          />
        </div>
        {/* {errors.state && <p style={{color:"red"}}>{errors.state}</p>} */}

        <div className="form-group">
          <label>payment_mode:</label>
          <input
            type="text"
            name="payment_mode"
            value={formData.payment_mode}
            onChange={handleChange}
            required
          />
        </div>
        {/* {errors.password && <p style={{color:"red"}}>{errors.password}</p>} */}

        <div className="form-group">
          <label>ServiceDescription:</label>
          <input
            type="text"
            name="serviceDescription"
            value={formData.serviceDescription}
            onChange={handleChange}
            required
          />
        </div>
        {/* {errors.city && <p style={{color:"red"}}>{errors.city}</p>} */}

        <button type="submit">Submit</button>
      </form>
    </div>
    </section>
  );
};

export default ServiceAppointment;
