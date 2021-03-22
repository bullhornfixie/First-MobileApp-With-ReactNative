import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// you need to import the components you want the navigator stack to load 
import HomeScreen from '../screens/HomeScreen';
import PlantScreen from '../screens/PlantScreen';

const Stack = createStackNavigator(); 

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plants" component={PlantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;