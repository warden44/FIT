import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Tasks from "../../src/app/features/tasks/Tasks";
import Benchmarks from "../../components/Benchmarks";
import ElapsedTime from "../../components/ElapsedTime";
import TChart from "../../src/app/features/tChart/TChart";



function PracticeBottom(props) {
  return (
    <View style={styles.bottom}>
      <Tasks style={{}} />

      <View style={styles.rightBottom}>
        <View style={styles.benchElapsed}>
          <View style={styles.benchmarks}>
            <Benchmarks />
          </View>
          <ElapsedTime style={{flex: 1}}/>
        </View>
        <View style={styles.teamCharts}>
          {Array(16)
            .fill()
            .map((item, index) => (
              <TChart style={styles.tChart} key={index} tChartID={index} />
            ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  benchElapsed: {
    flexDirection: "row",
    height: "10%",
  },
  benchmarks: {
    margin: 5,
    marginBottom: 0,

  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  check: {
    flexDirection: "row",
  },
  bottom: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  done: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "lightgreen",
    borderWidth: 2,
  },
  dragging: {
    width: 0,
    height: 0,
    borderWidth: 0,
    textAlign: "center",
  },
  dragHover: {
    width: "15%",
    height: "auto",
  },
  elapsed: {
    width: "100%",
    backgroundColor: "gray",
  },
  font: {
    fontSize: 14,
    textAlign: "center",
  },
  innerButton: {
    width: 10,
    height: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  innerCheck: {
    width: 10,
    height: 10,
    backgroundColor: "red",
  },
  itemFont: {
    fontSize: 12.5,
    textAlign: "center",
  },
  outterButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: "white",
  },
  outterCheck: {
    width: 15,
    height: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    marginRight: 10,
    backgroundColor: "white",
  },
  rightBottom: {
    // width: "55%",
    flex: 3,
    // height: "98%",
    margin: 5,
    backgroundColor: "lightgray",
    borderWidth: 2,
  },
  smallFont: {
    fontSize: 10,
  },
  task: {
    width: "48%",
    height: "7.25%",
    backgroundColor: "lightyellow",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  teamCharts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  tChart: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: "25%",
    height: "22%",
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    paddingBottom: 0,
  },
  tChartSection: {
    textAlign: "center",
    flex: 1,
    borderWidth: 2,
    paddingBottom: 0,
  },
  tChartTimer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  todo: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
  tSection: {
    height: "25%",
  },
});

export default PracticeBottom;
