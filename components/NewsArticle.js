import React from "react";
import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function NewsArticle({ article }) {
  const navigation = useNavigation();

  const handleTouch = () => {
    return () => {
      navigation.navigate("Browser", article);
    };
  };
  return (
    <TouchableOpacity onPress={handleTouch()}>
      <Box>
        <Text textAlign="center">{article.title}</Text>
        <Text textAlign="center">{article.pubDate}</Text>
      </Box>
    </TouchableOpacity>
  );
}
