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

const SingleStock = ({ stock }) => {
  const handleTouch = (stock) => {
    return () => {
      alert(`Touched: ${stock.symbol}`);
    };
  };
  return (
    <TouchableOpacity onPress={handleTouch(stock)}>
      <Flex style={{ backgroundColor: "#eee" }} direction="row" p={4}>
        <Text width={150}>{stock.symbol}</Text>
        <Divider bg="green.500" size={3} mx={4} orientation="vertical" />
        <Text width={100}>{stock.percentChange}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

export function TopGainers() {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    marketService
      .getTopGainers()
      .then((data) => setGainers(data))
      .catch((e) => alert(e));
  }, []);

  return (
    <View style={styles.container}>
      <Heading
        style={styles.heading}
        alignSelf={{
          base: "center",
          md: "flex-start",
        }}
        size="xl"
      >
        Top 10 Gainers
      </Heading>
      <Flex locked style={{ backgroundColor: "#ccc" }} direction="row" p={4}>
        <Heading size="md" width={150}>
          Symbol
        </Heading>
        <Divider bg="green.500" size={3} mx={4} orientation="vertical" />
        <Heading width={100} size="md">{`% Change`}</Heading>
      </Flex>
      <ScrollView>
        {gainers &&
          !!gainers.length &&
          gainers.map((x) => (
            <View key={x.symbol}>
              <SingleStock stock={x} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <TopGainers />
      </Center>
    </NativeBaseProvider>
  );
};

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
