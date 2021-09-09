import {TESTING} from '../constants/ActionTypes';

const INIT_STATE = {
  testing: 'ABC',
};

const testingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TESTING:
      return {
        ...state,
        testing: action.payload,
      };
    default:
      return state;
  }
};

export default testingReducer;
