import React, { Component } from 'react'
import Ellipse from '../images/Ellipse.png';  
import Polygon from '../images/Polygon.png';
import Traveller from '../images/Traveller.png';

export class Header extends Component {
  render() {
    return (
      <div className="container section-un py-5">
            <div className="row rowUn">
                <div className="col-md-6 col-sm-12 col-xs-12 sideOne">
                    <h3 className="text-uppercase titleOne">Best destinations around the world</h3>
                    <h1 className="titleSnd">Travel, enjoy and live a new and full life</h1>
                    <p className="para">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <button type="button" className="btn text-white">Find out more</button>
                    <img src={Ellipse} alt="" className="ellipse"/>
                    <img src={Polygon} alt="" className="poly"/>
                </div>
                <div className="col-md-6">
                    <img src={Traveller} alt="" className="traveller"/>
                </div>
            </div>
        </div>
    )
  }
}

export default Header