import React, { Component } from 'react'
import Rectangle14 from '../images/Rectangle14.png';
import Rectangle141 from '../images/Rectangle141.png';
import Rectangle142 from '../images/Rectangle142.png';
import Vector from '../images/Vector.png';

export class Destination extends Component {
  render() {
    return (
        <div className="section-trois text-center align-items-center container-fluid ">
            <h5 className="title easyFast">Top Selling</h5>
            <h1>Top Destinations</h1>
            <div className='row'>
              <div className='col-md-4 col-sm-12 col-xs-12'>
              <div className="card border-0">
                <img src={Rectangle14}  className="card-img position-relative" alt="..."/>
                <div className="card-img-overlay d-flex bg-white position-absolute top-50 start-0">
                  <span className='ms-5'>
                  <h5 className="card-title">Rome, Italty</h5>
                  <p className="card-text"><img src={Vector}  className="vector" />10 Days Trip</p>
                  </span>
                  
                  <span className="card-text meuve ms-5">$5,42k</span>
                </div>
              </div>

              </div>
              <div className='col-md-4 col-sm-12 col-xs-12'>
              <div className="card border-0">
                <img src={Rectangle141}  className="card-img position-relative" alt="..."/>
                <div className="card-img-overlay d-flex bg-white position-absolute top-50 start-0">
                <span className='ms-5'>
                <h5 className="card-title">London, UK</h5>
                  <p className="card-text"><img src={Vector}  className="vector" />12 Days Trip</p>
                </span>
                  
                  <span className="card-text meuve ms-5">$4.2k</span>
                </div>
              </div>

              </div>
              <div className='col-md-4 col-sm-12 col-xs-12'>
              <div className="card border-0">
                <img src={Rectangle142}  className="card-img position-relative" alt="..."/>
                <div className="card-img-overlay d-flex bg-white position-absolute top-50 start-0">
                <span className='ms-5'>
                <h5 className="card-title">Full Europe</h5>
                  <p className="card-text"><img src={Vector}  className="vector" />28 Days Trip</p>
                </span>
                  
                  <span className="card-text meuve ms-5">$15k</span>
                </div>
              </div>
              </div>
            </div>
    </div>
    )
  }
}

export default Destination