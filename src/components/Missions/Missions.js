import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsPage from './MissionsPage';
import './Missions.module.css';
import { getMissions, joinMissions, leaveMissions } from '../../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
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
    <table>
      <tr>
        <th>Mission</th>
        <th>Descriptions</th>
        <th>Status</th>
      </tr>
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
    </table>
  );
};

export default Mission;
