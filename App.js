import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import RootComponent from "./src/Screens/index";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark";
  return <RootComponent />;
};

export default App;
