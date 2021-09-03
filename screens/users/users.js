import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Users = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>USERS</Text>
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

export default Users;
