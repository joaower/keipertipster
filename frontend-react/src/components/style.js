import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export const useStylesColor = makeStyles({
  green: {
    backgroundColor: '#013328!important',
  },
  black: {
    backgroundColor: '#100C0D!important',
  },
  grey: {
    backgroundColor: '#E3DCD2!important',
  },
  orange: {
    backgroundColor: '#CC8B65!important',
  },
  tGreen: {
    color: '#013328!important',
  },
  tBlack: {
    color: '#100C0D!important',
  },
  tGrey: {
    color: '#E3DCD2!important',
  },
  tOrange: {
    color: '#CC8B65!important',
  },
})

export const useStylesCard = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  displayTournament: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
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
})

export const useStylesDrawer = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
