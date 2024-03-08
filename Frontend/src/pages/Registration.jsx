import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';
import '../style/registration.css'

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: ""  
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(Validation(formData));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      axios.post('http://localhost:8081/customer/register', formData).then((response => {
        console.log(response);
        console.log(response.data);
        if (response.data.status) {
          sessionStorage.setItem('customerId', response.data.customerId);
          console.log(response.data.messageIfAny)
          setFormData({ name: "", email: "", gender: "", city: "", state: "", password: "", confirmPassword: "" })
          if (formData.value !== "") {
            navigate('/Login')
          } else {
            navigate('/Registration')
          }
        } else {
          // setErrorMessage(response.data.messageIfAny);
        }
      }))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='registerpage'>
    <div className="container">
      <div className="row ">
        <div className="col-md-6 offset-md-3">
          <div className="card" style={{ width: '30rem', height:'46rem'}}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registration Page</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    required
                  />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    required
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender:</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" id="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                    id="city"
                    required
                  />
                  {errors.city && <p className="text-danger">{errors.city}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="state" className="form-label">State:</label>
                  <input
                    type="tel"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-control"
                    id="state"
                    required
                  />
                  {errors.state && <p className="text-danger">{errors.state}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                    required
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    id="confirmPassword"
                    required
                  />
                  {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Registration;
