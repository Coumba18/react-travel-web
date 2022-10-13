import React from 'react';
import './App.css';
import Header from './components/Header';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Bookatrip from './components/Bookatrip';
import Logo from './components/Logo';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className='container-fluid'>
      <Service />
      <Destination />
      <Bookatrip />
      <Testimonials />
      <Logo />
      <Subscribe />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
