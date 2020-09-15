import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import PredictedCard from '../../../../card/PredictedCard';

const AdminPredictedMatches = ({
  classes,
  alreadyData,
  handleClose,
  handleDelete,
  open,
  removeAlreadyDataFromState,
}) => (
  <Grid item xs={12} md={6}>
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Predictions
      </Typography>
    </Paper>

    {alreadyData
        && alreadyData.map(match => {
          debugger;
          return (
            <PredictedCard
              data={match}
              open={open}
              handleClose={handleClose}
              handleDelete={handleDelete}
              removeAlreadyDataFromState={removeAlreadyDataFromState}
            />
          );
        })}
  </Grid>
);

AdminPredictedMatches.propTypes = {
  classes: PropTypes.object.isRequired,
  alreadyData: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  removeAlreadyDataFromState: PropTypes.func.isRequired,
};

export default AdminPredictedMatches;
