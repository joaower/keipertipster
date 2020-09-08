import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { navigate } from '@reach/router'
import AuthRequest from '../requests/auth'
import { AuthConsumer } from '../context/AuthContext'
import { CssTextField } from './Material-Ui/CssTextField'
import { useStylesCard, useStylesColor } from './style'

function Copyright() {
    const color = useStylesColor()
    return (
        <Typography variant="body2" className={color.tGreen} align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Vidal's Website
            </Link>{' '}
            {new Date().getFullYear()}.
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
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function Login(props) {
    const classes = useStyles()
    const color = useStylesColor()
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    function handleClick(e, login) {
        e.preventDefault()
        debugger
        const body = {
            identifier,
            password,
        }
        AuthRequest.login(body)
            .then(res => {
                if ((res.status = 200)) {
                    debugger
                    login()
                    window.localStorage.setItem(
                        'username',
                        res.data.user.username
                    )
                    window.localStorage.setItem('jwt', res.data.jwt)
                    if (res.data.user.role.id === 1) {
                        navigate('/spider/dashboard')
                    } else navigate('/')
                } else {
                    setMessage('Wrong login information')
                }
            })
            .catch(e => {
                if (e.response !== undefined) {
                    setMessage(e.response.data.message[0].messages[0].message)
                } else {
                    setMessage('Server currently down...')
                }
            })
    }
    return (
        <AuthConsumer>
            {({ login }) => (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={`${classes.avatar} ${color.green}`}>
                            <LockOutlinedIcon className={`${color.green} ${color.tOrange}`} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <CssTextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={e => setIdentifier(e.target.value)}
                            />
                            <CssTextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={`${classes.submit} ${color.green} ${color.tOrange}`}
                                onClick={e => {
                                    handleClick(e, login)
                                }}
                            >
                                Sign In
                            </Button>
                            <h1>{message}</h1>
                            <Grid container>
                                 <Grid item xs>
                                    <Link className={color.tBlack} variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid> 
                                <Grid item>
                                    <Link className={color.tBlack} to="pricing" variant="body2">
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            )}
        </AuthConsumer>
    )
}
