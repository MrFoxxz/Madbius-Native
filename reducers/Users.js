import {GET_USERS} from '../actions/index';

const INIT_USER_STATE = {
  usersListStore: [],
};

const UsersInformation = (state = INIT_USER_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      state.usersListStore.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default UsersInformation;
