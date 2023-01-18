import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment } from "react";
import { width, height } from "../Dimensions";
import {
  DARK_BLUE_COLOR,
  LIGHT1_COLOR,
  LIGHT2_COLOR,
  PRIMARY1_COLOR,
  PRIMARY6_COLOR,
  WHITE_COLOR,
} from "../Color";
import { sliderData } from "../data";
const SliderScreen = () => {
  return (
    <Fragment>
      <View style={styles.headerContainer2}>
        <View>
          <Text style={styles.textStyle5}>Welcome</Text>
        </View>
        <View style={styles.container2}>
          {sliderData.map((d) => (
            <View
              style={{
                ...styles.headerSubContainer2,
                backgroundColor: d.container_backGround_color,
                borderColor: d.borderColor,
              }}
              key={d.id}
            >
              <View style={styles.headerSubContainer3}>
                <Text
                  style={{
                    ...styles.textStyle6,
                    backgroundColor: d.text_backGround_color,
                  }}
                >
                  {d.heading_1}
                </Text>
                <Text style={{ ...styles.textStyle7, color: d.text_color }}>
                  {d.heading_2}
                </Text>
                <Text style={styles.textStyle8}>{d.heading_3}</Text>
                <Text style={styles.textStyle9}>{d.heading_4}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.headerContainer3}>
        <View style={styles.headerSubContainer4}>
          <Text style={styles.headerText5}></Text>
          <View style={styles.subContainer2}>
            <Text style={styles.headerText6}>03/01/23</Text>
            <View style={styles.headerSubContainer5}>
              <Text style={styles.headerText7}>Clock IN -hh:mm AM</Text>
              <TouchableOpacity style={styles.headerSubContainer6}>
                <Text style={styles.headerText8}>Clock In</Text>
              </TouchableOpacity>
              <Text style={styles.headerText9}></Text>
            </View>
            <Text style={styles.headerText10}>Clock Out -hh:mm PM</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
  headerContainer2: {
    backgroundColor: PRIMARY1_COLOR,
    marginTop: height / 50,
  },
  textStyle5: {
    textAlign: "center",
    marginTop: height / 60,
    fontSize: height / 40,
  },
  container2: {
    flexDirection: "row",
    display: "flex",
  },
  headerSubContainer2: {
    width: width * 0.35,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    margin: width * 0.03,
    padding: width * 0.02,
  },
  headerSubContainer3: {
    alignItems: "center",
    marginVertical: height / 70,
  },
  textStyle6: {
    width: width * 0.2,
    height: height / 10,
    fontSize: height / 30,
    borderRadius: 50,
  },
  textStyle7: {
    textAlign: "center",
    marginTop: height / 60,
    fontSize: height / 40,
    color: DARK_BLUE_COLOR,
  },
  textStyle8: {
    textAlign: "center",
    fontSize: height / 50,
    opacity: 0.7,
    color: PRIMARY6_COLOR,
  },
  textStyle9: {
    textAlign: "center",
    fontSize: height / 50,
    color: PRIMARY6_COLOR,
    opacity: 0.7,
  },
  headerContainer3: {
    backgroundColor: LIGHT1_COLOR,
    marginVertical: height / 50,
    marginHorizontal: width * 0.03,
    borderRadius: 15,
    paddingVertical: height / 90,
  },
  headerSubContainer4: {
    flexDirection: "row",
    display: "flex",
    marginHorizontal: width * 0.02,
  },
  subContainer2: {},
  headerText5: {
    backgroundColor: LIGHT2_COLOR,
    width: width * 0.12,
    height: height / 17,
    marginHorizontal: width * 0.03,
    borderRadius: 50,
    marginTop: height / 50,
  },
  headerText6: {
    fontSize: height / 48,
  },
  headerSubContainer5: {
    display: "flex",
    flexDirection: "row",
  },
  headerText7: {
    fontSize: height / 48,
  },
  headerSubContainer6: {
    backgroundColor: LIGHT2_COLOR,
    marginHorizontal: width * 0.03,
    borderRadius: 10,
    width: width * 0.2,
    alignItems: "center",
  },
  headerText8: {
    color: WHITE_COLOR,
    fontSize: height / 50,
  },
  headerText9: {
    backgroundColor: LIGHT2_COLOR,
    width: width * 0.05,
    height: height / 40,
    borderRadius: 50,
    marginLeft: width * 0.01,
  },
  headerText10: {
    fontSize: height / 50,
  },
});
