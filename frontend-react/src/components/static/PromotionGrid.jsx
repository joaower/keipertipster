import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import FlareIcon from '@material-ui/icons/Flare'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import { useStylesColor } from '../style'

const useStyles = makeStyles(theme => ({
    triple: {
        textAlign: 'center',

        padding: '1rem',
        [theme.breakpoints.up('md')]: {
            padding: '6rem',

            paddingRight: '10rem',
            paddingLeft: '10rem',
        },
    },
    padding1: {
        padding: '1rem',
    },
}))

const PromotionGrid = () => {
    const classes = useStyles()
    const color = useStylesColor()
    return (
        <section>
            <Typography
                align="center"
                style={{
                    padding: '2rem',
                    fontWeight: 'bold',
                }}
                variant="h3"
            >
                Special hub
            </Typography>
            <Grid
                className={classes.triple}
                container
                spacing={3}
                direction="row"
            >
                <Grid item xs={12} sm={4}>
                    <Paper className={color.green} elevation={3}>
                        <StarHalfIcon
                            className={`${color.tGrey} ${classes.padding1}`}
                            fontSize="large"
                        />
                        <Typography
                            className={`${color.tOrange} ${classes.padding1}`}
                            align="center"
                            variant="h4"
                        >
                            Desportos reis
                        </Typography>
                        <Typography
                            align="justify"
                            className={color.tGrey}
                            style={{ padding: '3rem', paddingTop: '1rem' }}
                            variant="subtitle1"
                        >
                            Vidal segue e aposta nas três modalidades mais
                            conhecidas, futebol, basketball e tenis.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={color.green} elevation={3}>
                        <FlareIcon
                            className={`${color.tGrey} ${classes.padding1}`}
                            fontSize="large"
                        />
                        <Typography
                            className={`${color.tOrange} ${classes.padding1}`}
                            variant="h4"
                        >
                            Apostas
                        </Typography>
                        <Typography
                            className={color.tGrey}
                            style={{
                                padding: '3rem',
                                paddingTop: '1rem',
                            }}
                            align="justify"
                            variant="subtitle1"
                        >
                            Com este site tens a possibilidade de observar as
                            apostas freemium e premium se te pretenderes juntar
                            ao grupo.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={color.green} elevation={3}>
                        <SettingsApplicationsIcon
                            className={`${color.tGrey} ${classes.padding1}`}
                            fontSize="large"
                        />
                        <Typography
                            className={`${color.tOrange} ${classes.padding1}`}
                            variant="h4"
                        >
                            Apoio individual
                        </Typography>
                        <Typography
                            className={color.tGrey}
                            style={{
                                padding: '3rem',
                                paddingTop: '1rem',
                            }}
                            align="justify"
                            variant="subtitle1"
                        >
                            Ao pertenceres ao grupo tens a possibilidade de
                            contatar 3x por semana para conseguires aprender e
                            perceber melhor o risco.
                        </Typography>
                    </Paper>
                </Grid>
                {/* <Grid style={{ textAlign: 'center' }} xs={12}>
                    <Button>Tenho interesse</Button>
                </Grid> */}
            </Grid>
        </section>
    )
}

export default PromotionGrid
