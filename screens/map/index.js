import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Modal,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
//Geolocation
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  ProviderPropType,
} from 'react-native-maps';
//Permissions
import {requestLocationPermission} from '../../permissions/android';

const Map = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.button}>
            <Text style={styles.content}>VER EL MAPA</Text>
          </View>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              initialRegion={{
                latitude: posicion.latitude,
                longitude: posicion.longitude,
                latitudeDelta: posicion.latitudeDelta,
                longitudeDelta: posicion.longitudeDelta,
              }}>
              <Marker
                coordinate={{
                  latitude: 53.55108333333333,
                  longitude: -0.04538558160834163,
                }}
              />
            </MapView>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View style={styles.button}>
                <Text style={styles.content}>CERRAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View>
        <Text>MAPA</Text>
        <Text>{'latitude:' + posicion.latitude}</Text>
        <Text>{'longitude:' + posicion.longitude}</Text>
        <Text>{'latitudeDelta:' + posicion.latitudeDelta}</Text>
        <Text>{'longitudeDelta:' + posicion.longitudeDelta}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 'auto',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#121212ab',
  },
  modalView: {
    width: 400,
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
    marginTop: 150,
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

export default Map;

{
  /* <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 53.55108333333333,
            longitude: -0.04538558160834163,
            latitudeDelta: 9.993681666666667,
            longitudeDelta: 0.044915558749550846,
          }}>
          <Marker
            coordinate={{
              latitude: 53.55108333333333,
              longitude: -0.04538558160834163,
            }}
          />
        </MapView> */
}
