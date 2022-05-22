import React from 'react';
import Grid from '@mui/material/Grid';


function About(){
  return (

    <div className="About">


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

  </div>

  );

}

export default About;
