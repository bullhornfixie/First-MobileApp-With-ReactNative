import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// you need to import the components you want the navigator stack to load 
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator(); 
// createStackNavigator is function that returns an object 
// containing 2 properties: Screen and Navigator.

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// NavigationContainer is a component which manages our navigation tree.
// a route can be specified by the Screen component
// here "Home" route corresponds to "HomeScreen" component

export default AppNavigator;