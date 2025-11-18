import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signuptee = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", });

    const navigate = useNavigate();

    const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password ) {
        alert("Please fill in all input fields");
            return;
    }

    axios .post("https://back-schema.onrender.com/user/signup", formData)
        .then((res) => {
        alert("Signup successful! Please login.");

        setFormData({ firstName: "", lastName: "", email: "", password: "", });

        navigate("/signintee");
        })
        .catch((err) => {
        console.error("Signup error:", err);
        alert("Signup failed, try again");
        });
    };

    return (
    <>
        <div>
        <h3>Create Your Account</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="first name" />

            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="last name" />

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />

            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />

            <button type="submit">Sign up</button>
        </form>
        </div>
    </>
    );
};

export default Signuptee;

// import React, {useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const signuptee = () => {

//     const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '' })
//     const navigate = useNavigate();

//     const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

//         const handleSubmit = async (e) => {
//             e.preventDefault();

//             axios.post('http://localhost:3000/user/signup', formData)
//             .then((res) =>{
//                 alert('Signup successful! Please login.')
//                 navigate('/signintee')
//             })
//             .catch((err)=>{
//                 console.error('Signup error:', err)
//                 alert('Signup failed, try again')
//             })
//     //             try {
//     //         const res = await fetch("http://localhost:3000/api/signuptee", {
//     //             method: "POST",
//     //                 headers: { "Content-Type": "application/json" },
//     //     body: JSON.stringify(formData),
//     //     });
//     //         const data = await res.json();
//     //     setMessage(data.message);
//     // } catch (err) {
//     //     setMessage("Server error");
//     // }
//   };
//   return (
//     <>
//     <div>
//         <h3>Create Your Account</h3>
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='first name'/>
//             <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='last name'/>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='email'/>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='password'/>
//             <button type='submit'>Sign up</button>
//         </form>
//     </div>
//     </>
//   )
// }

// export default signuptee
