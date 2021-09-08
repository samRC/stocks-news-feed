import React from "react";
import { Box, Text } from "native-base";

export default function NewsArticle({ article }) {
  return (
    <Box>
      <Text textAlign="center">{article.title}</Text>
      <Text textAlign="center">{article.pubDate}</Text>
    </Box>
  );
}
