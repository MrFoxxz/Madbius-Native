import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, StyleSheet, View} from 'react-native';
import UserCard from '../../components/userCard';
import Loader from '../../components/loader';

const Users = ({navigation}) => {
  const [userList, setuserList] = useState([]);
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    axios.get('http://10.0.2.2:3001/api/user/get').then(response => {
      setuserList(response.data.rows);
      setTimePassed(true);
    });
  }, []);

  /*  setTimeout(function () {
    setTimePassed(true);
  }, 2000); */

  if (!timePassed) {
    return <Loader />;
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
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
      </ScrollView>
    );
  }
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
