import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Input, Icon, Stack, NativeBaseProvider, Center, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Login from "./screens/Login";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


const App: React.FC = () => {
  const [userName , setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
    <Login />
    </NativeBaseProvider>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  loginBtn: {
    maxWidth: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#70B5F9",
    color: "#fff",
  },
  loginText: {
    color: "#fff",
  },
  logoutText: {
    color: "#70B5F9",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  logoutBtn: {
    width: 140,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#70B5F9",
    color: "#fff",
  }
});