/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Link } from '@reach/router';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthConsumer } from '../../context/AuthContext';

const useStyles = makeStyles({
  list: {
    width: 250,
    background: '#013328',
  },
  fullList: {
    width: 'auto',
  },
  iconColor: {
    color: '#E3DCD2',
  },
  text: {
    textDecoration: 'none',
    color: '#CC8B65',
  },
  logo: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    textAlign: 'center',
  },
});

export default function Swipeable() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side, username) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem className={classes.logo}>
            Welcome
            {username}
          </ListItem>
          <ListItem button key="Apostas">
            <ListItemIcon>
              <HomeIcon className={classes.iconColor} />
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Apostas" />
          </ListItem>
        </Link>
        <Link to="estatisticas">
          <ListItem button key="Estatisticas">
            <ListItemIcon>
              <EqualizerIcon className={classes.iconColor} />
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Estatisticas" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="login">
          {['Autenticação'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <LockOpenIcon className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText className={classes.text} primary={text} />
            </ListItem>
          ))}
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <AuthConsumer>
        {({ auth, username }) => (auth ? (
          <>
            <MenuIcon onClick={toggleDrawer('left', true)} />
            {/* <Button color="primary" variant="outlined" fullWidth onClick={toggleDrawer('left', true)}>Open Left</Button> */}

            <SwipeableDrawer
              open={state.left}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}
            >
              {sideList('left', username)}
            </SwipeableDrawer>
          </>
        ) : (
          <></>
        ))}
      </AuthConsumer>
    </div>
  );
}
