import React from 'react'
import {
    Card,
    useTheme,
    IconButton,
    Typography,
    makeStyles,
    CardContent,
    Snackbar,
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
    details: {
        display: 'flex',
        flexDirection: 'column',
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
    data: { id, Title, Winner, Odd, Sport },
}) => {
    const classes = useStyles()
    const theme = useTheme()

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    function handleClick(e) {
        e.preventDefault()
        handleDelete(id)
    }

    function addStat(e, green) {
        e.preventDefault()
        let body = {
            // valueWon: Odd*BettingValue,
            title: Title,
            odd: Odd,
            sport: Sport,
            winner: Winner
        }
        green ? body.green=true : body.green=false
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
        <Card className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="danger">
                    Successfully deleted :/
                </Alert>
            </Snackbar>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Title - {Title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Winner - {Winner}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton onClick={(e) => addStat(e, true)} aria-label="previous">
                        <CheckCircleOutlineIcon className={classes.playIcon} />
                        <Typography>Green confirmation</Typography>

                    </IconButton>
                    <IconButton onClick={(e) => addStat(e, false)} aria-label="play/pause">
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
                </div>
            </div>
        </Card>
    )
}

export default PredictedCard
