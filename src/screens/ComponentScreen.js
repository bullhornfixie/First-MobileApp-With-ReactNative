// How to create a React Component File 

// Step1 - import libraries we need to create a component 
// Step2 - create a component  
// Step3 - create a stylesheet 
// Step4 - we need to export the component we just created so we can it elesewhere in our project

import React from 'react';
import { StyleSheet, Text } from 'react-native';
// these are libraries needed to build a component 
// when you initially write these lines of code they fade out 
// this is because you have not made use of the variables imported (React, StyleSheet and View)

// react library is all about components 
// react-native library knows how to use those components and show on a mobile device 

// on first line we import whole library no {}
// on second line we import pieces of the library using {}


const ComponentsScreen = () => {

// const is a keyword to create a function 
// ComponentsScreen is the name of the component 
// our function is going to return some amount of 'JSX'
// JSX is a lot like HTML and tells react-native what we want to show on our device 

return <Text style={styles.textStyle}>This is the components screen</Text>
// this is a text element 
// it tells react native we want to show some text to user 

};

// it is used to create some styling to our component 
// this stylesheet changes the font size of our text element 

const styles = StyleSheet.create({

// we are passing an object to this function 
  textStyle: {
    fontSize: 30

// we then assign this function and property to the above text element

  }
});

export default ComponentsScreen;






