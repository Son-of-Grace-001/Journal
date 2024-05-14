import React, { useState } from 'react';
// import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Upload.css';

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
      let formData = new FormData()
      formData.append("firstname", firstname)
      formData.append("lastname", lastname)
      formData.append("title", title)
      formData.append("image", image)
      formData.append("folder", folder)
      formData.append("aim", aim)
      formData.append("objective", objective)
      formData.append("methodology", methodology)
      const response = await fetch('http://127.0.0.1:8000/api/upload/', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ firstname, lastname, title, image, folder, aim, objective, methodology }),
        body: formData
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
    <div>
      <h3>Upload Form</h3>
      <div className="form-divv">
        <form className='hi' onSubmit={handleSubmit} >
          <div>
            {error && <p className="error-message">{error}</p>}
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
                onChange={(e) => setFolder(e.target.files[0])}  accept=".pdf, .doc, .docx"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Front Image</label>
              <input type="file" className="form-control" id="username" placeholder="Enter journal front cover" 
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>

          <div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Project Aim</label>
              <textarea rows={5} column={10} 
              value={aim} onChange={(e) => setAim (e.target.value)}
              placeholder='Enter project aim'></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Project Objective</label>
              <textarea rows={5} column={10} 
              value={objective} onChange={(e) => setObjective (e.target.value)}
              placeholder='Enter project objective'></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Project Methodology</label>
              <textarea rows={5} column={10} 
              value={methodology} onChange={(e) => setMethodology (e.target.value)}
              placeholder='Enter project methodology'></textarea>
            </div>
          </div>
          <button type="submit" className="btnns">Submit</button>
          {/* <p className='go'> Already have an account ? Please click <span><Link to='/login'>here</Link></span> to login</p> */}
        </form>
      </div>
    </div>
  );
};