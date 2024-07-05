import * as React from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
  Text,
} from "react-native-paper";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    if (email === "user@example.com" && password === "password123") {
      setError("");
      alert("Login successful!");
    } else {
      setError("Invalid email or password");
    }
    navigation.navigate("Home")
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button mode="text" onPress={handleLogin} style={styles.button}>
        Esqueci minha senha
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
