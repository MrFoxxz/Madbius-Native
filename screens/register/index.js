import React, {useState} from 'react';
import axios from 'axios';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [communication, setCommunication] = React.useState('');

  let submitInfo = () => {
    let userInfo = {
      name: name,
      lastName: lastName,
      email: email,
      communication: communication,
    };
    axios.post('http://10.0.2.2:3001/api/user/new', userInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>REGISTRATE</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput style={styles.input} onChangeText={setName}></TextInput>
      <Text style={styles.text}>Apellido</Text>
      <TextInput style={styles.input} onChangeText={setLastName}></TextInput>
      <Text style={styles.text}>Correo</Text>
      <TextInput style={styles.input} onChangeText={setEmail}></TextInput>

      <RadioButton.Group
        onValueChange={newValue => setCommunication(newValue)}
        value={communication}>
        <View>
          <Text>Zoom</Text>
          <RadioButton value="Zoom" />

          <Text>Discord</Text>
          <RadioButton value="Discord" />

          <Text>Meet</Text>
          <RadioButton value="Meet" />

          <Text>BlackBoard</Text>
          <RadioButton value="BlackBoard" />
        </View>
      </RadioButton.Group>

      <Button title="Registrarse" onPress={() => submitInfo()} color="black" />
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
  input: {
    backgroundColor: '#c5ced8',
    borderRadius: 10,
    fontSize: 20,
  },
});

export default Register;
