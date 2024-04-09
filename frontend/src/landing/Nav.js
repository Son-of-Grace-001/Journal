import React from 'react'
import au from './au.png'
import './Header.css'
import {Link} from 'react-router-dom'

function Nav () {
  return (
    <div>
      <div className='header'>
        <div className='left'>
          <div className='logo'>
            <a href='/'><img className='logo-img' src={au} alt='au logo'/></a>
          </div>

          <div className='text'>
            <h3 className='literature'>
              Literature Review Repository
            </h3>
          </div>
        </div>


        <div className='right'>
          <ul id="list" className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
            </li>
            <li className="nav-item">
              <Link id="upload" className="nav-link" to="/upload">Upload</Link>
            </li>
          </ul>
          <input className='search' type="search" placeholder="Enter the name of journal"/>
          <div className='btn-div'>
            <Link to="/">
              <button id='btn' className='btn btn-primary'>logout</button>
            </Link>
            
          </div>
        </div>
       </div>
    </div>
  )
}

export default Nav;