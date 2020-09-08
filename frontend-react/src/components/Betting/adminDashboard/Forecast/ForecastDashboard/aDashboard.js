import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import SoccerRequest from '../../../../../requests/node/soccer'
import MatchRequest from '../../../../../requests/matches'
import BasketballRequest from '../../../../../requests/node/basketball'

import AdminDashboardHeader from './AdminDashboardHeader'
import AdminToPredictMatches from './AdminToPredictMatches'
import AdminPredictedMatches from './AdminPredictedMatches'
import { navigate } from '@reach/router'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    paper1: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    },
    title: {
        fontFamily: 'Aclonica',
    },
}))
const valueSport = [
    { id: '1', desc: 'Tenis' },
    { id: '2', desc: 'Basquetebol' },
    { id: '3', desc: 'Futebol' },
]
const valueDay = [
    { id: '1', desc: 'Hoje' },
    { id: '2', desc: 'Proxima semana' },
]
function DashBoard() {
    const [data, setData] = useState([])
    const [alreadyData, setAlreadyData] = useState([])
    const [sportValue, setSportValue] = React.useState('3')
    const [dayValue, setDayValue] = React.useState(1)
    const handleDayChange = event => {
        setDayValue(event.target.value)
    }
    const classes = useStyles()

    function loadBasketBallGames() {
        BasketballRequest.getToday()
            .then(res => {
                console.log(res.data.response)
                setData(res.data.response)
                // setChange(true)
            })
            .catch(err => {
                debugger
            })
    }

    function loadFootBallGames() {
        soccer()
    }
    const handleSportChange = event => {
        setSportValue(event.target.value)
        switch (event.target.value) {
            case '1':
                // loadTennisGames()
                break
            case '2':
                loadBasketBallGames()
                break
            case '3':
                loadFootBallGames()
                break
            default:
                console.log('Choose a sport')
        }
    }
    function soccer() {
        SoccerRequest.getToday().then(res => {
            if (res.status === 200) setData(res.data.matches)
        }).catch(err => {
            navigate('/login')
        })
    }
    useEffect(() => {
        soccer()

        MatchRequest.getMatches().then(res => {
            setAlreadyData(res.data)
            debugger
        }).catch(err => {
            debugger
        })
    }, [])

    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }
    function handleDelete(id) {
        MatchRequest.deleteMatchById(id).then(res => {
            if (res.status === 200) {
                setOpen(true)
                removeAlreadyDataFromState(id)
            }
        })
    }

    function removeAlreadyDataFromState(id) {
        setAlreadyData(
            alreadyData.filter(item => {
                return item.id !== id
            })
        )
    }
    return (
        <Grid container spacing={1}>
            <AdminDashboardHeader
                classes={classes}
                sportValue={sportValue}
                handleSportChange={handleSportChange}
                valueSport={valueSport}
                dayValue={dayValue}
                handleDayChange={handleDayChange}
                valueDay={valueDay}
            />
            <AdminToPredictMatches
                classes={classes}
                data={data}
                sportValue={sportValue}
            />
            <AdminPredictedMatches
                classes={classes}
                alreadyData={alreadyData}
                handleClose={handleClose}
                handleDelete={handleDelete}
                open={open}
                removeAlreadyDataFromState={removeAlreadyDataFromState}
            />
        </Grid>
    )
}

export default DashBoard
