import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import spacereducer from '../redux/reducers'

const reducer = combineReducers({
  spacereducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk,logger),
);

export default store;