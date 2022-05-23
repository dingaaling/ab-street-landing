import React from 'react';
import Grid from '@mui/material/Grid';
import ltn_scriberia from '../images/ltn_scriberia.jpg';

function Contact(){
  return (


    <div className="CONTACT ROUTE">

      <h2>Get Involved</h2>

        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <img src={ltn_scriberia} class="image-contact" alt="scriberia" />
          </Grid>

        </Grid>

        <Grid container>
          <Grid item xs={4}></Grid>

          <Grid item xs={5}>
          <ul>
            <li>Add an issue on <a href="https://github.com/a-b-street/abstreet"><u>Github</u></a></li>
            <li>Send us <a href="mailto:dabreegster@gmail.com"><u>an email</u></a></li>
            <li>Submit a request for a workshop <a href="https://github.com/a-b-street/abstreet"><u>here</u></a></li>
          </ul>
          </Grid>

        </Grid>

  </div>

  );

}

export default Contact;
