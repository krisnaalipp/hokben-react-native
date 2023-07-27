import { Box, Image, View, Text, Button } from "native-base";
import { useState } from "react";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, ImageBackground } from "react-native";
import { useQuery } from "@apollo/client";
import { currencyFormat } from "simple-currency-format";
import { ActivityIndicator } from "react-native";
import { GET_ITEM_DETAIL } from "../config/queries";
import ModalIngredients from "../components/Modal";
export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(GET_ITEM_DETAIL, {
    variables: {
      getItemDetailId: id,
    },
  });

  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  }
  if (error) {
    console.log(error);
    return <Text>Something Wrong!</Text>;
  }

  function renderContent() {
    if (loading) {
      return (
        <ActivityIndicator
          size={"large"}
          color="red"
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      );
    } else {
      const { description, imgUrl, name, price, Category, Ingredients, user } =
        data.getItemDetail;
      return (
        <Box
          margin={3}
          borderRadius={40}
          backgroundColor={"white"}
          height={"96%"}
        >
          <View borderRadius={10}>
            <Text
              marginY={1}
              marginX={"auto"}
              padding={0.5}
              fontSize={22}
              fontFamily={"GothamRounded-Medium"}
            >
              {description}
            </Text>
          </View>
          <Image
            source={{ uri: imgUrl }}
            style={{ width: 400, height: 300 }}
            alt="image"
            borderTopRadius={40}
          />
          <View
            justifyContent={"space-between"}
            flexDirection={"row"}
            marginY={1}
            padding={3}
          >
            <Text fontFamily={"GothamRounded-Medium"} style={{ fontSize: 20 }}>
              {name}
            </Text>
            <View
              flexDirection={"row"}
              backgroundColor={"#dc9349"}
              padding={2}
              borderRadius={20}
            >
              <Text
                fontFamily={"GothamRounded-Medium"}
                style={{ fontSize: 15, color: "white" }}
              >
                {currencyFormat(price, "id-ID", "IDR")}
              </Text>
            </View>
          </View>
          <Text
            paddingLeft={3}
            paddingRight={3}
            paddingBottom={3}
            fontSize={16}
          >
            {Category?.name}
          </Text>
          <TouchableOpacity>
            <Button
              onPress={() => setShowModal(true)}
              backgroundColor={"black"}
              justifyContent={"flex-end"}
              marginLeft={"auto"}
              marginRight={3}
              borderRadius={15}
            >
              <Text
                fontFamily={"GothamRounded-Medium"}
                color={"white"}
                padding={1}
              >
                Ingredients
              </Text>
            </Button>
          </TouchableOpacity>
          <View
            flexDirection={"row"}
            justifyContent={"center"}
            paddingX={1}
            borderRadius={15}
            marginY={5}
            alignItems={"center"}
          >
            <TouchableOpacity onPress={decrement}>
              <MaterialCommunityIcons
                name="minus-circle"
                size={24}
                color={"red"}
              />
            </TouchableOpacity>
            <Text fontSize={24} marginX={5}>
              {counter}
            </Text>
            <TouchableOpacity onPress={increment}>
              <MaterialCommunityIcons
                name="plus-circle"
                size={24}
                color={"red"}
              />
            </TouchableOpacity>
          </View>
          <ModalIngredients
            isOpen={showModal}
            ingredients={Ingredients}
            onClose={() => setShowModal(false)}
            name={user?.username}
          />
          <View
            backgroundColor={"#dc3545"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={"row"}
            padding={3}
            borderRadius={30}
            margin={3}
          >
            <FontAwesome name="shopping-basket" size={30} color={"white"} />
            <Text
              fontSize={21}
              fontFamily={"GothamRounded-Medium"}
              color={"white"}
            >
              Total : {currencyFormat(price * counter, "id-ID", "IDR")}
            </Text>
          </View>
        </Box>
      );
    }
  }
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/premium-photo/natural-bamboo-wood-texture_75922-434.jpg?w=2000",
        }}
        style={{
          width: "100%",
          flex: 1,
        }}
        alt="background"
      >
        {renderContent()}
      </ImageBackground>
    </>
  );
}
