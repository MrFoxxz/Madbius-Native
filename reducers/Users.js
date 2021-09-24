import {
  SET_USERS,
  POST_NEW_USER,
  NEW_USER_DATA_COMMIT,
  NEW_USER_DATA_ROLLBACK,
} from '../constants/ActionTypes';
import axios from 'axios';

const INIT_USER_STATE = {
  usersListStore: [],
};

const UsersInformation = (state = INIT_USER_STATE, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        usersListStore: action.payload,
      };
    /* ---------------------------------------------------------------- */
    case POST_NEW_USER:
      console.log('POST_NEW_USER');
      /* axios.post('http://10.0.2.2:3001/api/user/new', action.payload); */
      return {
        ...state,
        usersListStore: [...state.usersListStore, action.payload],
      };
    case NEW_USER_DATA_COMMIT:
      console.log('NEW_USER_DATA_COMMIT');
      return {
        ...state,
      };
    case NEW_USER_DATA_ROLLBACK:
      console.log('NEW_USER_DATA_ROLLBACK');
      return {
        ...state,
      };
    /* ---------------------------------------------------------------- */
    default:
      return state;
  }
};

export default UsersInformation;
