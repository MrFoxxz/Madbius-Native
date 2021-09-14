import {combineReducers} from 'redux';
import UsersInformation from './Users';
import Products from './Products';
import testingReducer from './testingReducer';
import {reducer as network} from 'react-native-offline';

const rootReducer = combineReducers({
  testing: testingReducer,
  users: UsersInformation,
  products: Products,
  network,
});

export default rootReducer;
