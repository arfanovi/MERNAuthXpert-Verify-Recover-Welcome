// src/pages/Signup.js
import React, { useState } from 'react';
import './css/index.css'

import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const userData = {
            name,
            email,
            password,
        };
    
        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', userData);
            console.log(response.data); // Handle successful response
        } catch (error) {
            console.error('Error signing up:', error.response.data); // Handle error
        }
    };
    

    return (
        <div className='signup-container'>
            <h1 className="signup-title">Create an Account</h1>
            <label className="signup-label">Name</label>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="signup-input" placeholder="Enter your name" />
            <label className="signup-label">Email</label>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
            type="email" className="signup-input" placeholder="Enter your email" />
            <label className="signup-label">Password</label>
            <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" className="signup-input" placeholder="Enter your password" />
            <button
            onClick={handleSubmit}
            type="submit"
            className="signup-button">Signup</button>
        </div>
    );
}

export default Signup;
