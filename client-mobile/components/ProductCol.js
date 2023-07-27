import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Button, HStack, Text, View, VStack } from "native-base";
export default function ProductCol({ item }) {
  const navigation = useNavigation();
  return (
    <Box
      borderRadius={35}
      marginY={2}
      margin={2}
      backgroundColor={"#e7e7f4"}
      shadow={8}
    >
      <HStack padding={3}>
        <Avatar source={{ uri: item.imgUrl }} width={75} height={75} alt="" />
        <VStack flex={1} marginLeft={3}>
          <View justifyContent={"center"}>
            <Text style={{ fontSize: 18 }} marginBottom={3}>
              {item.name}
            </Text>
            <Text>{item.description}</Text>
          </View>
          <View marginTop={3}>
            <Button
              bgColor={"#ffc107"}
              borderRadius={40}
              onPress={() =>
                navigation.navigate("ProductDetail", {
                  id: item.id,
                })
              }
            >
              <Text bold>Detail</Text>
            </Button>
          </View>
        </VStack>
      </HStack>
    </Box>
  );
}
