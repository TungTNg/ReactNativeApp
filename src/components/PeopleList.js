import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  description: {
    marginTop: 35,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'center',
  },
});

const PeopleList = ({navigation}) => {
  const [peopleList, setPeopleList] = useState([]);

  const onSelectUser = user => {
    navigation.navigate('People Details', {user});
  };

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=20')
      .then(response => response.json())
      .then(json => {
        setPeopleList(json.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={peopleList}
        renderItem={({item}) => (
          <Text style={styles.item} onPress={() => onSelectUser(item)}>
            {`${item.firstname} ${item.lastname}`}
          </Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.description}>List of Users</Text>
        )}
      />
    </View>
  );
};

export default PeopleList;
