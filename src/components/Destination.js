import React, { Component } from 'react'
import Rectangle14 from '../images/Rectangle14.png';
import Rectangle141 from '../images/Rectangle141.png';
import Rectangle142 from '../images/Rectangle142.png';

export class Destination extends Component {
  render() {
    return (
        <div className="section-trois text-center align-items-center container py-5">
        <h5 className="title easyFast">Top Selling</h5>
            <h1>Top Destinations</h1>
            <div className="row align-items-center pt-4">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="card ms-5 border-0 lestrois">
                    <img src={Rectangle14}  alt="" className="card-img-top"/>
                    <div className="card-body rect d-flex">
                      <div className='subtitle'>
                        <h5 className="card-title ">Rome, Italy</h5>
                        <p className="card-text ">10 Days Trip</p>
                      </div>
                      <div>
                        <span className='price ms-5'>$5.4k</span>
                      </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="card ms-5 border-0 lestrois">
                    <img src={Rectangle141}  alt="" className="card-img-top"/>
                    <div className="card-body rect d-flex">
                      <div className='subtitle'>
                        <h5 className="card-title text-center ">London, UK</h5>
                       <p className="card-text ">12 Days Trip</p>
                      </div>
                      <div><span className='price ms-5'>$4.2k</span></div>
                    </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="card ms-5 border-0 lestrois">
                    <img src={Rectangle142}  alt="" className="card-img-top"/>
                    {/* <img src="img/Decore (2).png" alt=""> */}
                    <div className="card-body rect d-flex">
                      <div className='subtitle'>
                        <h5 className="card-title ">Full Europe</h5>
                      <p className="card-text ">28 Days Trip</p>
                      </div>
                      <div><span className='price ms-5'>$15k</span></div>
                    </div>
                </div>
            </div>
            </div>
    </div>
    )
  }
}

export default Destination