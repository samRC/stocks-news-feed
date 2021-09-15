import React from "react";
import { Box, Heading, HStack, Icon, Stack, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

export default function NewsArticle({ article }) {
  const navigation = useNavigation();

  const handleTouch = () => {
    return () => {
      navigation.navigate("Browser", article);
    };
  };
  return (
    <TouchableOpacity onPress={handleTouch()}>
      <Box
        width={72}
        shadow={1}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <Stack p={4} space={2}>
          <Heading size="md" ml={-1}>
            {article.title}
          </Heading>
          {/* <Text lineHeight={6} fontWeight={400}></Text> */}
          <HStack alignItems="center">
            <Icon
              as={<MaterialIcons name="access-time" />}
              color="gray.500"
              size="sm"
            />
            <Text ml={1} color="gray.500" fontWeight="500">
              {article.pubDate}
            </Text>
          </HStack>
        </Stack>
      </Box>
    </TouchableOpacity>
  );
}
