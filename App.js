import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Appbar, Checkbox, List, PaperProvider } from "react-native-paper";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import NewTask from "./Screens/NewTask";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

export default function App() {
  const Stack = createStackNavigator();

  const firebaseConfig = {
    apiKey: "AIzaSyD-HWfn0gDrzzq1fB3hEWDmBf3JmabLoAc",
    authDomain: "apptodolistcursorn.firebaseapp.com",
    projectId: "apptodolistcursorn",
    storageBucket: "apptodolistcursorn.appspot.com",
    messagingSenderId: "560456388773",
    appId: "1:560456388773:web:a19f09fa3993d4373ffd4c"
  };

  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })

 // alert(`O app firebase ${app.options.projectId} foi iniciado`);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NewTask" component={NewTask}
          />
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
