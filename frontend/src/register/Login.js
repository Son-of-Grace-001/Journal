import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect user)
        setLoggedIn(true);
      } else {
        // Handle failed login (e.g., display error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loggedIn) {
    // Redirect to login page after successful registration
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className=" form-div ">
      <form onSubmit={handleSubmit}>
        <div className='grid'>
          <button className='google'>Login with Google</button>
          <button className='facebook'>Login with Facebook</button>
          <button>Login with Apple</button>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email account'
            value={username} onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" 
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p className='go'> Do not have an account ? pls click <span><Link to='/signup'>here</Link></span> to signup</p>
      </form>
    </div>
  )
}