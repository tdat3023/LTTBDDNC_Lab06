import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, SafeAreaView, Text } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Screen1 from "./screen1";
const Stack = createNativeStackNavigator();

export default RootComponent = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
