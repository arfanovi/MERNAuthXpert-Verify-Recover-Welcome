import React, { useEffect, useState } from 'react';
import './css/index.css';

const Protected = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/api/users/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage('You are not authorized to access this page.');
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className='protected-container'>
      <h1>Protected Route</h1>
      <p>{message}</p>
    </div>
  );
};

export default Protected;
