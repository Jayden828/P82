import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

import CreateStory from '../screens/CreateStory';
import Feed from '../screens/Feed';

const BottomTabNavigator = ()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled = {false}
        barStyle = {styles.bottomTabStyles}
        screenOptions = {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = 'book';
            } else if (route.name === 'Create Story') {
              iconName = 'pencil';
            }

            return (
              <Ionicons 
                name = {iconName} 
                size = {RFValue(25)} 
                color = {color} 
                style = {styles.icons}
              />
            );
          }
        })}
        activeColor = {"#ee8249"}
        inactiveColor = {"gray"}
        >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Create Story" component={CreateStory} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    bottomTabStyles: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});

export default BottomTabNavigator
