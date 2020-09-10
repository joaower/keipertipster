/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react'
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import { Link, navigate } from '@reach/router'
import VisibilityIcon from '@material-ui/icons/Visibility'
import MatchRequest from '../../requests/matches'
import { useStylesColor } from '../style'
import Footer from '../static/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '1rem', marginLeft: '10rem', marginRight: '10rem',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  paper1: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  title: {
    fontFamily: 'Aclonica',
    margin: '1rem',
    [theme.breakpoints.up('md')]: {
      margin: '3rem',
      marginBottom: '4rem'
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  displayTournament: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  midContent: {
    [theme.breakpoints.up('xs')]: {
      marginBottom: '11rem',
    },
  },
  displayCompetitors: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
  },
  cardFather: {
    display: 'flex',
    flexDirection: 'row',
  },
  nameDisplay: {
    flex: 1,
    display: 'flex',
  },
}))
const valueSport = [
  { id: '1', desc: 'Tennis' },
  { id: '2', desc: 'Basketball' },
  { id: '3', desc: 'Soccer' },
]
const valueDay = [
  { id: '1', desc: 'Today' },
  { id: '2', desc: 'Next matches' },
  { id: '3', desc: 'All matches' },
]

function FreeBets() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  // const [sportValue, setSportValue] = React.useState(3)
  // const [dayValue, setDayValue] = React.useState(3)
  // const [writtenFilter, setWrittenFilter] = useState('')
  const date = new Date()
  const color = useStylesColor()

   const today = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
    -2,
  )}-${`0${date.getDate()}`.slice(-2)}` 
  /* function loadTennisGames() {
    setFilter()
  }

  function loadBasketBallGames() {
    setFilter()
  } */

  function loadBettedGames() {
    if (window.localStorage.getItem('jwt') !== null) {
      MatchRequest.getMatches()
        .then(res => {
          setData(res.data)
          debugger
          setFilter(res.data)
        })
        .catch(err => {
          if (err.response !== undefined) {
            if (err.response.status === 401) navigate('/login')
          }
        })
    } else {
      MatchRequest.getMatchesUnauthenticated()
        .then(res => {
          setData(res.data)
          setFilter(res.data)
        })
        .catch(err => {
          if (err.response !== undefined) {
            if (err.response.status === 401) navigate('/login')
          }
        })
    }
  }

  useEffect(() => {
    loadBettedGames()
  }, [])

  /* const handleSportChange = (event) => {
    setSportValue(event.target.value);
    switch (event.target.value) {
      case "1":
        loadTennisGames();
        break;
      case "2":
        loadBasketBallGames();
        break;
      case "3":
        loadFootBallGames();
        break;
      default:
        console.log("Choose a sport");
    }
  }; */

  /* function loadNextMatches() {
    const newFilter = data.filter(
      item => new Date(item.created_at) >= new Date(today),
    )
    setFilter(newFilter)
  }

  function loadAllMatches() {
    setFilter(data)
  }

  function loadTodayMatches() {
    const newFilter = data.filter(
      item => new Date(item.created_at).getDay() == new Date().getDay(),
    )
    setFilter(newFilter)
  } */

  /* const handleDayChange = event => {
    setDayValue(event.target.value)
    switch (event.target.value) {
      case '1':
        loadTodayMatches()
        break
      case '2':
        loadNextMatches()
        break
      case '3':
        loadAllMatches()
        break
      default:
        console.log('Choose a sport')
    }
  } */

  /* function handleWrittenFilter(e) {
    setWrittenFilter(e.target.value)
    debugger
    const newFilter = data.filter(item =>
      item.Title.toLowerCase().includes(e.target.value),
    )
    setFilter(newFilter)
  } */

  const classes = useStyles()
  return (
    <>
    <Grid container spacing={1} className={classes.midContent} >
      <Grid item xs={12} >
        {/* <Paper className={classes.paper1}>
          <Typography variant="h5">
            Todos jogos representados aqui já foram analisados
          </Typography>
          <Typography variant="subtitle1">
            Pelo senhor Vidal o rei das apostas tuga
          </Typography>
        </Paper> */}
        {/* <Paper
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
            type="Sport"
            valueArray={valueSport}
            helpText="Choose sport type"
          />
          <Selector
            value={dayValue}
            handleChange={handleDayChange}
            key="2"
            type="Day"
            valueArray={valueDay}
            helpText="Date choose"
          />
        </Paper> */}
        {/*public offering to see and control their needs */}
        {/* <Paper className={classes.paper1}>
          <Typography>Match search</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <CssTextField
              id="outlined-basic"
              label="Match title"
              variant="outlined"
              onChange={handleWrittenFilter}
            />
          </form>
        </Paper> */}
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper1}>
          <Typography variant="h4" className={classes.title}>
            Jogos analisados
          </Typography>

          {filter !== undefined &&
            filter !== null &&
            filter.map(match => {
              debugger
              return (
                <Card className={`${classes.root} ${color.green}`} >
                  <CardContent className={classes.cardFather}>
                    <Grid container alignContent="center" alignItems="center">
                      <Grid item xs={6}>
                        <Typography
                          gutterBottom
                          variant="overline"
                          style={{ fontWeight: 'bold' }}
                          className={color.tOrange}
                        >
                          Tipo de aposta
                        </Typography>
                        <Typography className={color.tGrey}>
                          {match.type}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          gutterBottom
                          variant="overline"
                          style={{ fontWeight: 'bold' }}
                          className={color.tOrange}
                        >
                          Dia
                        </Typography>
                        <Typography className={color.tGrey}>
                          {new Date(match.createdAt).getDate()}
                        </Typography>
                      </Grid>

                      <Grid item xs={2}>
                        <Link to={`/previsao/${match.id}`}>
                          <VisibilityIcon
                            className={color.tOrange}
                            fontSize="large"
                          />
                        </Link>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )
            })}
        </Paper>
      </Grid>
    </Grid>
      <Footer />
      </>
  )
}

export default FreeBets
