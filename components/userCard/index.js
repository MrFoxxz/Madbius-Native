import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

const UserCard = props => {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View style={styles.button}>
                <Text style={styles.content}>CERRAR</Text>
              </View>
            </TouchableOpacity>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
});

export default UserCard;
