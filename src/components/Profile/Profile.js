import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
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
  const rockets = useSelector((state) => state.rocketsReducer.rockets.reduce((acc, item) => {
    if (item.reserved) return acc.concat({ id: item.id, name: item.rocket_name });
    return acc;
  },
  []));
  const dr = useSelector((state) => (state.dragons.filter((dragon) => dragon.reserved === true)));
  const missionsList = useSelector((state) => state.missions);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);

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
            <Typography component="h4" variant="h4">
              My Rockets
            </Typography>
            <ListProfile data={rockets} />
          </Grid>
          <Grid item xs={4}>
            <Typography component="h4" variant="h4">
              My Dragons
            </Typography>
            <ListProfile data={dr} />
          </Grid>
          <Grid item xs={4}>
            <Typography component="h4" variant="h4">
              My Missions
            </Typography>
            <ul>
              {reservedMissions.map((mission) => (
                <div key={mission.mission_id}>{mission.mission_name}</div>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
