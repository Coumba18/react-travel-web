import React, { Component } from 'react'
import Group48 from '../images/Group48.png';
import Group51 from '../images/Group51.png';
import Group49 from '../images/Group49.png';
import Group50 from '../images/Group50.png';

export class Service extends Component {
  render() {
    return (
      <div className="section-deux text-center container py-5">
            <h5 className="text-uppercase title easyFast">Category</h5>
            <h1>We offer best services</h1>
            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                  <img src={Group48} alt=""/>
                    <h6>Calculated Weather </h6>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                  <img src={Group51} alt=""/>
                    <h6>Best Flights </h6>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                  <img src={Group50} alt=""/>
                    <h6>Local Events </h6>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                  <img src={Group49} alt=""/>
                    <h6>Customization </h6>
                    <p>We deliver outsourced aviation services for military customers</p>
                </div>
              </div>
          </div>
    )
  }
}

export default Service