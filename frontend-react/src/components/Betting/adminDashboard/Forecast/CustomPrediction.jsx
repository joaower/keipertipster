import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import { CssTextField } from "../../../Material-Ui/CssTextField";
import Utility from "../../../../util/utility";
const CustomPrediction = ({
  winner,
  sportValue,
  setDifficulty,
  difficulty,
  uploadFile,
  imageUrl
}) => {
  return (
    <div style={{ padding: "1rem" }}>
      <form noValidate autoComplete="off">
        <Grid container alignContent="center">
          <Grid
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            item
            xs={12}
          >
            <TextField
              value={Utility.getSportValue(sportValue)}
              fullWidth
              id="outlined-basic"
              label="Desporto"
              variant="outlined"
            />
          </Grid>
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Titlo"
              variant="outlined"
            />
          </Grid>
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <p>Vencedor</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              label="Vencedor"
              fullWidth
              value={winner}
              //   onChange={(e) => setWinner(e.target.value)}
            >
              <MenuItem value="House">Casa</MenuItem>
              <MenuItem value="Tie">Tie</MenuItem>
              <MenuItem value="Outside">Fora</MenuItem>
            </Select>
          </Grid>
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <p>Dificuldade</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              variant="outlined"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </Grid>
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <img src={imageUrl} />
            <Button fullWidth variant="contained" component="label">
              <input
                type="file"
                onChange={uploadFile}
              />
            </Button>
          </Grid>
          <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <CssTextField
              placeholder=""
              multiline
              variant="outlined"
              label="Descrição"
              fullWidth
              rows={2}
              rowsMax={10}
              //   onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CustomPrediction;
