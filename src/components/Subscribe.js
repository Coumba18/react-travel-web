import React, { Component } from 'react'

export class Subscribe extends Component {
  render() {
    return (
      
        <div className="section7 container align-items-center py-5 text-center bg-light">
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
            <h2 className="titled">Subscribe to get information, latest news and other
          interesting offers about Cobham</h2>
            <span>
              <input type="text" placeholder="Your email" className="input border-0 shadow"/>
              <button type="button" className="btn ms-3 text-white">Subscribe</button>
            </span>
            </div>
          </div>
      </div>
    )
  }
}

export default Subscribe