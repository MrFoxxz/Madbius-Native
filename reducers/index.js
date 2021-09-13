import {combineReducers} from 'redux';
import UsersInformation from './Users';
import Products from './Products';
import testingReducer from './testingReducer';

const rootReducer = combineReducers({
  testing: testingReducer,
  users: UsersInformation,
  products: Products,
});

export default rootReducer;
