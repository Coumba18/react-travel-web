import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
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
    <div className="container-fluid align-itemns-center text-center">
      <Navbar />
      <Header />
      <Service />
      <Destination />
      <Bookatrip />
      <Testimonials />
      <Logo />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
