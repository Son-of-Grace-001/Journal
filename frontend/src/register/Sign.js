import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Login.css';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Handle successful registration (e.g., display success message)
        alert ('Registration Successful')
        setRedirectToLogin(true);
      } else {
        // Handle failed registration (e.g., display error message)
        console.error('Registration failed');
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  if (redirectToLogin) {
    // Redirect to login page after successful registration
    return <Navigate to="/login" />;
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit} className='form'>
      {error && <p className="error-message">{error}</p>}
        <h2 className="signup">Sign Up Form</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder='Enter your email account'
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" 
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter your username" 
            value={username} onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-bttn">Submit</button>
        <p className='go'> Already have an account ? Please click <span><Link className='here' to='/login'>here</Link></span> to login</p>
      </form>
    </div>
  );
};