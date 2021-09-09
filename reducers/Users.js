import {NEW_USER_COMMIT, GET_USERS, NEW_USER, TESTING} from '../actions/index';

const INIT_STATE = {
  testing: 'ABC',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return state.users;
    case NEW_USER_COMMIT:
      return [...action.payload];
    case NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case TESTING:
      return {
        ...state,
        testing: action.payload,
      };
    default:
      return state;
  }
};
