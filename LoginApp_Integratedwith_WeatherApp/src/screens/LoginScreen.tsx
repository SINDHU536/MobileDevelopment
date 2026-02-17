import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import { logDebug, logError, logWarning } from '../utils/logger';

// ✅ Add navigation prop here
const LoginScreen = ({ navigation }: any) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {

    logDebug("Login button pressed");

    logDebug("Username", username);
    logDebug("Password", password);

    if (username.trim() === "" || password.trim() === "") {

      logWarning("Empty fields");

      setMessage("Please enter username and password");
      return;
    }

    if (username === "admin" && password === "1234") {

      logDebug("Login successful");

      setMessage("Login Successful");

      // ✅ Navigation added here
      navigation.navigate("Home");

    } else {

      logError("Invalid credentials");

      setMessage("Invalid username or password");

    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Login App
      </Text>

      <CustomInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />

      <CustomInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={styles.message}>
        {message}
      </Text>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

  message: {
    marginTop: 20,
    fontSize: 18,
  },

});
