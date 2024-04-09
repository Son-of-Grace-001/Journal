import React, { useState } from 'react';
// import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import '../register/Login.css';

export const Upload = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [folder, setFolder] = useState('');
  const [aim, setAim] = useState('');
  const [objective, setObjective] = useState('');
  const [methodology, setMethodology] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/upload/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, title, image, folder, aim, objective, methodology }),
      });

      if (response.ok) {
        // Handle successful registration (e.g., display success message)
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
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="form-div">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} action="http://localhost:8000/api/upload" method="post" enctype="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Lastname</label>
          <input type="text" className="form-control" id="email" placeholder='Enter your lastname'
            value={lastname} onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Firstname</label>
          <input type="text" className="form-control" id="password" placeholder="Enter your firstname" 
            value={firstname} onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Title</label>
          <input type="text" className="form-control" id="username" placeholder="Enter your project title" 
            value={title} onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Journal</label>
          <input type="file" className="form-control" id="username" placeholder="Enter your project file" 
            value={folder} onChange={(e) => setFolder(e.target.value)}  accept=".pdf, .doc, .docx"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Image</label>
          <input type="file" className="form-control" id="username" placeholder="Enter journal front cover" 
            value={image} onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Project Aim</label>
          <input type="text" className="form-control" id="username" placeholder="Enter journal front cover" 
            value={aim} onChange={(e) => setAim(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Project Objective</label>
          <input type="text" className="form-control" id="username" placeholder="Enter journal front cover" 
            value={objective} onChange={(e) => setObjective(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Project Methodology</label>
          <input type="text" className="form-control" id="username" placeholder="Enter journal front cover" 
            value={methodology} onChange={(e) => setMethodology(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {/* <p className='go'> Already have an account ? Please click <span><Link to='/login'>here</Link></span> to login</p> */}
      </form>
    </div>
  );
};
