import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// import { Ionicons } from '@expo/vector-icons';
// import { StyleSheet, Text, View } from "react-native";
// import Welcome from "../../home/welcome/Welcome"
// import HomeScreen from "../../HomeScreen/HomeScreen"
const BottomTab = createBottomTabNavigator();

const BottomNavigation = (props) => {
  const routeList = props.screenList;
  return (
    
    <NavigationContainer independent={true}>
      <BottomTab.Navigator>
      {routeList.map((route) => (
        <BottomTab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;


{/* <BottomTab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} /> */}