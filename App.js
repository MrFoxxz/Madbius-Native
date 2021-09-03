/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//SCREENS
import Register from './screens/register';
import Users from './screens/users';
import Permissions from './screens/permissionsTest';

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
        <Stack.Screen name="Permisos" component={Permissions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
