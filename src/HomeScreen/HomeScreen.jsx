import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import { UserProfileContext } from '../../App';
import { useGetUserByIdQuery } from '../api/userAuthSlice';

const HomeScreen = () => {
  const { userProfile } = useContext(UserProfileContext); 
  const [ num, setNum ] = useState()

  var id = userProfile ? userProfile.id : num
  
  const [ avatar, setAvatar ] = useState("")

  const { data: user, error, isLoading } = useGetUserByIdQuery(id);

  useEffect(() => {
    setNum(Math.floor(Math.random() * (12 - 7 + 1)) + 7)
  }, [])

  return (
    <SafeAreaView style={styles.homeWrap}>
      <View >
        <Text style={styles.homeTitle}>Home</Text>
        <View style={styles.profileImage}>
          <Image source={{url:"https://reqres.in/img/faces/8-image.jpg"}} alt="..."/>
        </View>
        <Text style={styles.userName}>{user?.data.first_name} {user?.data.last_name}</Text> 
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
  },
  profileImage:{
    // backgroundColor:"green",
  }
})