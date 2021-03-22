import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const HomeScreen = ({ navigation }) => { 
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome To Indoor Jungle!</Text>
    <Text>{"\n"}</Text>
    <Image source={require('../../assets/cactus.png')} style={styles.img} />
    <Button 
      title="Enter" 
      color="black"
      onPress={() => navigation.navigate('Plants', {screen: 'PlantScreen'})}/>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'green',
    fontSize: 23,
    textAlign: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
});

export default HomeScreen;





