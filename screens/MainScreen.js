import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import Top from "./sections/Top";
import PracticeTop from "./sections/PracticeTop";
import PracticeBottom from "./sections/PracticeBottom";
import Bottom from "./sections/Bottom";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import AppContext from "../components/AppContext";
function MainScreen(props) {
  const gestureRootViewStyle = { flex: 1 };

  return (
      <GestureHandlerRootView style={gestureRootViewStyle}>
        <DraxProvider>
          <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <PracticeTop />
          </View>
          <View style={styles.bottom}>
            <PracticeBottom />
          </View>
          </SafeAreaView>
        </DraxProvider>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 9,
    zIndex: -1,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#FFBEBE",
  },
  top: {
    flex: 5,
    zIndex: 0,
  },
});

export default MainScreen;
