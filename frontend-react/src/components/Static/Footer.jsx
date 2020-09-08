import React from 'react';
import { Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { navigate } from '@reach/router';

const Footer = () => (
  <footer
    style={{
      paddingTop: '4rem',
      paddingBottom: '2rem',
      textAlign: 'center',
      borderTop: '1px solid #CC8B65',
      background: '#E3DCD2',
    }}
  >
    <Grid container>
      <Grid item xs={3} />
      <Grid
        item
        style={{
          flexDirection: 'row',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
        xs={6}
      >
        <p style={{ marginRight: '1rem' }}>Serviços</p>
        <p style={{ marginRight: '1rem' }}>Contacta-me</p>
      </Grid>
      <Grid item xs={3} />
      <Grid
        item
        style={{
          flexDirection: 'row',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
        xs={12}
      >
        <InstagramIcon onClick={() => navigate("https://www.instagram.com/keipertipster/")} style={{ marginRight: '1rem' }} size="large" />
        <FacebookIcon onClick={() => navigate("https://www.facebook.com/keipertipster-106156397668326/")} style={{ marginRight: '1rem' }} size="large" />
        {/* <TwitterIcon style={{ marginRight: '1rem' }} size="large" /> */}
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
