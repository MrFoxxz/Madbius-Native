import {TESTING} from '../constants/ActionTypes';

export const testRedux = data => ({
  type: TESTING,
  payload: data,
});
