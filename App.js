import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Text>This is the homepage</Text>
          <Image source= 
          {{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
          style={{width: 200, height:200}}/>  
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
