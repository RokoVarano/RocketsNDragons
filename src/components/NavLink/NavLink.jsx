import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  logo: {
    maxWidth: 52,
    marginRight: 30,
  },
}));

const NavLink = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = (route) => {
    history.push(route);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src="./planet_logo.png" alt="logo" className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          Rockets N Dragons
        </Typography>

        <Button color="inherit" onClick={() => handleOnClick('/')}>
          Profile
        </Button>
        <Button color="inherit" onClick={() => handleOnClick('/rockets')}>
          Rockets
        </Button>
        <Button color="inherit" onClick={() => handleOnClick('/missions')}>
          Missions
        </Button>
        <Button color="inherit" onClick={() => handleOnClick('/dragons')}>
          Dragons
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavLink;
