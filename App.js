import React from "react";
import { StyleSheet, View } from "react-native";

import TopGainers from "./components/TopGainers";

export default function App() {
  return (
    <View style={styles.container}>
      <TopGainers />
    </View>
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
