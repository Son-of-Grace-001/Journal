import React from 'react'
import images from './images.jpeg'
import './Review.css'

export const Review = () => {
  return (
    <div className='cont1'>
      <h3 className='testi'>Testimonies</h3>
      <div className='griddss'>
        <div className="card" id='card' style={{width: '17rem'}}>
          <div className='img-cont'>
            <img src={images} className="images" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card" id='card'  style={{width: '17rem'}}>
          <div className='img-cont'>
            <img src={images} className="images" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card" id='card'  style={{width: '17rem'}}>
          <div className='img-cont'>
            <img src={images} className="images" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card" id='card'  style={{width: '17rem'}}>
          <div className='img-cont'>
            <img src={images} className="images" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
