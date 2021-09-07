import React, {useState} from 'react';
import {
  Modal,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';

const UserCard = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [communication, setCommunication] = React.useState('first');

  let editUser = () => {
    let newUserInfo = {
      name: name,
      lastName: lastName,
      email: email,
      communication: communication,
    };
    axios.put('http://10.0.2.2:3001/user/update', newUserInfo);
    setModalVisible(false);
  };

  const deleteUser = id => {
    axios.delete(`http://10.0.2.2:3001/api/user/delete/${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerH}>
        <Text style={styles.tittle}>{props.name}</Text>
        <Text style={styles.content}>{props.email}</Text>
      </View>
      <View style={styles.containerH}>
        <Text style={styles.tittle}>{props.lastName}</Text>
        <Text style={styles.content}>{props.comunnication}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.button}>
            <Text style={styles.content}>EDITAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteUser(props.id)}>
          <View style={styles.button}>
            <Text style={styles.content}>ELIMINAR</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>EDITAR USUARIO</Text>
            <View style={{margin: 10}}>
              <Text style={styles.text}>Nombre</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}></TextInput>
              <Text style={styles.text}>Apellido</Text>
              <TextInput
                style={styles.input}
                onChangeText={setLastName}></TextInput>
              <Text style={styles.text}>Correo</Text>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}></TextInput>

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
            </View>
            <View>
              <TouchableOpacity onPress={() => editUser()}>
                <View style={styles.button}>
                  <Text style={styles.content}>EDITAR</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.button}>
                  <Text style={styles.content}>CERRAR</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'black',
    padding: 20,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  containerH: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#121212ab',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  tittle: {
    color: 'white',
    fontSize: 25,
  },
  content: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#c5ced8',
    borderRadius: 10,
    fontSize: 20,
  },
});

export default UserCard;
