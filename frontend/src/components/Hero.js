import React from 'react';
import './Hero.css';
import images from './images.jpeg';
import {Link} from 'react-router-dom';

export const Hero = () => {
  return (
    <div>
      <div className='heroo' id='heroo'>
        <div className='leftt'>
          <h3 className='hero-head'>
            Explore, Review, and Share Journals <br/> Empowering Your Research Experience!
          </h3>
          <p className='hero-text'>
            Dive into a world of knowledge. Explore our extensive 
            collection of journals covering a myriad of topics. 
            Download articles to deepen your understanding, share 
            your insights through reviews, and contribute your own 
            work to enrich the academic community. Your voice matters 
            in shaping the future of research. Join us in fostering 
            innovation and collaboration in every field.
          </p>
          <Link to='/signup'>
            <button id='btnn' className='btn btn-primary'>Get Started Now</button>
          </Link>
        </div>

        <div className='rightt'>
          <img className='img-hero' src={images} alt='hero'/>
        </div>
      </div>
    </div>
  )
}
