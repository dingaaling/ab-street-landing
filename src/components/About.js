import React from 'react';
import Grid from '@mui/material/Grid';

function About(){
  return (

    <div className="ABOUT ROUTE">

    <h2>Mission</h2>

    <br />

    <Grid container>
      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <p>We amplify the efforts of individuals and advocacy groups who campaign to transition cities away from private motor vehicles. We believe in transparent and reproducible analysis, so all of our work is open source and based on public data. <b>We believe everybody should have a voice in shaping their city</b>, so our software aims to be easy to use.
        <br /><br />Why not leave city planning to professionals? People are local experts on the slice of the city they interact with daily -- from that one left turn lane that always backs up or that intersection with poorly timed walk signals. Laura Adler writes:
        <br /><br /><i><b>Only with simple, accessible simulation programs can citizens become active generators of their own urban visions, not just passive recipients of options laid out by government officials."</b></i></p>
      </Grid>

      <Grid item xs={3}></Grid>

    </Grid>

    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
      <p>
        A/B Street's main creators are Dustin Carlino, Yuwen Li, and Michael Kirk. Also see <a href="https://a-b-street.github.io/docs/project/team.html"><u>all contributors</u>.</a>
      </p>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>

  </div>

  );

}

export default About;
