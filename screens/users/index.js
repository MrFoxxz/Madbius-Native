import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, Button, StyleSheet, View} from 'react-native';
import UserCard from '../../components/userCard';
import Loader from '../../components/loader';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {testRedux} from '../../actions';

let data = 'REDUX TEST';

const Users = ({}) => {
  const dispatch = useDispatch();
  const [userList, setuserList] = useState([]);
  const [timePassed, setTimePassed] = useState(false);

  const reduxTest = useSelector(state => state.testing);

  useEffect(() => {
    axios.get('http://10.0.2.2:3001/api/user/get').then(response => {
      setuserList(response.data.rows);
      setTimePassed(true);
    });
  }, []);

  if (!timePassed) {
    return <Loader />;
  } else {
    return (
      <ScrollView>
        <View>
          <Button title="Ver store" onPress={() => console.log(reduxTest)} />
          <Button
            title="Modificar store"
            onPress={() => dispatch(testRedux(data))}
          />
        </View>

        <View style={styles.container}>
          {userList.map(val => {
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
