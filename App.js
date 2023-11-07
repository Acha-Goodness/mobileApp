import {SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import WelcomeScreen from "./src/WelcomeScreen/WelcomeScreen";
import LoginScreen from './src/LoginScreen/LoginScreen';
import SignUpScreen from './src/SignUpScreen/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
              <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
              <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
              <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
