import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "../Timer";

function Bottom(props) {
  const [bench, setBench] = useState("");
  const [checkBench, setCheckBench] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.exampleText}>ToDo Scroll List</Text>
          <Text style={{textAlign: 'center', fontSize: 20}}>
            {"\n"}a{"\n"}b{"\n"}c{"\n"}d{"\n"}e{"\n"}f{"\n"}g{"\n"}h{"\n"}i
            {"\n"}j{"\n"}k{"\n"}l{"\n"}m{"\n"}n{"\n"}o{"\n"}p{"\n"}q{"\n"}r
            {"\n"}s{"\n"}t{"\n"}u{"\n"}v{"\n"}w{"\n"}x{"\n"}y{"\n"}z
          </Text>
        </ScrollView>
      </View>
      <View style={styles.done}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.exampleText}>Done Scroll List</Text>
          <Text style={{textAlign: 'center', fontSize: 20}}>
            {"\n"}a{"\n"}b{"\n"}c{"\n"}d{"\n"}e{"\n"}f{"\n"}g{"\n"}h{"\n"}i
            {"\n"}j{"\n"}k{"\n"}l{"\n"}m{"\n"}n{"\n"}o{"\n"}p{"\n"}q{"\n"}r
            {"\n"}s{"\n"}t{"\n"}u{"\n"}v{"\n"}w{"\n"}x{"\n"}y{"\n"}z
          </Text>
        </ScrollView>
      </View>
      <View style={styles.rightBotom}>
        <View style={styles.benchmarks}>
          {/* Benchmarks */}
          <TouchableOpacity
            style={styles.check}
            onPress={() =>
              checkBench === true ? setCheckBench(false) : setCheckBench(true)
            }
          >
            <View style={styles.outterCheck}>
              {checkBench === true && <View style={styles.innerCheck} />}
            </View>
            <Text style={[styles.bold, styles.font]}>Benchmarks:</Text>
          </TouchableOpacity>

          {['"All Clear" Complete', "Fire Under Control", "Loss Stopped"].map(
            (choice) => (
              <TouchableOpacity
                key={choice}
                style={styles.button}
                onPress={() =>
                  bench === choice ? setBench("none") : setBench(choice)
                }
              >
                <View style={styles.outterButton}>
                  {bench === choice && <View style={styles.innerButton} />}
                </View>
                <Text style={[styles.font, styles.bold]}>
                  {choice}
                  <Text style={[styles.bold, styles.smallFont]}>{"\n"}PAR</Text>
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
        <View style={styles.time}>
          <Text>
            Elapsed Time Notifications 5 10 15 20 25 30 35 40 45 50 55 60{" "}
          </Text>
          <View>
            <Timer></Timer>
          </View>
        </View>
        <View style={styles.teamCharts}>
          <Text style={styles.exampleText}>Team Charts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  check: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  done: {
    width: "20%",
    height: "95%",
    backgroundColor: "brown",
    opacity: 6,
  },
  exampleText: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
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
  },
  rightBotom: {
    width: "55%",
    height: "95%",
    backgroundColor: "orange",
  },
  scroll: {
    //idk
  },
  smallFont: {
    fontSize: 10,
  },
  time: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
  },
  todo: {
    width: "20%",
    height: "95%",
    backgroundColor: "brown",
    opacity: 6,
  },
  benchmarks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingRight: 10,
    backgroundColor: "white",
  },
});

export default Bottom;
