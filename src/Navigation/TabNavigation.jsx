import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import UpdateProfileScreen from '../UpdateProfile/UpdateProfileScreen';
import { Ionicons } from "@expo/vector-icons";

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
            height:70,
            backgroundColor:"rgb(0,0,0)",
        },
    }

  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon:({focused}) => {
                    return <Ionicons 
                                name={ focused ? "home" : "home-outline"} 
                                size={24}
                                color={focused ? "#56C7E2" : "#ffffff"}    
                            />
                },

                tabBarLabel:({ focused }) => (
                    <Text style={{ color: focused ? "#56C7E2" : "#ffffff", fontSize:10,}}>
                        Home
                    </Text>
                )
            }}
        />
        <Tab.Screen 
            name="Update" 
            component={UpdateProfileScreen} 
            options={{
                tabBarIcon:({focused}) => {
                    return <Ionicons 
                                name={ focused ? "construct" : "construct-outline"} 
                                size={24}
                                color={focused ? "#56C7E2" : "#ffffff"}    
                            />
                },

                tabBarLabel:({ focused }) => (
                    <Text style={{ color: focused ? "#56C7E2" : "#ffffff", fontSize:10,}}>
                        Update
                    </Text>
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation;
