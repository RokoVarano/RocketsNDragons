import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import MissionsPage from './MissionsPage';
import './Missions.module.css';
import { getMissions, joinMissions, leaveMissions } from '../../redux/missions/missions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  card: {
    marginTop: 100,
  },
});

const Mission = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const missionData = useSelector((state) => state.missions);

  const joinMissionHandler = (id) => {
    dispatch(joinMissions(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMissions(id));
  };

  useEffect(() => {
    if (missionData.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <Container>
      <TableContainer component={Paper} className={classes.card}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mission</TableCell>
              <TableCell align="right">Descriptions</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">{String.fromCharCode(8194)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {missionData.map((data) => (
              <MissionsPage
                key={data.mission_id}
                joinMissionHandler={joinMissionHandler}
                leaveMissionHandler={leaveMissionHandler}
                id={data.mission_id}
                name={data.mission_name}
                description={data.description}
                reserved={data.reserved}
              />

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

  );
};

export default Mission;
