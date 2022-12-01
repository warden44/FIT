import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

function Bottom(props) {
  const [bench, setBench] = useState("");
  const [checkBench, setCheckBench] = useState("");
  // scrollable list
  const renderItem = ({ item }) => <Item title={item.title} />;
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  /// sample data
  const DATA = [
    { id: "1", title: "First Item" },
    {
      id: "2",
      title: "second item",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text style={styles.exampleText}>ToDo Scroll List</Text>
        {[DATA].map((action) => (
          <FlatList
            data={DATA}
            key={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ))}
      </View>
      <View style={styles.done}>
        <Text style={styles.exampleText}>Done List</Text>
      </View>
      <View style={styles.rightBotom}>
        <View style={styles.benchmarks}>
          <Text>Cock</Text>
          {/* Declare Benchmark */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkBench === "true"
                  ? setCheckBench("false")
                  : setCheckBench("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkBench === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text>Declare Mode:</Text>
            </TouchableOpacity>

            {["Investigative", "Fast Action", "Command"].map((choice) => (
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
                <Text style={styles.font}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.time}>
          <Text>Elapsed Time</Text>
        </View>
        <View style={styles.teamCharts}>
          <Text style={styles.exampleText}>Team Charts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 13,
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
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 5,
  },
  outterCheck: {
    width: 15,
    height: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 10,
  },
  rightBotom: {
    width: "55%",
    height: "95%",
    backgroundColor: "orange",
  },
  todo: {
    width: "20%",
    height: "95%",
    backgroundColor: "brown",
    opacity: 6,
  },
  wrapper: {
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
  },
});

export default Bottom;
