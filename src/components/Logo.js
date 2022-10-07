import React, { Component } from 'react'
import image27 from '../images/image27.png';
import image28 from '../images/image28.png';
import image29 from '../images/image29.png';
import image30 from '../images/image30.png';
import image31 from '../images/image31.png';

export class Logo extends Component {
  render() {
    return (
        <div className="section6 container align-items-center py-5">
        <div className="row container align-items-center text-center">
          <div className="col-md-3 col-sm-12 col-xs-12">
              <img src={image27} alt="" className="line-img"/>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
              <img src={image28} alt="" className="line-img"/>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
              <img src={image29} alt="" className="line-img"/>
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
              <img src={image30}alt="" className="line-img"/>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
              <img src={image31} alt="" className="line-img"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Logo