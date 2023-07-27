import { ScrollView, HStack, Box, AspectRatio, Image, View } from "native-base";

export default function CardAdvertise() {
  const images = [
    "https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/c4b37a644132677dfd1f4f1126805a78-1660125200083",
    "https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/189b698f5bda12c891746b826d68706b-1666627605614",
    "https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/19a067dfd0846cb1ae2497c95640ab58-1666076960127",
  ];
  return (
    <View>
      <ScrollView horizontal={true}>
        <HStack>
          {images.map((j) => {
            return (
              <Box marginX={4} key={j}>
                <AspectRatio width={380}>
                  <Image
                    source={{
                      uri: j,
                    }}
                    alt="image"
                    resizeMode="contain"
                    shadow={5}
                    borderRadius={10}
                  />
                </AspectRatio>
              </Box>
            );
          })}
        </HStack>
      </ScrollView>
    </View>
  );
}
