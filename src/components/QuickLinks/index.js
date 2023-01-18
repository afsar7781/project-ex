import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width, height } from "../Dimensions";
import { LIGHT1_COLOR } from "../Color";
import { quickLinks } from "../data";

const QuickLinkScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText1}>Quick Links</Text>
      <View style={styles.mainSubContainer}>
        {quickLinks.map((d) => (
          <View style={styles.mainSubContainer2} key={d.id}>
            <Text style={styles.headerText2}>{d.heading_1} </Text>
            <Text style={styles.headerText2}>{d.heading_2} </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuickLinkScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: width * 0.03,
    padding: width * 0.02,
    elevation: 1,
    borderRadius: 5,
  },
  headerText1: {
    fontSize: height / 40,
    fontWeight: "bold",
    marginHorizontal: width * 0.03,
    marginVertical: height / 70,
  },
  mainSubContainer: {
    display: "flex",
    flexDirection: "row",
  },
  mainSubContainer2: {
    padding: width * 0.02,
    width: width * 0.28,
    alignItems: "center",
    backgroundColor: LIGHT1_COLOR,
    marginHorizontal: width * 0.01,
    borderRadius: 10,
  },
  headerText2: {
    fontSize: height / 45,
    padding: width * 0.01,
  },
});
