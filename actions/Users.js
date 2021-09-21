import {
  SET_USERS,
  POST_NEW_USER,
  NEW_USER_DATA_COMMIT,
  NEW_USER_DATA_ROLLBACK,
} from '../constants/ActionTypes';

export const getUserListStore = data => ({
  type: SET_USERS,
  payload: data,
});

export const postNewUser = data => ({
  type: POST_NEW_USER,
  payload: data,
  meta: {
    offline: {
      // the network action to execute:
      effect: {},
      // action to dispatch when effect succeeds:
      commit: {type: 'NEW_USER_DATA_COMMIT', meta: {data}},
      // action to dispatch if network action fails permanently:
      rollback: {type: 'NEW_USER_DATA_ROLLBACK', meta: {data}},
    },
  },
});
