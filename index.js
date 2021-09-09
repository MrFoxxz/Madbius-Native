/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as MadbiusMovile} from './app.json';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import AllReducers from './reducers/index';

const store = configureStore(AllReducers);

const MadbiusMovileApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(MadbiusMovile, () => MadbiusMovileApp);
