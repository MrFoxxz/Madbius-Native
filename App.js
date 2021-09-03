/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './screens/register/register';
import Users from './screens/users/users';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registro"
          component={Register}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Usuarios" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
