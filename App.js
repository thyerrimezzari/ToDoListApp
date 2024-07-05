import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import {
  Appbar,
  Checkbox,
  DefaultTheme,
  Icon,
  IconButton,
  List,
  PaperProvider,
} from "react-native-paper";
import Home from "./Screens/Home";
import NewTask from "./Screens/NewTask";
import Login from "./Screens/Login";

// Definindo um tema personalizado
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db', // Cor primária personalizada (Azul Claro)
    accent: '#e74c3c', // Cor de destaque personalizada (Vermelho)
    background: '#ecf0f1', // Cor de fundo personalizada (Cinza Claro)
    surface: '#ffffff', // Cor de superfície personalizada (Branco)
    text: '#2c3e50', // Cor do texto personalizada (Cinza Escuro)
    error: '#c0392b', // Cor de erro personalizada (Vermelho Escuro)
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <IconButton icon="plus" onPress={() => {navigation.navigate("Nova Tarefa")}}></IconButton>
              ),
            })}
          />
          <Stack.Screen name="Nova Tarefa"  component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    marginHorizontal: 10,
  },
});
