import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width, height } from "../Dimensions";
import { BLACK_COLOR, DARK_BLUE_COLOR, LIGHT1_COLOR } from "../Color";
import { celebrationData } from "../data";

const Celebration = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText1}>Celebration</Text>
      {celebrationData.map((d) => (
        <View style={styles.mainSubContainer} key={d.id}>
          <Text style={styles.headerText2}>{d.heading_1}</Text>
          <Text style={styles.headerText3}>{d.heading}</Text>
          <Text style={styles.headerText4}>{d.heading_2}</Text>
        </View>
      ))}
    </View>
  );
};

export default Celebration;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: width * 0.03,
    elevation: 1,
    borderRadius: 5,
    marginVertical: height / 70,
    padding: width * 0.02,
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
    backgroundColor: LIGHT1_COLOR,
    borderRadius: 10,
    marginHorizontal: width * 0.03,
    padding: width * 0.03,
    marginVertical: height / 70,
  },
  headerText2: {
    fontSize: height / 40,
    padding: width * 0.01,
    color: BLACK_COLOR,
  },
  headerText3: {
    width: width * 0.2,
    borderRadius: 50,
  },
  headerText4: {
    fontSize: height / 40,
    padding: width * 0.01,
    color: DARK_BLUE_COLOR,
  },
});
