import React, { Component } from 'react'
import Image from '../images/Image.png';

export class Testimonials extends Component {
  render() {
    return (
      <div className="section5 container py-5">
       <div className=" row">
        <div className="col-md-6 col-sm-12 col-xs-12 align-items-center">
          <h6 className="easyFast text-uppercase">Testimonials </h6>
          <h2 className="titled">What People Say About Us.</h2>
          <p>
            <span className="dot-bold fw-bold">.</span>
            <span className="not-bold">.</span>
            <span className="not-bold">.</span>
          </p>
        </div>
        <div className="col-md-1 col-sm-12 col-xs-12 align-items-center">
          <img src={Image} alt="" className="round-img"/>
        </div>
          {/* <div style="color: #84829A;"> */}
          <div className='col-md-5 col-sm-12 col-xs-12 align-items-center testim pt-4'>
            <p className="">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <p className=""><b>Mike taylor</b>  <br/>Lahore, Pakistan</p>
            <p className=" shadow bg-light"> <b>Chris Thomas</b> <br/>CEO of Red Button</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials