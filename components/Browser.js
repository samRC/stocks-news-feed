import { useRoute } from "@react-navigation/native";
import React from "react";

import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function Browser() {
  const url = useRoute().params.link;
  return (
    <View style={{ flex: 1 }}>
      <WebView style={{ flex: 1 }} source={{ uri: url }} />
    </View>
  );
}
