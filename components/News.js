import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Divider,
  Heading,
  NativeBaseProvider,
  ScrollView,
  Spinner,
  Text,
  View,
  VStack,
} from "native-base";
import newsService from "../services/news";

const NewsArticle = ({ article }) => {
  return (
    <Box>
      <Text>{article.title}</Text>
    </Box>
  );
};

export default function News() {
  const symbol = useRoute().params.symbol;
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    newsService
      .getNewsOf(symbol)
      .then((data) => {
        setNewsArticles(data);
      })
      .catch((e) => alert(e));
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <View>
          <Heading>News of: {symbol}</Heading>
          {newsArticles.length == 0 && <Spinner size="lg" />}

          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <VStack space={2} alignItems="center" width="100%">
              {newsArticles.map((x) => (
                <Box key={x.guid}>
                  <NewsArticle article={x} />
                  <Divider my={2} />
                </Box>
              ))}
            </VStack>
          </ScrollView>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}
