import { StyleSheet } from "react-native";
const DEVICE_WIDTH = Dimensions.get("window").width;
import Dimensions from "Dimensions";

const SwiperStyles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "relative",
    flex: 1
  },

  wrapperIOS: {
    backgroundColor: "transparent"
  },

  wrapperAndroid: {
    backgroundColor: "transparent",
    flex: 1
  },

  slide: {
    backgroundColor: "transparent"
  },

  pagination_x: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  pagination_y: {
    position: "absolute",
    right: 15,
    top: 0,
    bottom: 0,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  title: {
    height: 30,
    justifyContent: "center",
    position: "absolute",
    paddingLeft: 10,
    bottom: -30,
    left: 0,
    flexWrap: "nowrap",
    width: 250,
    backgroundColor: "transparent"
  },

  buttonWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    top: "83%",
    right: "5%",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,

    justifyContent: "space-between"
  },

  buttonText: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d00000"
  },
  buttonTextTwo: {
    fontSize: 50,
    color: "#007aff",
    fontFamily: "Arial"
  }
});

export default SwiperStyles;
