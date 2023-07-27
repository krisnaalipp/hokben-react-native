import { Text, View } from "native-base";
import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
const images = [
  "https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/660563039c8df00662a300e6e3b3084b-1664558013106",
  "https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/ae37f388c1ffa5c88c47898920163e58-1664558041321",
  "https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/711eb2845309fb5d2a30ba308c8d8a5f-1660125030047",
];
const { width } = Dimensions.get("window");
const height = width * 0.6;

export default function CarouselBanner() {
  const [state, setState] = useState({
    active: 0,
  });

  function changeCarousel({ nativeEvent }) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== state.active) {
      setState({ active: slide });
    }
  }
  return (
    <>
      <View style={style.carouselContainer}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={changeCarousel}
          showsHorizontalScrollIndicator={false}
          style={style.scroll}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={style.image} />
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k === state.active ? style.pagingActiveText : style.pagingText
              }
            >
              •
            </Text>
          ))}
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  carouselContainer: {
    // marginBottom: 10,
  },
  scroll: { width, height },
  image: { width, height, resizeMode: "contain" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    fontSize: width / 30,
    color: "#888",
    marginBottom: 3,
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: "#fff",
    margin: 3,
  },
});
