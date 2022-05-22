
import React from 'react';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './App.css';
import About from "./About";


import web from './images/web.png';
import linux from './images/linux.png';
import mac from './images/mac.png';
import windows from './images/windows.png';
import traffic_sim from './images/traffic_sim.png'
import ungap_map from './images/ungap_map.png'
import fifteen_min from './images/fifteen_min.png'
import santa from './images/santa.png'
import ltn from './images/ltn.gif'


import ResponsiveAppBar from './ResponsiveAppBar';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {carousel: 0};
    this.onChange = this.onChange.bind(this)
  }


  onChange (index, item){
    this.setState({ carousel: this.state.carousel = index})
  }

  render(){
    return (
      <div className="App">
        <ResponsiveAppBar/>
        <body className="App-body">

          <br />

          <h2>Try it on.</h2>

          <Grid container spacing={1}>
            <Grid item xs={4}></Grid>
            <Grid item xs={1}>
              <a href="http://play.abstreet.org/0.3.18/abstreet.html"><img src={web} alt="web" /></a>
            </Grid>
            <Grid item xs={1}>
              <a href="https://a-b-street.github.io/docs/user/index.html"><img src={linux} alt="linux" /></a>
            </Grid>
            <Grid item xs={1}>
              <a href="https://a-b-street.github.io/docs/user/index.html"><img src={mac} alt="mac" /></a>
            </Grid>
            <Grid item xs={1}>
              <a href="https://a-b-street.github.io/docs/user/index.html"><img src={windows} alt="windows" /></a>
            </Grid>
          </Grid>

          <h1>Open source software for planning less car-centric cities.</h1>

          <br /><br />

          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <Carousel onChange={this.onChange} infiniteLoop>
                  <div>
                      <img src={traffic_sim} />
                      <p className="legend">Traffic Simulator</p>
                  </div>
                  <div>
                      <img src={ltn} />
                      <p className="legend">Low-traffic neighbourhoods</p>
                  </div>
                  <div>
                      <img src={fifteen_min} />
                      <p className="legend">15-min neighbourhoods</p>
                  </div>
                  <div>
                      <img src={santa} />
                      <p className="legend">15-min Santa</p>
                  </div>
                  <div>
                      <img src={ungap_map} />
                      <p className="legend">Ungap the Map</p>
                  </div>
                </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              { this.state.carousel == 0 && (
                <div className="carouselItem">
                  <p> Traffic Simulator </p>
                    <ul>
                      <li>edit roads and intersections</li>
                      <li>visualize drivers, buses, pedestrians, and cyclists moving around</li>
                      <li>see how changes affect people's travel time and safety</li>
                    </ul>
                </div>
              )}

              { this.state.carousel == 1 && (
                <div className="carouselItem">
                  <p> Low-traffic neighbourhoods </p>
                    <ul>
                      <li>understand how drivers may find shortcuts through neighbourhoods</li>
                      <li>experiment with placing modal filters to create more liveable residential streets</li>
                    </ul>
                </div>
              )}

              { this.state.carousel == 2 && (
                <div className="carouselItem">
                  <p> 15-min neighbourhoods </p>
                    <ul>
                      <li>see what shops, libraries, health facilities, etc are reachable within a 15-minute walk or cycle ride</li>
                      <li>find houses that meet your definition of "walkability"</li>
                    </ul>
                </div>
              )}

              { this.state.carousel == 3 && (
                <div className="carouselItem">
                  <p> 15-min Santa </p>
                    <ul>
                      <li>a game teaching the importance of letting people live close to where they work and shop</li>
                      <li>deliver presents around Seattle as efficiently as possible</li>
                      <li>create new shops near residential areas to improve your score</li>
                    </ul>
                </div>
              )}

              { this.state.carousel == 4 && (
                <div className="carouselItem">
                  <p> Ungap the Map </p>
                    <ul>
                      <li>view existing cycling infrastructure & fill in missing links in the cycle network</li>
                      <li>explore routing tradeoffs between speed, safety, and avoiding hills</li>
                      <li>predict how many people will decide to cycle</li>
                    </ul>
                </div>
              )}



            </Grid>
        </Grid>

        <h2>Mission</h2>

        <Grid container>
          <Grid item xs={3}></Grid>

          <Grid item xs={6}>
            <p>We amplify the efforts of individuals and advocacy groups who campaign to transition cities away from private motor vehicles. We believe in transparent and reproducible analysis, so all of our work is open source and based on public data. We believe everybody should have a voice in shaping their city, so our software aims to be easy to use.
            <br /><br />Why not leave city planning to professionals? People are local experts on the small slice of the city they interact with daily -- the one left turn lane that always backs up or a certain set of poorly timed walk signals. Laura Adler writes:
            <br /><br />Only with simple, accessible simulation programs can citizens become active generators of their own urban visions, not just passive recipients of options laid out by government officials."</p>
          </Grid>

          <Grid item xs={3}></Grid>

        </Grid>

        <br /><br />

        <h2>Get Involved</h2>

        <Grid container>
          <Grid item xs={3}></Grid>

          <Grid item xs={6}>
          <ul>
            <li>Add in issue on <a href="https://github.com/a-b-street/abstreet">Github</a></li>
            <li>Send us <a href="mailto:dabreegster@gmail.com">an email.</a></li>
            <li>Submit a request for a workshop <a href="https://github.com/a-b-street/abstreet">here.</a></li>
          </ul>
          </Grid>

          <Grid item xs={3}></Grid>

        </Grid>

        <br /><br /><br />

        <Grid container>
          <Grid item xs={3}></Grid>

          <Grid item xs={8}>
          <p>
            A/B Street's main creators are Dustin Carlino, Yuwen Li, and Michael Kirk. Also see <a href="https://a-b-street.github.io/docs/project/team.html">all contributors.</a>
          </p>

          </Grid>

          <Grid item xs={3}></Grid>

        </Grid>

        <h6> Copyright © 2022 A/B Street</h6>


        </body>
      </div>
    );
  }
}

export default App;
