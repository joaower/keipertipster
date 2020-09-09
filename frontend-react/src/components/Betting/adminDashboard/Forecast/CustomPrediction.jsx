import React from "react";
import {
  Grid,
  Select,
  Button,
  MenuItem
} from "@material-ui/core";
import Utility from "../../../../util/utility";
import MatchRequest from '../../../../requests/matches'
import Editable from '../../../Material-Ui/Editable'

const CustomPrediction = ({
  winner,
  sportValue,
  setDifficulty,
  difficulty,
  uploadFile,
  imageUrl,
}) => {
  const [type, setType] = React.useState(1);
  const [risk, setRisk] = React.useState(1);
  
  const [data, setData] = React.useState([
    { sport: '1', competition: 'Baran', sport: "Sporting - Benfica", date: 63, description: "Descrição" },
  ])
  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value);
  };

  const handleRiskChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRisk(event.target.value);
  };

  function addFreeBet() {
    const fullBody = {
      type: Utility.getTypeValue(type.toString()),
      risk: Utility.getRiskValue(risk.toString()),
      match: data
    }
    debugger
    MatchRequest.createMatch(fullBody).then(res => {
      debugger
    }).catch(err => {
debugger
    })
  } 

  return (
    <div style={{ padding: "1rem" }}>
      <form noValidate autoComplete="off">
        <Grid container alignContent="center">
          <Grid
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            item
            xs={12}
            sm={6}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              fullWidth
              variant="outlined"
              onChange={handleTypeChange}
            >
              <MenuItem value={1}>Simples</MenuItem>
              <MenuItem value={2}>Combinada</MenuItem>
            </Select>
          </Grid>
          <Grid style={{ marginTop: "1rem" }} item xs={12} sm={6}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={risk}
              fullWidth
              variant="outlined"
              onChange={handleRiskChange}
            >
              <MenuItem value={1}>Valor</MenuItem>
              <MenuItem value={2}>Garantida</MenuItem>
            </Select>
          </Grid>
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
          {/* data={data} setData={setData} */}
          <Editable  data={data} setData={setData} addFreeBet={addFreeBet} />
          </Grid>
          {/* <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <img src={imageUrl} />
            <Button fullWidth variant="contained" component="label">
              <input type="file" onChange={uploadFile} />
            </Button>
          </Grid> */}
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <Button onClick={addFreeBet}>Add</Button>
            {/* <CssTextField
              placeholder=""
              multiline
              variant="outlined"
              label="Descrição"
              fullWidth
              rows={2}
              rowsMax={10}
              //   onChange={(e) => setDescription(e.target.value)}
            /> */}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CustomPrediction;
