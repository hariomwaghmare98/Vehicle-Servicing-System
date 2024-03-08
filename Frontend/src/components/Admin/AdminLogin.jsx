
import React, { useState } from 'react';
import '../../style/login.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Validation from '../../pages/Validation';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(Validation(formData));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(formData));
    try {
      const response = await axios.post('http://localhost:8081/admin/login', formData);
      console.log(response);
      console.log(response.data);
      if (response.data.status) {
        sessionStorage.setItem('adminId', response.data.adminId);
        localStorage.setItem('loggedInUser', JSON.stringify(formData)); // Storing admin login data
        console.log(response.data.adminId);
        console.log(response.data.messageIfAny);
        setFormData({ email: "", password: "" });
        navigate("/privateadmin");
      } else {
        // setErrorMessage(response.data.messageIfAny);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              name='email'
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <br />
          <label>
            Password:
            <input
              name='password'
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <br />
          <div className='text-center'>
            <button type="submit" >
              Admin-Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
