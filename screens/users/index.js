import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import UserCard from '../../components/userCard';

const Users = ({navigation}) => {
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3001/api/user/get').then(response => {
      setuserList(response.data.rows);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>USERS</Text>

      {userList.map(val => {
        return (
          <UserCard
            id={val.id}
            name={val.name}
            lastName={val.lastname}
            email={val.email}
            comunnication={val.communication_channel}
          />
        );
      })}
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
