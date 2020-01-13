import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import joke from './jokesReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  joke,
});

export default rootReducer;