import {SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StackNavigation/>
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
