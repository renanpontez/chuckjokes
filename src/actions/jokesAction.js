import * as types from '../constants/actionTypes';

export function updateJoke(joke) {
  return {
    type: types.UPDATE_JOKE,
    joke
  }
}
