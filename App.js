import { StyleSheet, Text, View } from "react-native";
import DashBoardScreen from "./src/screen/DashBoardScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <DashBoardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
