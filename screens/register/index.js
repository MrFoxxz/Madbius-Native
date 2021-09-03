import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  let user = {
    name: name,
    lastName: lastName,
    email: email,
  };

  let handleInput = () => {
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>REGISTRATE</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput onChangeText={setName}></TextInput>
      <Text style={styles.text}>Apellido</Text>
      <TextInput onChangeText={setLastName}></TextInput>
      <Text style={styles.text}>Correo</Text>
      <TextInput onChangeText={setEmail}></TextInput>
      <Button title="Registrarse" onPress={() => handleInput()} color="black" />
      <Button
        title="Usuarios"
        onPress={() => navigation.navigate('Usuarios')}
      />
      <Button
        title="Permisos"
        color="black"
        onPress={() => navigation.navigate('Permisos')}
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

export default Register;
