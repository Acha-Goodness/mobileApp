import React, { useState, createContext } from 'react'
import {SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import jwt_decode from 'jwt-decode';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import TabNavigation from './src/Navigation/TabNavigation';
import { Provider } from 'react-redux';
import { store } from "./src/api/store";
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserProfileContext = createContext(null)

export default function App() {
  const [ userProfile, setUserProfile ] = useState();
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    retriveUser()
  }, [ isLoggedIn ])

  const retriveUser = async () => {
    const JWTToken = await AsyncStorage.getItem("JWTToken");
    if(JWTToken.token !== null){
      setUserProfile(JSON.parse(JWTToken))
      setIsLoggedIn(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <UserProfileContext.Provider value={{setIsLoggedIn, userProfile, setUserProfile}}>
        <Provider store={store}>
          <NavigationContainer>
            {isLoggedIn ? <TabNavigation/> : <StackNavigation/>}
          </NavigationContainer>
        </Provider>
      </UserProfileContext.Provider>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
