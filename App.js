import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import Practice from "./screens/Practice";
import FlexBox from "./screens/FlexBox";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

export default function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
