import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fakeDragons from './dragonMockAPI';

const GET_DRAGONS = 'GET_DRAGONS';
const RESERVE_DRAGON = 'RESERVE_DRAGON';

const baseURL = 'https://api.spacexdata.com/v3/dragons';

const getFakeDragons = () => async (dispatch) => {
  const mock = new MockAdapter(axios);

  mock.onGet(baseURL).reply(200, fakeDragons);

  axios.get(baseURL).then((response) => {
    const { data } = response;

    const reduced = data.reduce((result, item) => result.concat({
      id: item.id,
      name: item.name,
      type: item.type,
      flickr_images: item.flickr_images,
      reserved: false,
    }), []);

    dispatch({
      type: GET_DRAGONS,
      dragons: reduced,
    });
  });
};

const getDragons = () => async (dispatch) => {
  axios.get(baseURL).then((response) => {
    const { data } = response;

    const reduced = data.reduce((result, item) => result.concat({
      id: item.id,
      name: item.name,
      type: item.type,
      flickr_images: item.flickr_images,
      reserved: false,
    }), []);

    dispatch({
      type: GET_DRAGONS,
      dragons: reduced,
    });
  });
};

const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  id,
});

const dragons = (state = [], action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.dragons;
    case RESERVE_DRAGON: {
      const dragons = state.map((dragon) => {
        if (dragon.id === action.id) return { ...dragon, reserved: !dragon.reserved };
        return dragon;
      });
      return dragons;
    }
    default:
      return state;
  }
};

export default dragons;
export { getDragons, getFakeDragons, reserveDragon };
