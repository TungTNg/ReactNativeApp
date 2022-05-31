/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
  listContainer: {
    margin: 50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'center',
  },
});

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App by Tung</Text>
      <Text style={styles.description}>Created by Tung Nguyen</Text>
      <Text style={styles.description}>Copyright © 2022</Text>
      <FlatList
        style={styles.listContainer}
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        ListHeaderComponent={() => (
          <Text style={styles.description}>List of App's sponsors</Text>
        )}
      />
    </View>
  );
};

export default App;
