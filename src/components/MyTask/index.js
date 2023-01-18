import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width, height } from "../Dimensions";
import { BLACK_COLOR, GREEN_COLOR, LIGHT1_COLOR } from "../Color";
import { myTaskData } from "../data";

const MyTaskScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText1}>My Task</Text>
      {myTaskData.map((d) => (
        <View style={styles.mainSubContainer} key={d.id}>
          <Text style={styles.headerText2}>{d.heading_1}</Text>
          <Text style={styles.headerText3}>{d.heading}</Text>
          <Text style={styles.headerText4}>{d.heading_2}</Text>
        </View>
      ))}
    </View>
  );
};

export default MyTaskScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: width * 0.03,
    marginVertical: height / 70,
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
    borderColor: LIGHT1_COLOR,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: width * 0.03,
    padding: width * 0.03,
    marginVertical: height / 70,
    alignItems: "center",
  },
  headerText2: {
    fontSize: height / 40,
    padding: width * 0.01,
    color: BLACK_COLOR,
    textAlign: "center",
    marginHorizontal: width * 0.03,
  },
  headerText3: {
    fontSize: height / 40,
    padding: width * 0.01,
    color: BLACK_COLOR,
    marginHorizontal: width * 0.03,
    textAlign: "center",
  },
  headerText4: {
    fontSize: height / 40,
    padding: width * 0.01,
    color: GREEN_COLOR,
    marginHorizontal: width * 0.03,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
