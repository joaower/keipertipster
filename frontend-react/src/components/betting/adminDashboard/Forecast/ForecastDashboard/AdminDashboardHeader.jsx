import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const ADashboardHeader = ({
  classes,
}) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Paper className={classes.paper1}>
        <Typography variant="h5">
          Todos os jogos representados aqui já foram analis
        </Typography>
        <Typography variant="subtitle1">
          Pelo senhor Vidal o rei das apostas tugaas
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);

ADashboardHeader.propType = {
  classes: PropTypes.object
};

export default ADashboardHeader;
