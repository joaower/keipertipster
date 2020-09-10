import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import PredictionGameCard from "./PredictionGameCard";
import { useStylesColor } from "../../style";
const PredictionBody = ({ data: { type, match } }) => {
  debugger;
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
          style={{ marginLeft: "5rem", fontWeight: "bold" }}
        >
          Tipo de aposta
        </Typography>
        <p>{type}</p>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          style={{ marginLeft: "5rem", fontWeight: "bold" }}
        >
          JOGOS
        </Typography>
        <Paper
          // className={color.green}
          style={{ padding: "2rem", marginLeft: "2rem", marginRight: "2rem" }}
          elevation={3}
        >
          {match !== undefined &&
            match.map((item) => <PredictionGameCard data={item} />)}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PredictionBody;

// <div>
{
  /* <div style={{ display: 'flex', flexDirection: 'row' }}>
            </div> */
}
/* 
             <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Jogos</h5>
                <p>{Difficulty}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Odd</h5>
                <p>{Odd}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Prevision</h5>
                <p>{Prevision}</p>
            </div>  */

{
  /* {url && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h5 style={{ marginRight: '5rem' }}>Proof</h5>
                    <img src={imageUrl} />
                </div>
            )} */
}
{
  /* <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Sport</h5>
                <p>{Sport}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Winner</h5>
                <p>{Winner}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Description</h5>
                <p>{Description}</p>
            </div> */
}
// </div>
