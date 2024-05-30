import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Movie");
  };
  return (
    <View style={{ marginBottom: 32 }}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          marginHorizontal: 16,
          marginBottom: 20,
        }}
      >
        Trending
      </Text>
      <Carousel
        className="ml-10"
        width={width * 0.8}
        height={300}
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        mode="parallax-layers"
        modeConfig={{
          initialScale: 0.9,
          scaleRatio: 0.1,
          translateRatioX: 0.05,
          translateY: 30,
          scaleDuration: 600,
        }}
        pagingEnabled
        snapEnabled
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        className="flex items-center justify-center h-screen"
        source={require("../assets/moviePoster1.jpg")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 10,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
