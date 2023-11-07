import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>welcomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    padding:10,
  }
})