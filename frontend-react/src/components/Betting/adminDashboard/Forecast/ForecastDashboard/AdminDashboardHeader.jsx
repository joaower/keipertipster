import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Selector from "../../../../Material-Ui/Selector";

const ADashboardHeader = ({
  classes,
  sportValue,
  handleSportChange,
  valueSport,
  dayValue,
  handleDayChange,
  valueDay,
}) => {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Paper className={classes.paper1}>
          <Typography variant="h5">
            Todos os jogos representados aqui já foram analis
          </Typography>
          <Typography variant="subtitle1">
            Pelo senhor Vidal o rei das apostas tugaas
          </Typography>
        </Paper>
      </Grid>
      {/* <Grid item xs={12}>
        <Paper
          className={classes.paper}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Selector
            key="1"
            value={sportValue}
            handleChange={handleSportChange}
            type="Desporto"
            valueArray={valueSport}
            helpText="Escolhe o tipo de desporto"
          />
          <Selector
            value={dayValue}
            handleChange={handleDayChange}
            key="2"
            type="Dia"
            valueArray={valueDay}
            helpText="Escolhe o dia"
          />
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default ADashboardHeader;
