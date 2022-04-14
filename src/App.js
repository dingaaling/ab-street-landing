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

        <h3>Try it on</h3>

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

        <h2>Open source software for planning less car-centric cities.</h2>

        <Carousel width={1000} infiniteLoop>
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

      </body>
    </div>
  );
}

export default App;
