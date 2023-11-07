import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import UpdateProfileScreen from '../UpdateProfile/UpdateProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const screenOptions = {
        tabBarShowLabel:true,
        tabBarHideOnKeyboard: true,
        headerShown:false,
        tabBarStyle:{
            position:"absolute",
            bottom:0,
            right:0,
            left:0,
            elevation:0,
            height: displayTab ? 70 : 0,
            backgroundColor:"rgb(0,0,0)",
        },
    }
    
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Update" component={UpdateProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation;
