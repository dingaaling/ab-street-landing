import React from 'react';
import Grid from '@mui/material/Grid';

function About(){
  return (

    <div className="ABOUT ROUTE">

    <h2>Motivation</h2>

    <Grid container>
      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <p>A/B Street is a project to plan, simulate, and communicate visions for making cities friendlier to people walking, biking, and taking public transit.
        We create software to simulate traffic, edit streets and intersections, plan bike networks, create low-traffic neighborhoods, and educate the public about urban design through games.
        The project works anywhere in the world, thanks to OpenStreetMap.</p>
      </Grid>

      <Grid item xs={3}></Grid>

    </Grid>

    <h2>Mission</h2>

    <Grid container>
      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <p>We amplify the efforts of individuals and organisations who campaign to transition cities towards active transportation.
        <ol>
          <li>We believe in transparent & reproducible analysis - our work is open source and based on public data.</li>
          <li>We believe everybody should have a voice in shaping their city - our software aims to be easy to use.</li>
        </ol>
        Why not leave city planning to professionals? People are local experts on their slice of the city, from that one left turn lane that always backs up or intersection with poorly timed walk signals. Laura Adler writes:
        <br /><br /><i><b>Only with simple, accessible simulation programs can citizens become active generators of their own urban visions, not just passive recipients of options laid out by government officials."</b></i></p>
      </Grid>

      <Grid item xs={3}></Grid>

    </Grid>

    <br /><br />

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
