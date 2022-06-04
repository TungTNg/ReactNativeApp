import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import PeopleList from './src/components/PeopleList';
import PeopleDetails from './src/components/PeopleDetails';

const Stack = createNativeStackNavigator();

function PeopleNavigator() {
  return (
    <Stack.Navigator initialRouteName="People List">
      <Stack.Screen name="People List" component={PeopleList} />
      <Stack.Screen name="People Details" component={PeopleDetails} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="People Navigator"
          component={PeopleNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
