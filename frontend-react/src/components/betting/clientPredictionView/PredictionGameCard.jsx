import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStylesColor } from '../../style'
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined'
import PropTypes from 'prop-types';

const PredictionGameCard = ({
  data: { sport, competition, match, odd, description },
}) => {
  const color = useStylesColor()
  return (
    <Grid
      container
      style={{ marginBottom: '0.5rem', padding: '1rem' }}
      className={color.green}
      direction="row"
      alignItems="center"
    >
      <Grid item xs={12} sm={10}>
        <Grid
          container
          style={{ marginBottom: '0.5rem', padding: '1rem' }}
          className={color.green}
          direction="row"
          justify="space-evenly"
        >
          <Grid item xs={6} sm={2}>
            <Typography className={color.tOrange} variant="body1">
              {sport}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography className={color.tOrange} variant="body1">
              {competition}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={color.tOrange}
              variant="body1"
              align="center"
            >
              {match}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography
              className={color.tOrange}
              variant="body1"
              align="center"
            >
              {odd}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography
              className={color.tOrange}
              variant="body1"
              align="center"
            >
              {odd}
            </Typography>
          </Grid>
          {/* 
          <Grid item xs={0} >
            {<SportsSoccerOutlinedIcon className={color.tGrey} />}
          </Grid> */}
          <Grid style={{ marginTop: '1rem' }} item xs={12}>
            <Typography className={color.tGrey} variant="body1" align="center">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} align="center">
        {
          <SportsSoccerOutlinedIcon
            className={color.tGrey}
            style={{ fontSize: '3rem' }}
          />
        }
      </Grid>
    </Grid>
  )
}

PredictionGameCard.propTypes = {
  data: { sport: PropTypes.string.isRequired, competition: PropTypes.string.isRequired, match: PropTypes.string.isRequired, odd: PropTypes.number.isRequired, description: PropTypes.string.isRequired }
}

export default PredictionGameCard
