import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const appStyles=require("../style/appStyles")

const Benchmarks = () => {
  const [allClear, setAllClear] = React.useState("");
  const [underControl, setUnderControl] = React.useState("");
  const [lossStopped, setLossStopped] = React.useState("");
  const [currentBlinker, setCurrentBlinker] = useState(0);
  const [trackTasks, setTrackTasks] = useState([false, false, false]);
  const [blinker, setBlinker] = React.useState();
  const [checkBench, setCheckBench] = React.useState(false);

  var timer;
  //toggles blinker every .75 seconds
  useEffect(() => {
    timer = setInterval(() => {
      toggleBlinker();
    }, 750);

    return () => clearInterval(timer);
  });

  const toggleBlinker = () => {
    if (blinker) {
      setBlinker(false);
    } else {
      setBlinker(true);
    }
  };

  //called when blinker is clicked, sets the blinking task to true, relies on next useeffect
  const manageBlinker = (index) => {
    let tempTrack = [...trackTasks];
    tempTrack[index] = true;
    setTrackTasks(tempTrack);
  };

  //Runs through blinkers to see which one is next, else if all done, set check to true
  useEffect(() => {
    if (!trackTasks[0]) {
      setCurrentBlinker(0);
    } else if (!trackTasks[1]) {
      setCurrentBlinker(1);
    } else if (!trackTasks[2]) {
      setCurrentBlinker(2);
    } else {
      setCurrentBlinker();
      setCheckBench(true);
    }
  }, [trackTasks]);

  return (
    <View style={[styles.container, appStyles.tertiaryColor]}>
      {/* Check */}
      <TouchableOpacity
        style={styles.check}
        onPress={() =>
          checkBench === true ? setCheckBench(false) : setCheckBench(true)
        }
      >
        <View style={styles.outterCheck}>
          {!checkBench ? (
            <View style={styles.innerCheck} />
          ) : (
            <View style={styles.innerCheckComplete} />
          )}
        </View>
        <Text style={styles.buttonName}>Benchmarks:</Text>
      </TouchableOpacity>

      {/* All Clear */}
      {/* onPress, if blinking, move blinker and set task to true, else toggle green and white and off */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentBlinker === 0
            ? (manageBlinker(0), setAllClear(true))
            : allClear === true
            ? setAllClear(false)
            : (manageBlinker(0), setAllClear(true))
        }
      >
        {/* Leave all untouched tasks with a red border so screen shots can see they are not done */}
        <View
          style={[
            styles.outterButton,
            !trackTasks[0] && { borderColor: "red" },
          ]}
        >
          {/* Blink or toggle green and white */}
          {currentBlinker === 0 && blinker ? (
            <View style={styles.innerButton} />
          ) : allClear === true ? (
            <View style={styles.innerButtonComplete} />
          ) : null}
        </View>
        <Text style={styles.buttonName}>"All Clear" Complete{"\n"}PAR</Text>
      </TouchableOpacity>

      {/* Fire Under Control */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentBlinker === 1
            ? (manageBlinker(1), setUnderControl(true))
            : underControl === true
            ? setUnderControl(false)
            : (manageBlinker(1), setUnderControl(true))
        }
      >
        <View style={styles.outterButton}>
          {currentBlinker === 1 && blinker ? (
            <View style={styles.innerButton} />
          ) : underControl === true ? (
            <View style={styles.innerButtonComplete} />
          ) : null}
        </View>
        <Text style={styles.buttonName}>Fire Under Control{"\n"}PAR</Text>
      </TouchableOpacity>

      {/* Loss Stopped */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentBlinker === 2
            ? (manageBlinker(2), setLossStopped(true))
            : lossStopped === true
            ? setLossStopped(false)
            : (manageBlinker(2), setLossStopped(true))
        }
      >
        <View style={styles.outterButton}>
          {currentBlinker === 2 && blinker ? (
            <View style={styles.innerButton} />
          ) : lossStopped === true ? (
            <View style={styles.innerButtonComplete} />
          ) : null}
        </View>
        <Text style={styles.buttonName}>Loss Stopped{"\n"}PAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Benchmarks;

//to give white gap like in the top buttons and checks, change widths and heights of inners back to 10
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightblue",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonName: {
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 11,
  },
  check: {
    flexDirection: "row",
  },
  innerButton: {
    width: 15,
    height: 15,
    backgroundColor: "red",
    borderRadius: 10,
  },
  innerButtonComplete: {
    width: 15,
    height: 15,
    backgroundColor: "green",
    borderRadius: 10,
  },
  innerCheck: {
    width: 13,
    height: 13,
    backgroundColor: "red",
  },
  innerCheckComplete: {
    width: 13,
    height: 13,
    backgroundColor: "green",
  },
  outterButton: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: "white",
  },
  outterCheck: {
    width: 15,
    height: 15,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 10,
    backgroundColor: "white",
  },
});
