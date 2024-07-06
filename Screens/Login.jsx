import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        // iremos criar a logica de autenticacao aqui (firebase)
        if (password == "123")
            navigation.navigate("Home")
        else setError("senha incorreta");
    }

    function handleForget(){

    }

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
                label="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            {error ? <Text style={styles.error} >{error}</Text> : null}

            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
            </Button>
            <Button mode="text" onPress={handleForget} style={styles.button}>
                Esqueci minha senha
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
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
        textAlign: "center"
    }
})