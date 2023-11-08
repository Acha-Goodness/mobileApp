import React, { useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSignUpMutation } from '../api/userAuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfileContext } from '../../App';
import { jwtDecode } from 'jwt-decode';

const SignUpScreen = ({ navigation }) => {

  const { setIsLoggedIn, setUserProfile } = useContext(UserProfileContext);

  const userData = {
    email:"",
    password:"",
  }

  const [ user, setUser ] = useState(userData);
  const [ loading, setLoading ] = useState(false);
  const [ signUp ] = useSignUpMutation();

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
        setUserProfile(res.data)
        const JWTToken = JSON.stringify(res.data)
        AsyncStorage.setItem("JWTToken", JWTToken )
        setIsLoggedIn(true)
        setLoading(false)
        setUser("")
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
        <TextInput value={user.email} placeholder="Email" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "email")}/>
        <TextInput value={user.password} placeholder="Password" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "password")}/>
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