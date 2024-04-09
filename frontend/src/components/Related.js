import React from 'react'
import './related.css'
import images from './images.jpeg'
import logo from '../logo.svg'
import au from './au.png'

export const Related = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <h3 className='rel'>Related Topics</h3>
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div id='caro'>
              <div className="card" style={{width: '18rem'}}>
                <img src={images} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id='card-title' className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={images} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={images} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={images} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div id='caro'>
              <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div id='caro'>
              <div className="card" style={{width: '18rem'}}>
                <img src={au} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={au} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={au} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                <img src={au} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 id="card-title" className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}