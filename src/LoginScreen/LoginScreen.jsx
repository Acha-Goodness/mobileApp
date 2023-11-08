import React, { useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLoginMutation } from '../api/userAuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfileContext } from '../../App';
import { jwtDecode } from 'jwt-decode';


const LoginScreen = ({ navigation }) => {

  const { setIsLoggedIn, setUserProfile } = useContext(UserProfileContext);

  const loginData = {
      email:"",
      password:""
  }

  const [ log, setLog ] = useState(loginData)
  const [ loading, setLoading ] = useState(false);
  const [ login ] = useLoginMutation();

  const handleOnchangeText = (text, name) => {
    setLog({
      ...log,
      [name] : text
    })
  }

  const handleLogIn = () => {
    setLoading(true)
    login(log)
    .then(res => {
      console.log(res.data)
      const JWTTOKEN = res.data.token
      // AsyncStorage.setItem("JWTTOKEN", JWTTOKEN)
      setIsLoggedIn(true)
      setLoading(false)
      setLog("")
    }).catch (err => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <SafeAreaView style={styles.loginWrap}>
      <View>
        <Text style={styles.loginText}>LOGIN</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput value={log.email} placeholder="Email" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "email")}/>
        <TextInput value={log.password} placeholder="Password" placeholderTextColor={'grey'} style={styles.input}  onChangeText={(text) => handleOnchangeText(text, "password")}/>
      </View>
      <View style={styles.signUpWrap}>
        <Text style={styles.signUpText}>Don't have an account? <Text onPress={() => navigation.navigate("SignUp")} style={styles.upBtn}>SIGN UP</Text></Text>
      </View>
      <TouchableOpacity style={styles.signInBtn} onPress={handleLogIn}>
        {loading ? <ActivityIndicator color="#ffffff"/> : <Text style={styles.signBtnText}>SIGN IN</Text>}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginWrap:{
    flex:1,
    backgroundColor:"#000000",
    padding:"3%",
    justifyContent:"center",
  },
  loginText:{
    color:"white",
    textAlign:"center",
    fontSize:25,
    fontWeight:"900",
  },
  inputWrap:{
    alignItems:"center",
    marginTop:"30%",
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
  signInBtn:{
    backgroundColor:"#56C7E2",
    width:"85%",
    alignSelf:"center",
    alignItems:"center",
    marginTop:"10%",
    paddingVertical:"3%",
    borderRadius:10,
  },
  signBtnText:{
    fontWeight:"900",
    color:"white",
  },
  signUpWrap:{
    width:"85%",
    alignSelf:"center",
  },
  signUpText:{
    color:"white",
  },
  upBtn:{
    color:"#56C7E2",
    fontWeight:"500",
  }
})