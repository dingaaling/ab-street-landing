
import React from 'react';
import { Routes, Route } from "react-router"
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'

import web from './images/web.png';
import linux from './images/linux.png';
import mac from './images/mac.png';
import windows from './images/windows.png';
import traffic_sim from './images/traffic_sim.png'
import ungap_map from './images/ungap_map.png'
import fifteen_min from './images/fifteen_min.png'
import santa from './images/santa.png'
import ltn from './images/ltn.gif'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';

function App(){
    return (
      <div className="App">

        <ResponsiveAppBar/>
        <br /><br />

        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/About" element={<About />} />
          <Route path = "/Contact" element={<Contact />} />
        </Routes>


        <Footer class="footer"/>
      </div>
    );
  }

export default App;
