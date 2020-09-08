import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import GameCard from '../../../../card/GameCard'
import CustomCard from '../../../../card/CustomCard'

const AdminToPredictMatches = ({classes, data, sportValue}) => {
    return (
        <Grid item xs={12} md={6}>
            <Paper className={classes.paper1}>
                <Typography variant="h5" className={classes.title}>
                    Jogos por avaliar apresentados aqui
                </Typography>
                <CustomCard
                        sportValue={sportValue}
                    />

                {data && data.map(match => (
                    <GameCard
                        key={match.id}
                        match={match}
                        sportValue={sportValue}
                    />
                ))}
            </Paper>
        </Grid>
    )
}

export default AdminToPredictMatches
