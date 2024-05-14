import React from 'react'
import log from './log.jpeg'
import './Footer.css'
import {Link} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="other-footer">
          <div className="top-footer">
            <img className="footer-logo" src={log} alt="logo"/>
          </div>
          <div className="footer-1">
            <a className='hey' href='/'>Home</a>
            <a className='hey' href='/'>About Us</a>
            <a className='hey' href='#contact'>Contact Us</a>
            {/* <a href='/'>Contact Us</a> */}
            <Link className='hey' to='/login'>Login</Link>
            <Link className='hey' to='/signup'>Sign Up</Link>
          </div>
          <div className="footer-2">
            <a className='hey' href='/'>Terms & Condition</a>
            <a className='hey' href='/'>Privacy</a>
            <a className='hey' href='/'>Our Team</a>
            <a className='hey' href='/'>Our Partner</a>
            <a className='hey' href='/'>FAQs</a>
          </div>
          <div className="footer-3">
            <div>
              <h5 className='ph'>Phone:</h5>
              <a className='hey' href='tel:+2349039672814'>09039672814</a>
            </div>
            <div>
              <h5 className='ph'>Email:</h5>
              <a className='hey' href='mailto:horlharmighty2000@gmail.com'>horlharmighty2000@gmail.com</a>
            </div>
            <div className='ok'>
              <div className='fb-cont'>
                <FaFacebook className='fb'/>
              </div>
              <div className='fb-cont'>
                <FaTwitter className='fb'/>
              </div>
              <div className='fb-cont'>
                <FaInstagram className='fb'/>
              </div>
              <div className='fb-cont'>
                <FaLinkedin className='fb'/>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}