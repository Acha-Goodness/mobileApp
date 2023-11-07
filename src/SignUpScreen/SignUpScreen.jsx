import React from 'react'
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.signWrap}>
      <View>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput placeholder="First Name" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput placeholder="Last Name" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput placeholder="Email" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput placeholder="Password" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput placeholder="Confirm Password" placeholderTextColor={'white'} style={styles.input}/>
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate("TabNavigation")}>
        <Text style={styles.signUpBtnText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  signWrap:{
    flex:1,
    backgroundColor:"#000000",
    padding:"3%",
    justifyContent:"center",
  },
  signUpText:{
    color:"white",
    textAlign:"center",
    fontSize:25,
    fontWeight:"900",
  },
  inputWrap:{
    alignItems:"center",
    marginTop:"20%",
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
  signUpBtn:{
    backgroundColor:"#56C7E2",
    width:"85%",
    alignSelf:"center",
    alignItems:"center",
    marginTop:"10%",
    paddingVertical:"3%",
    borderRadius:10,
  },
  signUpBtnText:{
    fontWeight:"900",
    color:"white"
  },
})