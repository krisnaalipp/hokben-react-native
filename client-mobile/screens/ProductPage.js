import { Box, FlatList, Heading, ScrollView, Text, View } from "native-base";
import { ActivityIndicator, ImageBackground } from "react-native";
import ProductCol from "../components/ProductCol";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../config/queries";

export default function ProductPage() {
  const { loading, error, data } = useQuery(GET_ITEMS);
  return (
    <Box safeAreaTop>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/premium-photo/natural-bamboo-wood-texture_75922-434.jpg?w=2000",
        }}
        style={{
          width: "100%",
        }}
      >
        <ScrollView>
          <Box>
            <View
              backgroundColor={"#dc3545"}
              marginX={3}
              marginY={3}
              borderRadius={10}
            >
              <Heading textAlign={"center"} marginY={4}>
                <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                  All menu
                </Text>
              </Heading>
            </View>
            <ScrollView horizontal marginBottom={3}>
              <View flexDirection={"row"} marginX={8}>
                <Box
                  marginRight={3}
                  shadow={3}
                  backgroundColor={"#dc3545"}
                  padding={2}
                  borderRadius={5}
                >
                  <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                    Main Menu
                  </Text>
                </Box>
                <Box
                  marginRight={3}
                  shadow={3}
                  backgroundColor={"#dc3545"}
                  padding={2}
                  borderRadius={5}
                >
                  <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                    Value Set
                  </Text>
                </Box>
                <Box
                  marginRight={3}
                  shadow={3}
                  backgroundColor={"#dc3545"}
                  padding={2}
                  borderRadius={5}
                >
                  <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                    Beverages
                  </Text>
                </Box>
                <Box
                  marginRight={3}
                  shadow={3}
                  backgroundColor={"#dc3545"}
                  padding={2}
                  borderRadius={5}
                >
                  <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                    Kidzu
                  </Text>
                </Box>
                <Box
                  marginRight={3}
                  shadow={3}
                  backgroundColor={"#dc3545"}
                  padding={2}
                  borderRadius={5}
                >
                  <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                    Bento
                  </Text>
                </Box>
                <Box
                  marginRight={3}
                  shadow={3}
                  backgroundColor={"#dc3545"}
                  padding={2}
                  borderRadius={5}
                >
                  <Text fontFamily={"GothamRounded-Medium"} color={"white"}>
                    Yakiniku
                  </Text>
                </Box>
              </View>
            </ScrollView>
            {loading ? (
              <ActivityIndicator size={"large"} color={"black"} />
            ) : (
              <FlatList
                data={data.getItem}
                renderItem={({ item }) => {
                  return <ProductCol item={item} />;
                }}
                keyExtractor={(item) => item.id}
              />
            )}
          </Box>
        </ScrollView>
      </ImageBackground>
    </Box>
  );
}
