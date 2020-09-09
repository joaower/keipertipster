import React from 'react'
import {
    Card,
    useTheme,
    IconButton,
    Typography,
    makeStyles,
    CardContent,
    Snackbar,
    Divider,
    Grid,
} from '@material-ui/core'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import MuiAlert from '@material-ui/lab/Alert'
import StatRequest from '../../requests/stats'
import MatchRequest from '../../requests/matches'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    
    },
    rootTest: {
        display: 'flex',
        width: '100%',
        backgroundColor: 'red'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    left: {
        marginLeft: 'auto',
    },
}))
const PredictedCard = ({
    handleClose,
    open,
    handleDelete,
    removeAlreadyDataFromState,
    data: { id, type, match, createdAt },
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const combinedOdd = match.reduce((a,b) => a * b.odd, 1)
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    function handleClick(e) {
        e.preventDefault()
        handleDelete(id)
    }

    function addStatistic(e, green) {
        e.preventDefault()
        let body = {
            green,
            odd: combinedOdd
        }
        // green ? body.green=true : body.green=false
        debugger
        StatRequest.createStat(body).then(res => {
            if(res.status===200) {
                MatchRequest.deleteMatchById(id).then(resp => {
                    if(resp.status===200) {
                        removeAlreadyDataFromState(id)
                    }
                })
            }
        })
    } 

    return (
        <Card  className={classes.root} >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="danger">
                    Successfully deleted :/
                </Alert>
            </Snackbar>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Tipo - {type}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Dia - {new Date(createdAt).getDate()} - {new Date(createdAt).getHours()}h
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                        Qt - {match.length}
                        {match.map(item => <ul><li>{item.match}</li></ul>)}
                        Odd - {combinedOdd}
                    </Typography>
                </CardContent>
                {/* <div className={classes.controls}> */}
                <Grid container alignContent="space-between">

                    <IconButton onClick={ (e) => addStatistic(e, true) } aria-label="previous">
                        <CheckCircleOutlineIcon className={classes.playIcon} />
                        <Typography>Green confirmation</Typography>

                    </IconButton>
                    <IconButton onClick={(e) => addStatistic(e, false)} aria-label="play/pause">
                        <NotInterestedIcon className={classes.playIcon} />
                        <Typography>Red confirmation</Typography>

                    </IconButton>
                    <IconButton
                        onClick={e => handleClick(e)}
                        className={classes.left}
                        aria-label="next"
                        >
                        <DeleteIcon className={classes.playIcon} />
                        <Typography>Delete</Typography>
                    </IconButton>
            </Grid>
                {/* </div> */}
                <Divider />
            </div>
        </Card>
    )
}

export default PredictedCard
