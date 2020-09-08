import React, { useEffect, useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PredictionStatistics from "./PredictionStatistics";
import PredictionHouses from "./PredictionHouses";
import PredictionBody from "./PredictionBody";
import MatchRequest from "../../../requests/matches";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "colomn",
  },
  paperChild: {
    display: "flex",
    flex: "1",
  },
});

function PredictionPage(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    MatchRequest.getMatchById(props.id)
      .then((res) => {
        if (res.status === 200) {
          debugger;
          setData(res.data);
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }, []);
  return (
    <>
      <Paper className={classes.root}>
        {/* <Grid xs={12}></Grid> */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Estatisticas do confronto" />
          <Tab label="Previsão" />
          <Tab label="Casas de apostas" />
        </Tabs>
      </Paper>
      {message}

      {value == 0 && <PredictionStatistics />}
      {value == 1 && <PredictionBody data={data} />}
      {value == 2 && <PredictionHouses />}
    </>
  );
}

export default PredictionPage;
