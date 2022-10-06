import React, { Component } from 'react'
import Group7 from '../images/Group7.png';
import Group12 from '../images/Group12.png';
import Group11 from '../images/Group11.png';
import Rectangle17 from '../images/Rectangle17.png';
import Group from '../images/Group.png';
import LEAF from '../images/LEAF.png';
import send from '../images/send.png';
import MaskGroup from '../images/MaskGroup.png';

export class Bookatrip extends Component {
  render() {
    return (
        <div className="section4 container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 align-items-center">
            <h6 className="easyFast">Easy and Fast </h6>
            <h2 className="titled">Book Your Next Trip In 3 Easy Steps</h2>
            <div className="d-flex">
              <div className="roup7">
                <img src={Group7} alt="" className="petit"/>
              </div> 
              <div className="text ms-2">
                <p className="fw-bold">Choose Destination</p>
              <span>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </span>
              </div>        
            </div>
            <div className="d-flex">
              <div className="roup7">
                <img src={Group12} alt="" className="petit"/>
              </div> 
              <div className="text ms-2">
                <p className="fw-bold">Make Payment</p>
              <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </p>
              </div>        
            </div>
            <div className="d-flex">
              <div className="roup7">
                <img src={Group11} alt="" className="petit"/>
              </div> 
              <div className="text ms-2">
                <p className="fw-bold">Reach Airport on Selected Date</p>
              <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </p>
              </div>        
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 trip">
            <div className="card miss border-0 shadow">
              <img src={Rectangle17}  alt="" className="card-img-top"/>
              <div className="card-body ">
                <h5 className="card-title fw-bold">Trip To Greece</h5>
                <p className="card-text body-miss">14-29 June| by Robin Joseph</p>
                <p className="foto">
                  <img src={LEAF}alt="" className="icon ms-2"/>
                  <img src={Group} alt="" className="iconex ms-3"/>
                  <img src={send} alt="" className="icon ms-3"/>
                </p>
                <p className="body-miss">24 people going</p>
              </div>
              <div className="cote d-flex shadow">
                <img src={MaskGroup} alt="" className="img w-auto h-100"/>
                <div className="cote-img">
                  <p className="text-muted">Ongoing</p>
                  <p>Trip to Rome</p>
                  <p><span className="text-muted">40</span><span>completed</span></p>
                  <input type="range"/>
                </div>
              </div>  
            </div>
             
          </div>
        </div>
      </div>
    )
  }
}

export default Bookatrip