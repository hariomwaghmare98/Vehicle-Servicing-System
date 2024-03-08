// // src/LoginPage.js
// import React, { useState } from 'react';
// import '../style/login.css'; // Add this for styling
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Validation from './Validation';

// const Login= () => {

//   const navigate=useNavigate();
 
//   const[formData,setFormData]=useState({email:"",password:""});
//   const [errors,setErrors]=useState({})

//   const handleChange=(e)=>
//   {
//       setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
//       setErrors(Validation(formData));
//   }  

//   const handleSubmit=async(e)=>
//   {
//    e.preventDefault();         //it will stop the page to reload.
//    //setErrors(Validation(formData));
//     try
//      {
//       axios.post('http://localhost:8081/customer/login', formData).then((response => {
//         console.log(response);
//         console.log(response.data);
//         if(response.data.status) {
//             sessionStorage.setItem('customerId', response.data.customerId);
//             console.log(response.data.customerId);
//            // history.push('/confirmation')
           
//            console.log(response.data.messageIfAny)
//            setFormData({email:"",password:""})
//            navigate('/privatecustomer')
//         }
//         else {
//            console.log(response.data.messageIfAny)
//         }
//     }))
//     } catch (error)
//      {
//           console.log(error);
//     }
//   }


//   return (
//     <div className='login'>
//         <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//             <label>
//             Email:
//             <input
//             name='email'
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
            
//             </label>
//             {console.log(errors.email)}
//             {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
//             <br />
//             {console.log(errors.email)}
//             <label>
//             Password:
//             <input
//             name='password'
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//             />
            
//             </label>
//             {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
//             <br />
//             <div className='text-center'>
//             <button type="submit" >
//             Customer-Login
//             </button>
//             </div>
//         </form>
//         </div>
//     </div>
//   );
// };

// export default Login;
// src/LoginPage.js


import React, { useState } from 'react';
import '../style/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors(Validation(formData));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await axios.post('http://localhost:8081/customer/login', formData);
            console.log(response);
            console.log(response.data);
            if (response.data.status) {
                sessionStorage.setItem('customerId', response.data.customerId);
                console.log(response.data.customerId);
                console.log(response.data.messageIfAny);
                setFormData({ email: "", password: "" });

                // Storing login data in local storage
                localStorage.setItem('loggedInUser', JSON.stringify(formData));

                navigate('/privatecustomer');
            } else {
                console.log(response.data.messageIfAny);
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
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    <br />
                    <div className='text-center'>
                        <button type="submit">
                            Customer-Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
