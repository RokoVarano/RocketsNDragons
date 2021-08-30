import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragons from './dragons/dragons';

const reducer = combineReducers({
  dragons,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
