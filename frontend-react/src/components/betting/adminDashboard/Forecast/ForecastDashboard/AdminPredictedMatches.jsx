import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import PredictedCard from '../../../../card/PredictedCard'
import { useStylesColor } from '../../../../../components/style'

const AdminPredictedMatches = ({
  classes,
  alreadyData,
  handleClose,
  handleDelete,
  open,
  removeAlreadyDataFromState,
}) => {
  debugger
  const color = useStylesColor()
  return (
    <Grid item xs={12} md={6}>
      <Paper className={`${color.grey} ${classes.paper} `}>
        <Typography variant="h5" className={classes.title}>
          Predictions
        </Typography>
      </Paper>

      {alreadyData &&
        alreadyData.map(match => {
          debugger
          return (
            <PredictedCard
              key={match.id}
              data={match}
              open={open}
              handleClose={handleClose}
              handleDelete={handleDelete}
              removeAlreadyDataFromState={removeAlreadyDataFromState}
            />
          )
        })}
    </Grid>
  )
}

AdminPredictedMatches.propTypes = {
  classes: PropTypes.object.isRequired,
  alreadyData: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  removeAlreadyDataFromState: PropTypes.func.isRequired,
}

export default AdminPredictedMatches
