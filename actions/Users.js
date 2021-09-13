import {SET_USERS} from '../constants/ActionTypes';

export const getUserListStore = data => ({
  type: SET_USERS,
  payload: data,
});
