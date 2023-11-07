import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeWrap}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeWrap:{
    flex:1,
    backgroundColor:"#000000",
    padding:"3%",
    justifyContent:"center",
  },
})