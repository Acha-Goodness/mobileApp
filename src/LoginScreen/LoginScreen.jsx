import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.loginWrap}>
      <View>
        <Text style={styles.loginText}>LOGIN</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput label="Username" placeholder="Username" placeholderTextColor={'white'} style={styles.input}/>
        <TextInput label="Username" placeholder="Password" placeholderTextColor={'white'} style={styles.input}/>
      </View>
      <View style={styles.signUpWrap}>
        <Text style={styles.signUpText}>Don't have an account? <Text onPress={() => navigation.navigate("SignUp")} style={styles.upBtn}>SIGN UP</Text></Text>
      </View>
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signBtnText}>SIGN IN</Text>
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
  },
  signInBtn:{
    backgroundColor:"white",
    width:"85%",
    alignSelf:"center",
    alignItems:"center",
    marginTop:"10%",
    paddingVertical:"3%",
    borderRadius:10,
  },
  signBtnText:{
    fontWeight:"900"
  },
  signUpWrap:{
    width:"85%",
    alignSelf:"center",
  },
  signUpText:{
    color:"white",
  },
  upBtn:{
    color:"gold",
    fontWeight:"500",
  }
})