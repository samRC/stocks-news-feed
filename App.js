import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import newsService from "./services/news";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsService.getNewsOf("mock"));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Stocks News Feed</Text>
      {!!news.length &&
        news.map((n) => (
          <Text key={n.guid} style={styles.genText}>
            {n.title}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 25,
  },
  genText: {
    color: "#000",
    textAlign: "center",
    fontSize: 15,
    padding: 2,
    margin: 2,
  },
});
