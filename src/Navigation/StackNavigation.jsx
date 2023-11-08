import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import LoginScreen from '../LoginScreen/LoginScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigation;
