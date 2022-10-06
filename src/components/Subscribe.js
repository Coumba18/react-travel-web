import React, { Component } from 'react'

export class Subscribe extends Component {
  render() {
    return (
        <div className="section7 container align-items-center py-5 text-center bg-light">
        <h2 className="titled">Subscribe to get information, latest news and other
          interesting offers about Cobham</h2>
          <span>
            <input type="text" placeholder="Your email" className="input border-0 shadow"/>
            <button type="button" className="btn ms-3 text-white">Subscribe</button>
          </span>
      </div>
    )
  }
}

export default Subscribe