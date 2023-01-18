import { StyleSheet, Text, TextInput, View } from "react-native";
import { width, height } from "../Dimensions";
import {
  BLACK_COLOR,
  GREEN_COLOR,
  PRIMARY1_COLOR,
  PRIMARY2_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../Color";
import React from "react";

const HeaderScreen = () => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.headerContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <View style={styles.textDirection}>
          <Text style={styles.headerText1}>Announcements</Text>
          <Text style={styles.headerText2}>View All</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textSubContainer}>
            <Text style={styles.textStyle1}></Text>
            <View style={styles.textSubContainer2}>
              <Text style={styles.textStyle2}>
                Employees Are Expected To Clock..
              </Text>
              <Text style={styles.textStyle3}>1 hour ago</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: PRIMARY1_COLOR,
  },
  headerContainer: {
    marginHorizontal: width * 0.03,
    marginVertical: height / 50,
  },
  searchInput: {
    backgroundColor: WHITE_COLOR,
    padding: width * 0.03,
    marginTop: height / 40,
    borderRadius: 15,
  },
  textDirection: {
    marginVertical: height / 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText1: {
    color: BLACK_COLOR,
    fontWeight: "bold",
    fontSize: height / 50,
  },
  headerText2: {
    color: GREEN_COLOR,
    textDecorationLine: "underline",
    fontSize: height / 50,
    fontWeight: "bold",
  },
  textContainer: {
    marginHorizontal: width * 0.03,
  },
  textSubContainer: {
    backgroundColor: PRIMARY2_COLOR,
    borderRadius: 15,
    flexDirection: "row",
    padding: width * 0.03,
  },
  textSubContainer2: {
    flexDirection: "column",
  },
  textStyle1: {
    backgroundColor: YELLOW_COLOR,
    width: width * 0.09,
    padding: width * 0.02,
    marginHorizontal: width * 0.03,
    borderRadius: 10,
  },
  textStyle2: {
    marginHorizontal: width * 0.03,
    fontSize: height / 50,
  },
  textStyle3: {
    marginHorizontal: width * 0.03,
    fontSize: height / 50,
    color: PRIMARY1_COLOR,
  },
});
