import React from 'react'
import logo from './log.jpeg'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  return (
    <div>
      <div className='nav-flex'>
        <div className='nav-left'>
          <div className='nav-logo-div'>
            <img className='logo' src={logo} alt='logo'/>
          </div>
          <div className='nav-name-div'>
            <h3 className='repo'>Repository</h3>
          </div>
        </div>

        <div className='middle'>
          <ul className='nav-option'>
            <a href='/'><li className='nav-items'>Home</li></a>
            <li className='nav-items'><a href='#about'>About Us</a></li>
            <li className='nav-items'><a href='#contact'>Contact Us</a></li>
          </ul>
        </div>

        <div className='nav-right'>
          <div className='nav-login'>
            <Link to='/login' className='login'>
              <button className='button'>Login</button>
            </Link>
          </div>
          <div className='nav-sign'>
            <Link to='/signup'>
              <button className='button2'>Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
