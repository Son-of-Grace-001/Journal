import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='cont11'>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link px-2 text-muted">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Privacy</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Term</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Help</a></li>
          </ul>
          <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
    </div>
  )
}
