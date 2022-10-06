import React, { Component } from 'react'
import Social from '../images/Social.png';
import Social1 from '../images/Social1.png';
import Social2 from '../images/Social2.png';
import GooglePlay from '../images/GooglePlay.png';
import PlayStore from '../images/PlayStore.png';

export class Footer extends Component {
  render() {
    return (
        <div className=" footer py-5  container align-items-center text-center">
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className=" p-4">
              <h2 className="footer-title">Jadoo.</h2>
              <p>Book your trip in minute, get full
                <br/> Control for much longer.
                </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className=" p-4">
              <h5>Company</h5>
              <p>About <br/> Careers <br/> Mobile</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className=" p-4">
              <h5>Contact</h5>
              <p>Help/FAQ <br/> Press <br/> Affilates</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className=" p-4">
              <h5>More</h5>
              <p>Airlinefees <br/>Airline <br/>Low fare tips</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className=" p-4">
              <span>
                <img src={Social} alt="" className="social"/>
                <img src={Social1} alt="" className="social"/>
                <img src={Social2} alt="" className="social"/>
              </span>
              <p>Discover our app</p>
              <span>
                <img src={GooglePlay} alt="" className="store"/>
                <img src={PlayStore} alt="" className="store"/>
              </span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr/>
          <p className="text-muted">All rights reserved@jadoo.com</p>
        </div>
      </div>
    )
  }
}

export default Footer