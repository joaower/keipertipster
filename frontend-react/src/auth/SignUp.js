import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useStylesColor } from '../components/style'
import { CssTextField } from '../components/Material-Ui/CssTextField'
import { Select, InputLabel, MenuItem } from '@material-ui/core'
import { navigate } from '@reach/router'
import AuthRequest from '../requests/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Vidal's Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUp() {
  const classes = useStyles()
  const color = useStylesColor()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [referral_social_media, setReferral] = useState('')
  const [message, setMessage] = useState('')
  function registerUser(e, login) {
    e.preventDefault()
    const body = {
      firstName,
      lastName,
      username,
      email,
      password,
    }
    debugger
    AuthRequest.register(body)
      .then(res => {
        login(res.data.user.username, res.data.jwt, res.data.user.role.type)
      })
      .catch(err => {
        if (e.response !== undefined) {
          setMessage(e.response.data.message[0].messages[0].message)
        } else {
          setMessage('Server currently down...')
        }
      })
  }
  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={`${classes.avatar} ${color.green}`}>
          <LockOutlinedIcon className={`${color.green} ${color.tOrange}`} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Primeiro nome"
                name="firstName"
                autoComplete="fName"
                autoFocus
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Ultimo nome"
                name="lastName"
                autoComplete="lName"
                autoFocus
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enderenço email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome usuario"
                name="username"
                autoFocus
                onChange={e => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="outlined"
                type="password"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="current-password"
                autoFocus
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">
                Como ouviste falar do website?
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={referral_social_media}
                onChange={e => setReferral(e.target.value)}
              >
                <MenuItem value="Amigo">Amigo</MenuItem>
                <MenuItem value="Instagram">Instagram</MenuItem>
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Twitter">Twitter</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={`${classes.submit} ${color.green} ${color.tOrange}`}
            onClick={e => registerUser(e)}
          >
            Sign Up
          </Button>
          <h1>{message}</h1>

          <Grid container justify="flex-end">
            <Grid item>
              <Link
                className={color.tBlack}
                variant="body2"
                onClick={() => navigate('/auth/login')}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
