import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  title: {
    margin: 30,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  description: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
  },
  goDetailBtn: {
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App by Tung</Text>
      <Text style={styles.description}>Created by Tung Nguyen</Text>
      <Text style={styles.description}>Copyright © 2022</Text>
      <View style={styles.goDetailBtn}>
        <Button
          title="List of People"
          onPress={() => navigation.navigate('People Navigator')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
