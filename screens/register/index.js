import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, StyleSheet, Alert, Text, TextInput, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {postNewUser, getUserListStore} from '../../actions/index.js';
//Geolocation
import Geolocation from '@react-native-community/geolocation';
//Permissions
import {requestLocationPermission} from '../../permissions/android';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    communication: '',
  });
  const [posicion, setPosicion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: null,
    longitudeDelta: null,
  });

  useEffect(() => {
    requestLocationPermission();
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = position.coords;
        const coords = {
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          accuracy: initialPosition.accuracy,
        };

        const oneDegreeOfLongitudeInMeters = 111.32;
        const circunference = 40075 / 360;

        const latDelta =
          coords.accuracy * (1 / (Math.cos(coords.latitude) * circunference));
        const lonDelta = coords.accuracy / oneDegreeOfLongitudeInMeters;

        setPosicion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: latDelta,
          longitudeDelta: lonDelta,
        });
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  /*   const {usersListStore} = useSelector(state => state.users); */

  let getLocation = () => {
    console.log(posicion);
  };

  let submitInfo = () => {
    let userInfo = user;
    /* axios.post('http://10.0.2.2:3001/api/user/new', userInfo); */
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

      <Button title="Registrarse" onPress={() => submitInfo()} color="black" />
      {/* <Button
        title="Ver Store"
        onPress={() => console.log(usersListStore)}
        color="red"
      /> */}
      <Button
        title="get location"
        onPress={() => getLocation()}
        color="green"
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
