import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { width } from "../components/Dimensions";
import HeaderScreen from "../components/Header/index";
import SliderScreen from "../components/Slider/index";
import MyTeamScreen from "../components/MyTeam/index";
import QuickLinkScreen from "../components/QuickLinks/index";
import Celebration from "../components/Celebration/index";
import MyTaskScreen from "../components/MyTask/index";

const DashBoardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER SECTION */}
      <HeaderScreen />
      {/* CLOSED HEADER SECTION */}
      {/* SLIDER SECTION */}
      <SliderScreen />
      {/* CLOSED SLIDER SECTION */}
      {/* MY TEAM SECTION */}
      <MyTeamScreen />
      {/* CLOSED MY TEAM SECTION */}
      {/* QUICK LINK SECTION */}
      <QuickLinkScreen />
      {/* CLOSED QUICK LINK SECTION */}
      {/* CELEBRATIONS SECTION */}
      <Celebration />
      {/* CELEBRATIONS CLOSED SECTION */}
      {/* MY TASK SECTION */}
      <MyTaskScreen />
      {/* MY TASK CLOSED SECTION */}
    </ScrollView>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
});
