import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, Text, Button, StyleSheet, View} from 'react-native';
import UserCard from '../../components/userCard';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {getUserListStore} from '../../actions/index.js';

const Users = ({}) => {
  const dispatch = useDispatch();

  const {usersListStore} = useSelector(state => state.users);

  useEffect(() => {
    axios.get('http://10.0.2.2:3001/api/user/get').then(response => {
      let usersData = response.data.rows;
      dispatch(getUserListStore(usersData));
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Button title="Ver store" onPress={() => console.log(usersListStore)} />
      </View>

      <View style={styles.container}>
        {usersListStore.map(val => {
          return (
            <UserCard
              key={val.id}
              id={val.id}
              name={val.name}
              lastName={val.lastname}
              email={val.email}
              comunnication={val.communication_channel}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
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
