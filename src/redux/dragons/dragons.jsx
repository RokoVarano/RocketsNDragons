import axios from 'axios';

const GET_DRAGONS = 'GET_DRAGONS';

const baseURL = 'https://api.spacexdata.com/v3/dragons';

const getDragons = () => async (dispatch) => {
  console.log('YAY');

  axios.get(baseURL).then((response) => {
    const { data } = response;

    const reduced = data.reduce((result, item) => result.concat({
      id: item.id,
      name: item.name,
      type: item.type,
      flickr_images: item.flickr_images,
    }), []);

    dispatch({
      type: GET_DRAGONS,
      dragons: reduced,
    });
  });
};

const dragons = (state = [], action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.dragons;
    default:
      return state;
  }
};

export default dragons;
export { getDragons };
