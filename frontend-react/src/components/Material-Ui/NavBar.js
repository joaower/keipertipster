import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link, Grid } from '@material-ui/core'
import { navigate } from '@reach/router'
import { useStylesColor } from '../style'
import { AuthConsumer } from '../../context/AuthContext'
import imageURL from '../../shared/components/logo.jpeg'
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#E3DCD2',
  },
  navbar: {
    height: '13vh',
    [theme.breakpoints.down('sm')]: {
      height: '20vh'
    },
  }
}))

export default function NavBar() {
  const classes = useStyles()
  const color = useStylesColor()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={`${color.green} ${classes.navbar}`}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={2} style={{ width: '5rem', height: '5rem' }}>
              <img
                alt="logo"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                src={imageURL}
              />
            </Grid>
            <Grid item item xs={12} sm={10}>
              <div>
                <Typography gutterBottom variant="h4" className={classes.title}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate('/')}
                    className={color.tOrange}
                  >
                    KeiperTipster
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Grid container direction="row" justify="flex-start">
              <Grid item xs>
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/apostas')}
                  className={color.tOrange}
                >
                  <Typography gutterBottom variant="h6">
                    Apostas
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs>
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/contacto')}
                  className={color.tOrange}
                >
                  <Typography gutterBottom variant="h6">
                    Contacto
                  </Typography>
                </Link>
              </Grid>

              {/* <Grid item xs>
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/auth/login')}
                  className={color.tOrange}
                >
                  <Typography variant="h6">Login</Typography>
                </Link>
              </Grid> */}
              <Grid item xs align="center">
                <AuthConsumer>
                  {({ auth, logout, role }) =>
                    auth ? (
                      <Link
                        style={{
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        onClick={logout}
                        className={color.tOrange}
                      >
                        <Typography gutterBottom variant="h6">
                          Logout
                        </Typography>
                      </Link>
                    ) : (
                      <Link
                        style={{
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        onClick={() => navigate('/auth/login')}
                        className={color.tOrange}
                      >
                        <Typography gutterBottom variant="h6">
                          Login
                        </Typography>
                      </Link>
                    )
                  }
                </AuthConsumer>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
