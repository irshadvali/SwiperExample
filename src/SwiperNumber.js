//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import Swiper from "../src/core_component/Swiper";

// create a component
class SwiperNumber extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image style={styles.image} source={require("../src/images/1.jpg")} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
        >
          <Image style={styles.image} source={require("../src/images/2.jpg")} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
        >
          <Image style={styles.image} source={require("../src/images/3.jpg")} />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
          }
        >
          <Image style={styles.image} source={require("../src/images/4.jpg")} />
        </View>
      </Swiper>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: "white",
    fontSize: 20
  }
});
const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};
//make this component available to the app
export default SwiperNumber;
