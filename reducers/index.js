import {NEW_USER_COMMIT, GET_USERS, NEW_USER} from '../actions/index';

export default function uploads(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return state;
    case NEW_USER_COMMIT:
      return [...action.payload];
    case NEW_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
