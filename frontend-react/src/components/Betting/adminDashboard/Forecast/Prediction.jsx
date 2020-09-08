import React from 'react'
import {
    Snackbar,
    Grid,
    FormControl,
    Typography,
    MenuItem,
    InputLabel,
    Select,
    Button,
    makeStyles,
} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import MuiAlert from '@material-ui/lab/Alert'
import { CssTextField } from '../../../Material-Ui/CssTextField'

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 'bold',
    },
    dNone: {
        display: 'none',
    },
    icon: {
        color: '#013328',
        fontSize: '5rem',
        marginTop: 'auto',
        marginLeft: 'auto',
        cursor: 'pointer',
        pointerEvents: 'auto',
    },
}))
const Prediction = ({
    handleClose,
    props,
    winner,
    setWinner,
    difficulty,
    setDifficulty,
    setOdd,
    imageUrl,
    uploadFile,
    setDescription,
    save,
    open,
}) => {
    const { homeTeam, awayTeam, competition } = props.location.state
    const classes = useStyles()
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }
    return (
        <div>
            
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="success">
                        You just updated one more green :)
                        <Typography className={classes.bold} paragraph>
                            redirecting...
                        </Typography>
                    </Alert>
                </Snackbar>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Typography align="center" paragraph>
                            {`${homeTeam.name} - ${awayTeam.name}`}
                            <br />
                            dd/mm - hh/mm
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        direction="row"
                        xs={12}
                    >
                        <SportsSoccerIcon />
                        <Typography align="center" paragraph>
                            {`Competition: ${competition.name}`}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container flexDirection="column">
                <Grid direction="row" item xs={12}>
                    <Typography align="center" variant="h4">
                        Analise
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Winner
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={winner}
                            onChange={e => setWinner(e.target.value)}
                        >
                            <MenuItem value="House">{homeTeam.name}</MenuItem>
                            <MenuItem value="Tie">Tie</MenuItem>
                            <MenuItem value="Outside">{awayTeam.name}</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Difficulty
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={difficulty}
                            onChange={e => setDifficulty(e.target.value)}
                        >
                            <MenuItem value="Easy">Easy</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Hard">Hard</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CssTextField
                        id="standard-number"
                        label="Odd"
                        fullWidth
                        type="number"
                        onChange={e => setOdd(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <img src={imageUrl} />
                    <Button fullWidth variant="contained" component="label">
                        Upload Proof
                        <input
                            type="file"
                            className={classes.dNone}
                            onChange={uploadFile}
                        />
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                        Description
                    </Typography>
                    <CssTextField
                        placeholder=""
                        multiline
                        fullWidth
                        rows={2}
                        rowsMax={4}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Grid>

                <AddCircleIcon
                    className={classes.icon}
                    onClick={save}
                />
            </Grid>
        </div>
    )
}

export default Prediction
