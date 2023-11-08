import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfileContext } from '../../App';
import { useEditUserMutation, useGetUserByIdQuery } from '../api/userAuthSlice';

const UpdateProfileScreen = () => {
  const { setIsLoggedIn, userProfile } = useContext(UserProfileContext);
  const [ num, setNum ] = useState()

  useEffect(() => {
    setNum(Math.floor(Math.random() * (12 - 7 + 1)) + 7)
  }, [])

  var id = userProfile ? userProfile.id : num;
  
  const { data: userData, error, isLoading } = useGetUserByIdQuery(id);
  const [ user, setUser ] = useState(userData?.data);
  
  const [ loading, setLoading ] = useState(false);

  const [ editUser ] = useEditUserMutation();

  const handleOnchangeText = (text, name) => {
    setUser({
      ...user,
      [name] : text
    })
  }

  const handleUpdateUser = () => {
    setLoading(true)
    const updatedUserData = {user}
    editUser(updatedUserData)
    .then(res => {
      console.log(res)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  } 

  const logOut = () => {
    AsyncStorage.removeItem("JWTToken");
    setIsLoggedIn(false)
  }

  return (
    <SafeAreaView style={styles.updateWrap}>
      <View>
        <Text style={styles.updateTitle}>Update Profile</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput value={user?.first_name} placeholder="First Name" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "first_name")}/>
        <TextInput value={user?.last_name} placeholder="Last Name" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "last_name")}/>
        <TextInput value={user?.email} placeholder="Email" placeholderTextColor={'grey'} style={styles.input} onChangeText={(text) => handleOnchangeText(text, "email")}/>
      </View>
      <TouchableOpacity style={styles.updateBtn} onPress={handleUpdateUser}>
        {loading ? <ActivityIndicator color="#ffffff"/> : <Text style={styles.updateBtnText}>UPDATE</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutbtn} onPress={logOut}>
        <FontAwesome name="power-off" size={20} color="red"/>
        <Text style={styles.logoutText}>Log Out</Text>
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
  logoutbtn:{
    flexDirection:"row",
    width:"85%",
    marginTop:"5%",
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
  },
  logoutText:{
    color:"red",
    fontSize:15,
    marginLeft:5,
    fontWeight:"500"
  }
})