import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Swipeable from "./Swipable";
import { Menu, MenuItem, Link, Grid, Paper } from "@material-ui/core";
import { AuthConsumer } from "../../context/AuthContext";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { navigate } from "@reach/router";
import { useStylesColor } from "../style";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#E3DCD2",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const color = useStylesColor();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={color.green}>
          <Grid
            container
            style={{marginTop: '1rem', marginBottom: '1rem'}}
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Grid container direction="row" item xs={12} sm={6}>
              {/* <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                 <Swipeable />
                            </IconButton> */}
              <div>
                <Typography variant="h5" className={classes.title}>
                  <Link
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/")}
                    className={color.tOrange}
                  >
                    Vidal - Betting Hub
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justify="flex-end"
              xs={12}
              sm={6}
            >
              <Grid item xs>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/")}
                  className={color.tOrange}
                >
                  Home
                </Link>
              </Grid>
              <Grid item xs>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/apostas")}
                  className={color.tOrange}
                >
                  Apostas
                </Link>
              </Grid>
              {/* <Grid item xs>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/estatisticas")}
                  className={color.tOrange}
                >
                  Estatisticas
                </Link>
              </Grid> */}
              <Grid item xs>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/contacto")}
                  className={color.tOrange}
                >
                  Contacto
                </Link>
              </Grid>

              {/* <Grid item xs>
                                <AuthConsumer>
                                    {({ auth, logout }) =>
                                        auth ? (
                                            <div>
                                                <IconButton
                                                    aria-label="account of current user"
                                                    aria-controls="menu-appbar"
                                                    aria-haspopup="true"
                                                    onClick={handleMenu}
                                                    color="inherit"
                                                >
                                                    <AccountCircle />
                                                </IconButton>
                                                <Menu
                                                    id="menu-appbar"
                                                    anchorEl={anchorEl}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    open={open}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        
                                                            Apostas
                                                        <HomeIcon />
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        Profile
                                                        <HomeIcon />
                                                    </MenuItem>
                                                    <MenuItem onClick={logout}>
                                                        Logout
                                                        <ExitToAppIcon />
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        ) : (
                                            <Button
                                                className={color.tGrey}
                                                onClick={() =>
                                                    navigate('/login')
                                                }
                                            >
                                                Login
                                            </Button>
                                        )
                                    }
                                </AuthConsumer>
                            </Grid> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
