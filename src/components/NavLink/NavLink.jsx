import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavLink = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          RocketsNDragons
        </Typography>

        <Link color="inherit" to="/">
          Profiles
        </Link>
        <Link color="inherit" to="/rockets">
          Rockets
        </Link>
        <Link color="inherit" to="/missions">
          Missions
        </Link>
        <Link color="inherit" to="/dragons">
          Dragons
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavLink;
