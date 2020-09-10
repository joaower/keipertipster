import React from 'react'
import { Grid, Paper, Typography, Button, makeStyles } from '@material-ui/core'

import StarHalfIcon from '@material-ui/icons/StarHalf'
import { useStylesColor } from '../style'

const useStyles = makeStyles(theme => ({
    triple: {
        textAlign: 'center',

        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            padding: '5rem',

            paddingRight: '10rem',
            paddingLeft: '10rem',
        },
    },
    whole: {
        padding: '0.5rem',
        [theme.breakpoints.up('md')]: {
            height: '70vh',
            padding: '5rem',
        },
    },
}))

const ServiceGrid = () => {
    const classes = useStyles()
    const color = useStylesColor()
    return (
        <section className={classes.whole}>
            <Grid
                container
                spacing={3}
                style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
                direction="row"
            >
                <Grid item xs={12} sm={3}>
                    <Paper
                        className={color.grey}
                        elevation={1}
                    >
                        <Typography
                            variant="h5"
                            align="center"
                            className={color.tOrange}
                            style={{ paddingTop: '2rem' }}
                        >
                            Titlo
                        </Typography>
                        <Typography
                            className={color.tBlack}
                            style={{
                                padding: '1rem',
                            }}
                            align="justify"
                            variant="subtitle1"
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eaque ab praesentium magni esse ipsa,
                            repudiandae reprehenderit omnis itaque reiciendis
                            maiores aliquid autem corporis exercitationem fugiat
                            in, deleniti libero amet qui?
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="column"
                >
                    <Paper className={color.black} elevation={3}>
                        <Grid item xs={12}>
                            <Typography
                            align="center"
                                variant="h5"
                                className={color.tOrange}
                                style={{
                                    paddingTop: '2rem',
                                }}
                            >
                                Titlo
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                className={color.tGrey}
                                style={{
                                    padding: '1rem',
                                }}
                                align="justify"
                                variant="subtitle1"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nemo suscipit, eveniet quo
                                natus quae alias asperiores, modi sint ab
                                placeat cupiditate in accusamus itaque inventore
                                atque necessitatibus quos magni! Quam?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <StarHalfIcon
                                className={color.tGreen}
                                style={{
                                    fontSize: '10rem',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                className={`${color.green} ${color.tOrange}`}
                            >
                                aqui
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper
                        className={color.grey}
                        elevation={1}
                    >
                        <Typography
                            variant="h5"
                            className={color.tOrange}
                            style={{ paddingTop: '2rem' }}
                            align="center"
                        >
                            Titlo
                        </Typography>
                        <Typography
                            className={color.tBlack}
                            style={{
                                padding: '3rem',
                            }}
                            align="justify"
                            variant="subtitle1"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa quisquam adipisci numquam soluta, enim
                            provident sapiente ducimus nobis error ab facilis
                            quidem? Nisi, facere cupiditate. Nihil totam a
                            beatae aperiam!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}

export default ServiceGrid
