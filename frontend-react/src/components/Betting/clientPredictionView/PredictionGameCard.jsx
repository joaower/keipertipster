import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStylesColor } from "../../style";

const PredictionGameCard = ({
  data: { sport, competition, match, odd, description },
}) => {
  const color = useStylesColor();
  return (
    <Grid container style={{marginBottom: '0.5rem', padding: '1rem'}} className={color.green} direction="row" justify="space-evenly">
      <Grid item xs>
        <Typography className={color.tOrange} variant="body1">
          {sport}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography className={color.tOrange} variant="body1">
          {competition}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography className={color.tOrange} variant="body1">
          {match}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography className={color.tOrange} variant="body1">
          {odd}
        </Typography>
      </Grid>
      <Grid style={{ marginTop: "1rem" }} item xs={12}>
        <Typography className={color.tGrey} variant="body1">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PredictionGameCard;
