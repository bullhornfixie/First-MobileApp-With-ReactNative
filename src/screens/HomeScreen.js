import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeScreen = () => { 
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome To Indoor Jungle!</Text>
    <Text>{"\n"}</Text>
    <Image source={require('../../assets/cactus.png')} style={styles.img} />
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





