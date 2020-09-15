import React from 'react';
import {
  Grid, Paper, Typography, makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PredictionGameCard from './PredictionGameCard';
import { useStylesColor } from '../../style';

const useStyles = makeStyles(theme => ({
  typeDisplay: {
    padding: '2rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    [theme.breakpoints.up('md')]: {
      marginLeft: '20rem',
      marginRight: '20rem',
    },
  },
}));
const PredictionBody = ({ data: { type, match, risk } }) => {
  debugger;
  const classes = useStyles();
  const color = useStylesColor();
  // const url = Proof !== null ? Proof.url : ''
  /* const imageUrl =
        process.env.NODE_ENV !== 'development'
            ? Proof.url
            : process.env.REACT_APP_BACKEND_URL + url
 */
  // console.log(imageUrl)
  return (
    <Grid container alignItems="center" alignContent="center">
      <Grid item xs={12}>
        <Typography
          variant="h5"
          style={{
            marginTop: '2rem',
            marginBottom: '2rem',
            fontWeight: 'bold',
          }}
          align="center"
        >
          TIPO DE APOSTA
        </Typography>
        <Paper
          className={`${color.green} ${classes.typeDisplay}`}
          elevation={3}
        >
          {type && risk && (
            <Typography
              variant="body1"
              className={color.tOrange}
              align="center"
            >
              Esta é uma aposta
              {' '}
              {type.toLowerCase()}
              {' '}
              com risco de
              {' '}
              {risk.toLowerCase()}
              {' '}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          style={{
            marginLeft: '5rem',
            marginTop: '2rem',
            marginBottom: '2rem',
            fontWeight: 'bold',
          }}
          align="center"
        >
          JOGOS
        </Typography>
        <Paper
          // className={color.green}
          style={{ padding: '2rem', marginLeft: '2rem', marginRight: '2rem' }}
          elevation={3}
        >
          {match !== undefined
            && match.map(item => <PredictionGameCard data={item} />)}
        </Paper>
      </Grid>
    </Grid>
  );
};
/* 
PredictionBody.propTypes = {
  data: { type: PropTypes.string.isRequired, match: PropTypes.array.isRequired, risk: PropTypes.s }
}; */

export default PredictionBody;
