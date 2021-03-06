//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "../src/core_component/Swiper";
// create a component
class HomePage extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        height={240}
        showsButtons={false}
        autoplay={true}
        dot={
          <View
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#1234EF",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7
            }}
          />
        }
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
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
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

//make this component available to the app
export default HomePage;
