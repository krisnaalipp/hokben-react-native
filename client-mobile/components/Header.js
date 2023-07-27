import { ImageBackground, Image } from "react-native";
import { Box, AspectRatio, Text, View } from "native-base";
export default function Header() {
  return (
    <ImageBackground
      source={{
        uri: "https://www.hokben.co.id/assets/img/headpat.png",
      }}
      style={{
        width: "100%",
        height: 75,
      }}
    >
      <Box flexDirection={"row"} padding={1}>
        <AspectRatio>
          <Image
            source={{
              uri: "https://www.hokben.co.id/assets/img/logo_hokben_1.png",
            }}
            alt="image"
            maxWidth={75}
          />
        </AspectRatio>
        <Text
          textAlign={"center"}
          margin={2}
          color={"white"}
          fontSize={30}
          fontFamily={"GothamRounded-Medium"}
        >
          HOKBEN APP
        </Text>
      </Box>
    </ImageBackground>
  );
}
