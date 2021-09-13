import {SET_USERS} from '../constants/ActionTypes';

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
    default:
      return state;
  }
};

/* const UsersInformation = (state = INIT_USER_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersListStore: [...state.usersListStore, action.payload],
      };
    default:
      return state;
  }
}; */

export default UsersInformation;
