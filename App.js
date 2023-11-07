import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./src/WelcomeScreen/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <WelcomeScreen/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
