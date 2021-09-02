const UPDATE_ALL = 'redux/mission/UPDATE_ALL';
const JOIN_MISSION = 'redux/mission/JOIN_MISSION';
const LEAVE_MISSION = 'redux/mission/LEAVE_MISSION';

const initialState = [];

const getInfo = (payload) => ({
  type: UPDATE_ALL,
  payload,
});

const spaceXAPI = {

  getMissions() {
    const missions = fetch('https://api.spacexdata.com/v3/missions')
      .then((rawResponse) => rawResponse.json())
      .then((response) => response);

    return missions;
  },
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALL:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: true,
        };
      });

      return newState;
    }

    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: false,
        };
      });

      return newState;
    }
    default:
      return state;
  }
};

export const joinMissions = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMissions = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const getMissions = () => (dispatch) => {
  spaceXAPI.getMissions().then((response) => {
    dispatch(getInfo(
      response.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      })),

    ));
  });
};

export default missionsReducer;
