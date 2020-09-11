import React from 'react'
import {
  Grid,
  Select,
  MenuItem,
  Fab,
  Snackbar,
  Typography,
} from '@material-ui/core'
import Utility from '../../../../util/utility'
import MatchRequest from '../../../../requests/matches'
import Editable from '../../../Material-Ui/Editable'
import AddIcon from '@material-ui/icons/Add'
import { useStylesColor } from '../../../../components/style'
import MuiAlert from '@material-ui/lab/Alert'
import { navigate } from '@reach/router'

const CustomPrediction = ({}) => {
  const [type, setType] = React.useState(1)
  const [risk, setRisk] = React.useState(1)

  const [data, setData] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const color = useStylesColor()
  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value)
  }

  const handleRiskChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRisk(event.target.value)
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  function addFreeBet() {
    const fullBody = {
      type: Utility.getTypeValue(type.toString()),
      risk: Utility.getRiskValue(risk.toString()),
      match: data,
    }
    debugger
    MatchRequest.createMatch(fullBody)
      .then(res => {
        debugger

        setOpen(true)
        setTimeout(() => navigate('/spider/dashboard'), 4000)
      })
      .catch(err => {
        debugger
      })
  }

  return (
    <div style={{ padding: '1rem' }}>
      <form noValidate autoComplete="off">
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity="success">
            Acabaste de adicionar uma aposta nova, vai relembrar no telegram!
            <Typography paragraph>A redirecionar ...</Typography>
          </Alert>
        </Snackbar>
        <Grid container alignContent="center">
          <Grid
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
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
          <Grid style={{ marginTop: '1rem' }} item xs={12} sm={6}>
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
          <Grid style={{ marginBottom: '1rem' }} item xs={12}>
            {/* data={data} setData={setData} */}
            <Editable data={data} setData={setData} addFreeBet={addFreeBet} />
          </Grid>
          {/* <Grid style={{ marginBottom: "1rem" }} item xs={12}>
            <img src={imageUrl} />
            <Button fullWidth variant="contained" component="label">
              <input type="file" onChange={uploadFile} />
            </Button>
          </Grid> */}
          <Grid item xs={12}>
            <Grid container style={{ marginTop: '3rem' }} justify="center">
              <Grid item align="center">
                <Fab
                  align="center"
                  onClick={addFreeBet}
                  size="large"
                  variant="extended"
                  className={`${color.tGrey} ${color.green}`}
                  aria-label="add"
                >
                  <AddIcon />
                  Adicionar green
                </Fab>
              </Grid>
            </Grid>
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
  )
}

export default CustomPrediction
