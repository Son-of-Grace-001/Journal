import {Link} from 'react-router-dom'
import React from 'react'
import au from './au.png'
import './Header.css'

export const Header = () => {
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
          <div className='btn-div'>
            <Link to="/login">
              <button id='btn' className='btn btn-primary'>login</button>
            </Link>
            
            <Link to='/signup'>
              <button className='btn btn-light '>sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
