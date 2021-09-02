import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/rockets';
import dragons from './dragons/dragons';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  dragons,
  rocketsReducer,
  missions: missionsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
