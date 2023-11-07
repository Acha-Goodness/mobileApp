import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

const UpdateProfileScreen = () => {
  return (
    <SafeAreaView style={styles.updateWrap}>
      <View>
        <Text style={styles.updateTitle}>Update Profile</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput placeholder="First Name" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput placeholder="Last Name" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput placeholder="Email" placeholderTextColor={'white'} style={styles.input}/>
      </View>
      <TouchableOpacity style={styles.updateBtn} onPress={() => navigation.navigate("TabNavigation")}>
        <Text style={styles.updateBtnText}>UPDATE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  updateWrap:{
    flex:1,
    backgroundColor:"#000000",
    padding:"3%",
  },
  updateTitle:{
    color:"white",
    fontSize:30,
    fontWeight:"600",
    textAlign:"center",
  },
  inputWrap:{
    alignItems:"center",
    marginTop:"35%",
  },
  input:{
    marginVertical:"3%",
    width:"85%",
    paddingVertical:"3%",
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderColor:"white",
    color:"white",
  },
  updateBtn:{
    backgroundColor:"#56C7E2",
    width:"85%",
    alignSelf:"center",
    alignItems:"center",
    marginTop:"10%",
    paddingVertical:"3%",
    borderRadius:10,
  },
  updateBtnText:{
    fontWeight:"900",
    color:"white"
  },
})