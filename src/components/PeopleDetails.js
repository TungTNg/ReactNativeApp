import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
  user: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'left',
  },
  userImage: {
    width: '100%',
    height: '50%',
  },
});

const PeopleDetails = ({route, navigation}) => {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.user}>
        Full Name: {`${user.firstname} ${user.lastname}`}
      </Text>
      <Text style={styles.user}>Username: {user.username}</Text>
      <Text style={styles.user}>Email: {user.email}</Text>
      <Text style={styles.user}>Website: {user.website}</Text>
      <Text style={styles.user}>Image: </Text>
      <Image
        style={styles.userImage}
        source={{
          uri: `${user.image}${Math.random()}`,
        }}
      />
    </View>
  );
};

export default PeopleDetails;
