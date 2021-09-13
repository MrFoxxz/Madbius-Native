import {SET_USERS, POST_NEW_USER} from '../constants/ActionTypes';

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
    case POST_NEW_USER:
      return {
        ...state,
        usersListStore: [...state.usersListStore, action.payload],
      };
    default:
      return state;
  }
};

export default UsersInformation;
