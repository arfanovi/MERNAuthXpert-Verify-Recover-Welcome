import React, { useState } from 'react';
import './css/index.css';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Save token to localStorage
        setSuccessMessage('Signed in successfully!');
        navigate('/dashboard'); // Redirect to protected route
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error signing in.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className='signin-container'>
      <h1 className="signin-title">Sign In</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label className="signin-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="signin-input"
          placeholder="Enter your email"
          required
        />
        <label className="signin-label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="signin-input"
          placeholder="Enter your password"
          required
        />
        <button type="submit" className="signin-button">Sign In</button>
      </form>
      <Link to="/signup" className="signin-link">Don't have an account? Sign up</Link>
      <Link to="/reset-password">Forgot password?</Link>

    </div>
  );
};

export default Signin;
