import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSignUpMutation } from '../api/userAuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {

  const userData = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirmPassword:""
  }

  const [ user, setUser ] = useState(userData);
  const [ loading, setLoading ] = useState(false);
  const [  signUp ] = useSignUpMutation();

  const handleOnchangeText = (text, name) => {
    setUser({
      ...user,
      [name] : text
    })
  }

  const handleSignUp = () => {
    setLoading(true)
    signUp(user)
    .then(res => {
      const JWTtoken = res.data.token
      AsyncStorage.setItem(JWTtoken)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <SafeAreaView style={styles.signWrap}>
      <View>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </View>
      <View style={styles.inputWrap}>
        {/* <TextInput value={user.first_name} placeholder="First Name" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "first_name")}/>
        <TextInput value={user.last_name} placeholder="Last Name" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "last_name")}/> */}
        <TextInput value={user.email} placeholder="Email" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "email")}/>
        <TextInput value={user.password} placeholder="Password" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "password")}/>
        {/* <TextInput value={user.confirmPassword} placeholder="Confirm Password" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "confirmPassword")}/> */}
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
        {loading ? <ActivityIndicator color="#ffffff"/> : <Text style={styles.signUpBtnText}>SIGN UP</Text>}
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