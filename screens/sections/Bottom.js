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
          {[
            "Fire Attack",
            "Support/Backup Lines",
            "FDC Connection",
            " Standpipe Connection",
            "Exposure",
            "Search/Rescue",
            "Evacuation",
            "Ventilation",
            "Water Supply",
            "Secondary Water Supply",
            "IRIT",
            "RIT",
            "Assign Safety Officeer",
            "Assign Accountability Officer",
            "Utilities",
            "Gas",
            "Electric",
            "Water",
            "Rehab",
            "Salvage",
            "Overhaul",
            "Medical",
          ].map((task) => (
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
          {[
            "Traffic Control",
            "Police",
            "PIO",
            "Investigators",
            "Fire Marhsal",
            "State Fire Marhsal",
            "Health Department",
            "Occupant Services",
            "Red Cross",
            "Board Up",
          ].map((task) => (
            <View style={[styles.task, styles.taskAdditional]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.done}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.exampleText}>Done Scroll List</Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
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
        <View style={styles.elapsed}>
          <View style={styles.timer}>
            <Timer></Timer>
          </View>
          <Text>
            Elapsed Time Notifications 5 10 15 20 25 30 35 40 45 50 55 60{" "}
          </Text>
        </View>
        <Text style={styles.exampleText}>Team Charts</Text>
        <View style={styles.teamCharts}>
          <View style={styles.tChart}>
            <View style={styles.tSection}>
              <Text>Task</Text>
            </View>
            <View style={styles.tSection}>
              <Text>Team Name</Text>
            </View>
            <View style={styles.timer}>
              <Timer></Timer>
            </View>
          </View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
          <View style={styles.tChart}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  benchmarks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingRight: 10,
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
    borderWidth: 2,
  },
  elapsed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  task: {
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    marginTop: 5,
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 15,
    // shadowColor: 'white',
  },
  taskAdditional: {
    borderColor: "yellow",
  },
  taskText: {
    color: "blue",
  },
  teamCharts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  tChart: {
    width: "25%",
    height: "30%",
    backgroundColor: "white",
    margin: 5,
  },
  timer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: 'center',
  },
  // timerMain: {
  //   width: 75,
  //   height: 25,
  //   backgroundColor: 'lightgray',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   borderColor: 'red',
  //   margin: 5,
  //   paddingLeft: 5,
  //   paddingRight: 5,
  //   textAlign: 'center',
  //   fontSize: 24,
  //   },
  todo: {
    width: "20%",
    height: "95%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  tSection: {
    height: '25%',
  },
});

export default Bottom;
