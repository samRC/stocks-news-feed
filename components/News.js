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
  View,
  VStack,
} from "native-base";
import newsService from "../services/news";
import NewsArticle from "./NewsArticle";

export default function News() {
  const symbol = useRoute().params.symbol;
  const [newsArticles, setNewsArticles] = useState([]);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    newsService
      .getNewsOf(symbol)
      .then((data) => {
        setNewsArticles(data);
      })
      .catch((e) => setStatusMsg(e.response.data.error));
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <View>
          <Heading style={{ textAlign: "center" }}>{symbol}</Heading>
          {newsArticles.length == 0 && statusMsg.length == 0 && (
            <Spinner size="lg" />
          )}
          <Heading size="md" style={{ textAlign: "center", color: "crimson" }}>
            {statusMsg}
          </Heading>

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
