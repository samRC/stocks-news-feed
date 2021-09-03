import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

export default function News() {
  const route = useRoute();
  return (
    <View>
      <Text>News of: {route.params.symbol}</Text>
    </View>
  );
}
