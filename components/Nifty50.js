import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Divider,
  Flex,
  Text,
  Center,
  NativeBaseProvider,
  Heading,
} from "native-base";
import marketService from "../services/market";
import { useNavigation } from "@react-navigation/native";

const StockListing = ({ stock }) => {
  const navigation = useNavigation();
  const handleTouch = () => {
    return () => {
      navigation.navigate("News", stock);
    };
  };
  return (
    <TouchableOpacity onPress={handleTouch()}>
      <Flex style={{ backgroundColor: "#eee" }} direction="row" p={4}>
        <Text width={110}>{stock.symbol}</Text>
        <Divider bg="green.500" size={3} mx={4} orientation="vertical" />
        <Text width={140}>{stock.name}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

export default function Nifty50() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    marketService
      .getNifty50Stocks()
      .then((data) => setStocks(data))
      .catch((e) => alert(e));
    console.log(stocks);
  }, []);

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <View style={styles.container}>
          <Heading
            style={styles.heading}
            alignSelf={{
              base: "center",
              md: "flex-start",
            }}
            size="xl"
          >
            Nifty 50
          </Heading>
          <Flex
            locked
            style={{ backgroundColor: "#ccc" }}
            direction="row"
            p={4}
          >
            <Heading size="md" width={110}>
              Symbol
            </Heading>
            <Divider bg="green.500" size={3} mx={4} orientation="vertical" />
            <Heading width={140} size="md">
              Company name
            </Heading>
          </Flex>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {stocks &&
              !!Object.keys(stocks).length &&
              Object.keys(stocks).map((symbol) => (
                <View key={symbol}>
                  <StockListing stock={{ symbol, name: stocks[symbol] }} />
                </View>
              ))}
          </ScrollView>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  heading: {
    marginBottom: 10,
    padding: 5,
  },
});
