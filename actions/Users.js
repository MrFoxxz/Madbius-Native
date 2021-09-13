import {SET_USERS, POST_NEW_USER} from '../constants/ActionTypes';

export const getUserListStore = data => ({
  type: SET_USERS,
  payload: data,
});

export const postNewUser = data => ({
  type: POST_NEW_USER,
  payload: data,
});
