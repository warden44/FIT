import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Bottom(props) {
  const [bench, setBench] = useState("");
  const [checkBench, setCheckBench] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text style={styles.exampleText}>ToDo Scroll List</Text>
      </View>
      <View style={styles.done}>
        <Text style={styles.exampleText}>Done List</Text>
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
                  <Text style={[styles.bold, styles.smallFont]}>
                    {"\n"}PAR
                  </Text>
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
        <View style={styles.time}>
          <Text>Elapsed Time Notifications</Text>
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
    marginTop: 2,    marginLeft: 10,
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
  smallFont: {
    fontSize: 10,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
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
