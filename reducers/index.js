import {combineReducers} from 'redux';
import Users from './Users';
import Products from './Products';
import testingReducer from './testingReducer';

const AllReducers = combineReducers({
  testing: testingReducer,
  users: Users,
  products: Products,
});

export default AllReducers;
