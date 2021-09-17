import {applyMiddleware, createStore, compose} from 'redux';
/* import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'; */
import rootReducer from '../reducers/index';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
