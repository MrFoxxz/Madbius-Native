import React, {useState} from 'react';
import axios from 'axios';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {postNewUser} from '../../actions/index.js';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    communication: '',
  });

  const {usersListStore} = useSelector(state => state.users);

  let submitInfo = () => {
    let userInfo = user;
    axios.post('http://10.0.2.2:3001/api/user/new', userInfo);
    dispatch(postNewUser(userInfo));
    navigation.navigate('Usuarios');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>REGISTRATE</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser({...user, name: text})}></TextInput>
      <Text style={styles.text}>Apellido</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser({...user, lastName: text})}></TextInput>
      <Text style={styles.text}>Correo</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser({...user, email: text})}></TextInput>

      <RadioButton.Group
        onValueChange={newValue => setUser({...user, communication: newValue})}
        value={user.communication}>
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

      <Button
        title="Registrarse"
        onPress={() => submitInfo() /* submitInfo() */}
        color="black"
      />
      <Button
        title="Ver Store"
        onPress={() => console.log(usersListStore) /* submitInfo() */}
        color="red"
      />
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
