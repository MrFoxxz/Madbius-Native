import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  requestCameraPermission,
  requestMultiplePermission,
  checkPermissions,
  checkMultiplePermissions,
} from '../../permissions/android';

const Permissions = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => requestMultiplePermission()}
        title="Presion para solicitar permisos"
        color="#841584"
        accessibilityLabel="Press Here"
      />
      <Button
        onPress={() => checkMultiplePermissions()}
        title="Presiona para chequear permisos"
        color="#841584"
        accessibilityLabel="Press Here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  tittle: {
    alignSelf: 'center',
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
});

export default Permissions;
