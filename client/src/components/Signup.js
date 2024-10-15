import React, { useState } from 'react';
import './css/index.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setSuccessMessage('Signed up successfully!');
        navigate('/signin'); // Redirect to signin after successful signup
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error signing up.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='signup-container'>
      <h1 className="signup-title">Create an Account</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label className="signup-label">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="signup-input"
          placeholder="Enter your name"
          required
        />
        <label className="signup-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="signup-input"
          placeholder="Enter your email"
          required
        />
        <label className="signup-label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="signup-input"
          placeholder="Enter your password"
          required
        />
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <Link to="/signin" className="signup-link">Already have an account? Sign in</Link>
    </div>
  );
};

export default Signup;
