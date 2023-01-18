import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width, height } from "../Dimensions";
import { BLACK_COLOR, GREEN_COLOR, LIGHT1_COLOR } from "../Color";
import { chatData } from "../data";

const MyTeamScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.subMainContainer}>
          <Text style={styles.headerText1}>My Team</Text>
          <Text style={styles.headerText2}>View All</Text>
        </View>
        {chatData.map((d) => (
          <View style={styles.subMainContainer2} key={d.id}>
            <Text
              style={{
                ...styles.headerText3,
                backgroundColor: d.heading_1_color,
              }}
            >
              {d.heading_1}
            </Text>
            <Text style={styles.headerText4}>{d.heading_2}</Text>
            <Text style={styles.headerText5}>{d.heading_3}</Text>
            <Text style={styles.headerText6}>{d.heading_4}</Text>
            <Text style={styles.headerText7}>{d.heading_5}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MyTeamScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: width * 0.02,
    marginVertical: height / 70,
    borderRadius: 10,
    elevation: 1,
    borderRadius: 5,
  },
  subMainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: width * 0.03,
  },
  headerText1: {
    fontSize: height / 40,
    marginHorizontal: width * 0.03,
    fontWeight: "bold",
  },
  headerText2: {
    fontSize: height / 40,
    color: GREEN_COLOR,
    marginHorizontal: width * 0.03,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  subMainContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height / 80,
  },
  headerText3: {
    backgroundColor: LIGHT1_COLOR,
    width: width * 0.2,
    height: height / 11,
    marginLeft: width * 0.03,
    borderRadius: 50,
  },
  headerText4: {
    fontSize: height / 45,
    marginTop: height / 50,
    marginHorizontal: width * 0.01,
  },
  headerText5: {
    color: BLACK_COLOR,
    fontSize: height / 40,
    marginTop: height / 50,
    opacity: 0.5,
    marginHorizontal: width * 0.01,
  },
  headerText6: {
    backgroundColor: GREEN_COLOR,
    width: width * 0.03,
    height: height / 60,
    marginTop: height / 33,
    borderRadius: 50,
    marginHorizontal: width * 0.01,
  },
  headerText7: {
    color: BLACK_COLOR,
    fontSize: height / 40,
    marginTop: height / 50,
    opacity: 0.8,
    marginRight: width * 0.03,
  },
});
