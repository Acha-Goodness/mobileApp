import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeWrap}>
      <View >
        <Text style={styles.homeTitle}>Home</Text>
        <Text style={styles.userName}>Acha Goodness</Text>
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
  },
  homeTitle:{
    color:"white",
    fontSize:30,
    fontWeight:"600",
    textAlign:"center",
  },
  userName:{
    color:"#56C7E2",
    fontSize:25,
    textAlign:"center",
    marginVertical:"5%",
  }
})