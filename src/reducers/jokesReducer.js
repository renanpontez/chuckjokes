import { UPDATE_JOKE } from '../constants/actionTypes';
import initialState from './initialState';

export default function jokesReducer(state = initialState.joke, action) {
  switch (action.type) {
    case UPDATE_JOKE:
      return action.joke ? { ...state, ...action.joke } : null;

    default:
      return state;
  }
}