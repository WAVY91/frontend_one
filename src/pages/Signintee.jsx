import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signintee = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
        alert("Please fill in all input fields");
        return;
    }

    axios.post("http://localhost:3000/user/signin", formData)
        .then((res) => {
        alert("Login successful!");

        localStorage.setItem('token', res.data.token)

        localStorage.setItem('user', JSON.stringify(res.data.user))

        setFormData({ email: "", password: "" });

        navigate("/dashboardtee");
        })
        .catch((err) => {
        alert("Invalid credentials. Try again.");
        });
    };

    return (
    <>
        <div>
        <h3>Welcome Back</h3>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />
            <button type="submit">Sign in</button>
        </form>
        </div>
    </>
    );
};

export default Signintee;

// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Signintee = () => {

//     const [formData, setFormData] = useState({email: '', password: ''})
//     // const [message, setMessage] = useState('')
//     const navigate = useNavigate();

//     const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         axios.post('http://localhost:3000/user/signin', formData)
//         .then((res)=>{
//             alert('Login successful!')
//             navigate('/dashboardtee')
//         })
//         .catch((err)=>{
//             alert('Invalid credentials entry', err)
//         })
//     }

//   return (
//     <>
//     <div>
//         <h3>Welcome Back</h3>
//         <form action="" onSubmit={handleSubmit}>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='email'/>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
//             <button type='submit'>Sign in</button>
//         </form>
//         {/* <div>
//             {message && <p>{message}</p>}
//         </div> */}
//     </div>
//     </>
//   )
// }

// export default Signintee
