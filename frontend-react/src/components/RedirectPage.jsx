import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { navigate } from '@reach/router'
import { useStylesColor } from './style'

const RedirectPage = () =>
  // const color = useStylesColor()
  (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={12} style={{ marginTop: '2.5rem' }}>
        <Typography gutterBottom variant="h6" align="center">
          Acabaste de bater a porta de um URL meio marado, aconselho te a
          voltares ao ecrã principal!
        </Typography>
        <Typography
          style={{ marginTop: '5rem', marginBottom: '5rem' }}
          gutterBottom
          variant="h2"
          align="center"
        >
          404
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          style={{ marginTop: '5rem', cursor: 'pointer' }}
          gutterBottom
          variant="h4"
          align="center"
          onClick={() => navigate('/')}
        >
          Voltar
          {' '}
          {'  '}
          {' '}
          ▶
        </Typography>
      </Grid>
    </Grid>
  )

export default RedirectPage
