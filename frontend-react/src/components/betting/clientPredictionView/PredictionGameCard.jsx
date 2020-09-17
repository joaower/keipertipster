import React from 'react'
import { Divider, Grid, Paper, Typography } from '@material-ui/core'
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined'
import PropTypes from 'prop-types'
import { useStylesColor } from '../../style'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined'

const PredictionGameCard = ({
  data: { sport, competition, match, odd, description, date, green },
}) => {
  const nDate = new Date(date)
  const color = useStylesColor()
  function BetStatus(green) {
    switch (green.green) {
      case true:
        return (
          <DoneAllOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        )
      case false:
        return (
          <CloseOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        )
      case undefined:
        return (
          <HourglassEmptyOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        )
    }
    return null
  }
  function GetSportIcon() {
    switch (sport) {
      case 'Futebol':
        return (
          <SportsSoccerOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        )
      case false:
        return (
          <CloseOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        )
      case undefined:
        return (
          <HourglassEmptyOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        )
    }
    return null
  }
  return (
    <Paper
      className={color.green}
      style={{ padding: '1rem', marginLeft: '2rem', marginRight: '2rem' }}
      elevation={3}
    >
      <Grid
        container
        direction="row"
        style={{ height: '100%' }}
        alignItems="center"
      >
        <Grid item xs={12} sm={1}>
          <Grid container align="center" justify="center">
            <Grid item xs={12}>
              <GetSportIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid container style={{ padding: '1rem' }} justify="space-evenly">
            <Grid item xs={12} sm={4}>
              <Grid
                container
                direction="row"
                align="center"
                alignItems="stretch"
              >
                <Grid item xs={6}>
                  <Typography className={color.tOrange} variant="overline">
                    {sport}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={color.tOrange} variant="overline">
                    {competition.toUpperCase()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4} align="center">
              <Typography
                className={color.tOrange}
                variant="overline"
                align="center"
              >
                {match}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2} align="center">
              <Typography
                className={color.tOrange}
                variant="overline"
                align="center"
              >
                {odd}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2} align="center">
              <Typography
                className={color.tOrange}
                variant="overline"
                align="center"
              >
                {nDate.getHours()}:{nDate.getMinutes()}m
                <br />
                {nDate.getDay()}/{nDate.getMonth()}
              </Typography>
            </Grid>
            <Grid
              container
              align="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid style={{ marginTop: '1rem' }} item xs={12}>
                <Typography
                  className={color.tGrey}
                  variant="overline"
                  align="center"
                >
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1} align="center">
          <Paper className={color.orange}>
            <BetStatus green={green} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  )
}

PredictionGameCard.propTypes = {
  data: PropTypes.shape({
    sport: PropTypes.string.isRequired,
    competition: PropTypes.string.isRequired,
    match: PropTypes.string.isRequired,
    odd: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  // data: PropTypes.object.isRequired,
}

export default PredictionGameCard

/* data: {
  sport: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  odd: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}, */
