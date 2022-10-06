import React, { Component } from 'react'
import Jadoo from '../images/Jadoo.png';
import Decore from '../images/Decore.png';

export class Navbar extends Component {
  render() {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={Jadoo} alt="img"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Destinations</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">hotels</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Flights</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Bookings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><button type="button" className="btn btn-default">Sign up</button></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">FR</a></li>
                    <li><a className="dropdown-item" href="#">ESP</a></li>
                    <li><a className="dropdown-item" href="#">IT</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <img src={Decore} alt="deco" className="deco"/>  
      </div>
    )
  }
}

export default Navbar