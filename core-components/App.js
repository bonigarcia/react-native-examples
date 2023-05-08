import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

const App = () => {
  return (
	<View style={styles.container}>
      <Text>Some text</Text>
      <Image source={require('./assets/react.png')} style={{width: 200, height: 200}} />
      <TextInput
        style={{
          width: 200,
		  height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Type in me"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
    container :{
       justifyContent: 'center', //Centered horizontally
       alignItems: 'center', //Centered vertically
       flex:1
    }
});