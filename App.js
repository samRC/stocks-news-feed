import React from "react";
import { StyleSheet, View } from "react-native";

import TopGainers from "./components/TopGainers";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from "./components/News";
import Nifty50 from "./components/Nifty50";
import Browser from "./components/Browser";
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Nifty50 />
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: "center" }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TopGainers" component={TopGainers} />
        <Stack.Screen name="Nifty50" component={Nifty50} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Browser" component={Browser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    padding: 15,
  },
});
