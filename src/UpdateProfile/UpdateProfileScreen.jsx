import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const UpdateProfileScreen = () => {
  return (
    <SafeAreaView style={styles.updateWrap}>
      <View>
        <Text>Update Profile Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  updateWrap:{
    flex:1,
    backgroundColor:"#000000",
    padding:"3%",
    justifyContent:"center",
  },
})