import {GET_USERS} from '../constants/ActionTypes';

export const getUserListStore = data => ({
  type: GET_USERS,
  payload: data,
});
