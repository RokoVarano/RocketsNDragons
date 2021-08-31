import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListProfile from './ListProfile';

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <Typography component="h4" variant="h4">
                My profile
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography component="h4" variant="h4" />
            <ListProfile />
          </Grid>
          <Grid item xs={4}>
            <Typography component="h4" variant="h4">
              My Rockets
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography component="h4" variant="h4">
              My Missions
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
