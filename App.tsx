import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider } from "native-base";
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
const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
        <StatusBar style="auto" />
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            variant="underlined"
            placeholder="Username"
            onChangeText={(email) => setEmail(email)}
            InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} mr="2" color="muted.400" />}
          />
          <Input
            variant="underlined"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} mr="2" color="muted.400" />}
          />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </Stack>


      </View>
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
  inputView: {
    // backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderBottomColor: "#333",
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderBottomColor: "#333",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    // width: "80%",
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
});