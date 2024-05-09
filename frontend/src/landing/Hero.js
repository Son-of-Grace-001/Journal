import React from 'react'
import './Hero.css'
import hero from './hero2.webp'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-bg' style={{backgroundImage: `url(${hero})`}}>
          <p className='hero-heads'>
            Explore, Review, and Share Journals <br/> Empowering Your Research Experience!
          </p>

          <p className='hero-text'>
            Dive into a world of knowledge. Explore our extensive <br/> 
            collection of journals covering a myriad of topics. <br/>  
            Download articles to deepen your understanding, share <br/>
            your insights through reviews, and contribute your own <br/>
            work to enrich the academic community.
          </p>

          <Link to='/signup'>
            <button className='hero-button'>Get Started</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}
