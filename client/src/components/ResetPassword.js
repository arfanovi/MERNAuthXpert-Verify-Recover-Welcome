import React, { useState } from 'react';
import './css/index.css'; // Import your CSS for styling
import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const userData = {
      email,
      newPassword,
    };

    try {
      const response = await fetch('http://localhost:5000/api/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message || 'Password reset successfully.');
        
        // Clear success message after 3 seconds and redirect
        setTimeout(() => {
          navigate('/signin'); // Redirect to sign-in page
        }, 3000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error resetting password.');
        
        // Clear error message after 3 seconds
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error resetting password:', error);
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className='reset-password-container'>
      <h1 className="reset-password-title">Reset Password</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <label className="reset-password-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="reset-password-input"
          placeholder="Enter your email"
          required
        />

        <label className="reset-password-label">New Password</label>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          className="reset-password-input"
          placeholder="Enter your new password"
          required
        />

        <button type="submit" className="reset-password-button">
          Reset Password
        </button>
      </form>

      <Link to="/signin" className="reset-password-link">Already have an account? Sign in</Link>
    </div>
  );
}

export default ResetPassword;
