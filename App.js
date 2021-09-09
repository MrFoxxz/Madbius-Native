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

/* npx react-native run-android */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registro"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Usuarios"
          options={{headerShown: false}}
          component={Users}
        />
        <Stack.Screen
          name="Permisos"
          options={{headerShown: false}}
          component={Permissions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
