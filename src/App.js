import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './App.css';
import web from './images/web.png';
import linux from './images/linux.png';
import mac from './images/mac.png';
import windows from './images/windows.png';
import carousel_1 from './images/carousel_1.png'

import ResponsiveAppBar from './ResponsiveAppBar';

function App() {
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
          <Grid item xs={7}>
            <Carousel width={900} infiniteLoop>
                <div>
                    <img src={carousel_1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carousel_1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={carousel_1} />
                    <p className="legend">Legend 3</p>
                </div>
              </Carousel>
          </Grid>
          <Grid item xs={4}>
            <p> 15-minute Neighborhood</p>
            <ul>
              <li>Feature 1 - this helps x do y which results in z</li>
              <li>Feature 2 - this helps x do y which results in z</li>
              <li>Feature 3 - this helps x do y which results in z</li>
            </ul>
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

export default App;
