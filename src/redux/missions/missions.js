const UPDATE_ALL = 'redux/mission/UPDATE_ALL';

const initialState = [];

const getInfo = (payload) => ({
  type: UPDATE_ALL,
  payload,
});

const spaceXAPI = {
  getRockets() {
    const rockets = fetch('https://api.spacexdata.com/v3/rockets')
      .then((rawResponse) => rawResponse.json())
      .then((response) => response);

    return rockets;
  },

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
    default:
      return state;
  }
};

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