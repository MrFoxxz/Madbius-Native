/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as MadbiusMovile} from './app.json';
import {Provider} from 'react-redux';
import {ReduxNetworkProvider} from 'react-native-offline';

import configureStore from './store/configureStore';

const store = configureStore();

const MadbiusMovileApp = () => (
  <Provider store={store}>
    <ReduxNetworkProvider>
      <App />
    </ReduxNetworkProvider>
  </Provider>
);

AppRegistry.registerComponent(MadbiusMovile, () => MadbiusMovileApp);
