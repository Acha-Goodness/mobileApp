import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import bigPanda from "../../assets/bigPanda.png";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.welcomeWrap}>
      <View>
        <Text style={styles.headerText}>WELCOME</Text>
        <View style={styles.imageWrap}>
          <Image source={bigPanda} alt="..."/>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
           <Text style={styles.btnText}>START</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  welcomeWrap:{
    flex:1,
    backgroundColor:"#000000",
    padding:"3%",
  },
  headerText:{
    color:"white",
    alignSelf:"center",
    fontSize:25,
    fontWeight:"900",
  },
  imageWrap:{
    marginTop:"30%",
    paddingVertical:"8%",
    alignSelf:"center",
    justifyContent:"center",
  },
  btn:{
    backgroundColor:"#56C7E2",
    alignItems:"center",
    paddingVertical:"4%",
    width:"80%",
    borderRadius:10,
    alignSelf:"center",
    position:"absolute",
    bottom:5
  },
  btnText:{
    fontSize:15,
    fontWeight:"600",
    color:"white",
  }
})