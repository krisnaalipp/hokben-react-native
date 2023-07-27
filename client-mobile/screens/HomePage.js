import { Box, HStack, Input, ScrollView, View } from "native-base";
import Header from "../components/Header";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import CarouselBanner from "../components/Carousel";
import { ImageBackground } from "react-native";
import CardAdvertise from "../components/CardItem";

export default function HomePage() {
  return (
    <Box safeAreaTop backgroundColor={"white"}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/premium-photo/natural-bamboo-wood-texture_75922-434.jpg?w=2000",
          }}
          style={{
            width: "100%",
          }}
        >
          <Header />
          <CarouselBanner />
          <Box paddingTop={2} paddingX={2} marginBottom={5}>
            <HStack
              marginX={"auto"}
              backgroundColor={"white"}
              borderRadius={10}
              shadow={3}
            >
              <Input
                width={350}
                placeholder="     Mau makan apa hari ini?"
                InputRightElement={
                  <Ionicons
                    name={"search-circle-outline"}
                    size={35}
                    color={"red"}
                  />
                }
              />
            </HStack>
          </Box>
          <View
            flexDirection={"row"}
            justifyContent={"space-around"}
            marginBottom={3}
          >
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={30}
                color={"red"}
              />
            </View>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="package-variant"
                size={30}
                color={"black"}
              />
            </View>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="account-circle"
                size={30}
                color={"black"}
              />
            </View>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="chef-hat"
                size={30}
                color={"black"}
              />
            </View>
          </View>
          <View flexDirection={"row"} justifyContent={"space-around"}>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons name="cash" size={30} color={"green"} />
            </View>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="glass-mug"
                color={"black"}
                size={30}
              />
            </View>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="star-circle"
                size={30}
                color={"#e0cd05"}
              />
            </View>
            <View
              backgroundColor={"#ffffff"}
              alignItems={"center"}
              padding={4}
              borderRadius={10}
              opacity={90}
              shadow={3}
            >
              <MaterialCommunityIcons
                name="share-variant"
                size={30}
                color={"black"}
              />
            </View>
          </View>
          <CardAdvertise />
        </ImageBackground>
      </ScrollView>
    </Box>
  );
}
