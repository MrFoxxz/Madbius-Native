import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>REGISTRATE</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput></TextInput>
      <Text style={styles.text}>Apellido</Text>
      <TextInput></TextInput>
      <Text style={styles.text}>Correo</Text>
      <TextInput></TextInput>
      <Button title="Registrarse" color="red" />
      <Button title="Users" onPress={() => navigation.navigate('Usuarios')} />
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

export default Register;
