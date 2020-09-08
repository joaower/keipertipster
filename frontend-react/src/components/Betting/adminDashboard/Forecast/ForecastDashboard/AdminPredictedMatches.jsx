import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import PredictedCard from '../../../../card/PredictedCard'

const AdminPredictedMatches = ({classes, alreadyData, handleClose, handleDelete, open, removeAlreadyDataFromState}) => {
    return (
        <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.title}>
                    Predictions
                </Typography>
            </Paper>
            {alreadyData &&
                alreadyData.map(match => {
                    return (
                        <PredictedCard
                            data={match}
                            open={open}
                            handleClose={handleClose}
                            handleDelete={handleDelete}
                            removeAlreadyDataFromState={
                                removeAlreadyDataFromState
                            }
                        />
                    )
                })}
        </Grid>
    )
}

export default AdminPredictedMatches
