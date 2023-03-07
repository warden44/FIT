import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Benchmarks = () => {
  const [allClear, setAllClear] = React.useState("");
  const [underControl, setUnderControl] = React.useState("");
  const [lossStopped, setLossStopped] = React.useState("");
  // var currentBlinker = 0;
  const [currentBlinker, setCurrentBlinker] = useState(0);
  // var trackTasks = [false, false, false];
  const [trackTasks, setTrackTasks] = useState([false, false, false]);
  const [blinker, setBlinker] = React.useState();
  const [checkBench, setCheckBench] = React.useState(false);

  const manageBlinker = (index) => {
    let tempTrack = [...trackTasks];
    tempTrack[index] = true;
    setTrackTasks(tempTrack);

    if (!trackTasks[0]) {
      setCurrentBlinker(0);
    } else if (!trackTasks[1]) {
      setCurrentBlinker(1);
    } else if (!trackTasks[2]) {
      setCurrentBlinker(2);
    }
    else {
      setCurrentBlinker();
    }
    console.log(currentBlinker);
    console.log(trackTasks);
  };

  // useEffect(() => {

  // }, [currentBlinker, trackTasks]);

  const toggleBlinker = () => {
    if (blinker) {
      setBlinker(false);
    } else {
      setBlinker(true);
    }
  };

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      toggleBlinker();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <View style={styles.container}>
      {/* Check */}
      <TouchableOpacity
        style={styles.check}
        onPress={() =>
          checkBench === true ? setCheckBench(false) : setCheckBench(true)
        }
      >
        <View style={styles.outterCheck}>
          {checkBench === true ? (
            <View style={styles.innerCheck} />
          ) : (
            <View style={styles.innerCheckComplete} />
          )}
        </View>
        <Text style={[styles.bold, styles.font]}>Benchmarks:</Text>
      </TouchableOpacity>

      {/* All Clear */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentBlinker === 0
            ? (manageBlinker(0))
            : allClear === true
            ? setAllClear(false)
            : setAllClear(true)
        }
      >
        <View style={styles.outterButton}>
          {currentBlinker === 0 && blinker ? (
            <View style={styles.innerButton} />
          ) : allClear === true ? (
            <View style={styles.innerButtonComplete} />
          ) : null}
        </View>
        <Text style={[styles.font, styles.bold]}>
          "All Clear" Complete
          <Text style={[styles.bold, styles.smallFont]}>{"\n"}PAR</Text>
        </Text>
      </TouchableOpacity>

      {/* Fire Under Control */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentBlinker === 1
          ? (manageBlinker(1))
          : underControl === true
            ? setUnderControl(false)
            : setUnderControl(true)
        }
      >
        <View style={styles.outterButton}>
          {currentBlinker === 1 && blinker ? (
            <View style={styles.innerButton} />
          ) : underControl === true ? (
            <View style={styles.innerButtonComplete} />
          ) : null}
        </View>
        <Text style={[styles.font, styles.bold]}>
          Fire Under Control
          <Text style={[styles.bold, styles.smallFont]}>{"\n"}PAR</Text>
        </Text>
      </TouchableOpacity>

      {/* Loss Stopped */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentBlinker === 2
          ? (manageBlinker(2))
          : lossStopped === true
            ? setLossStopped(false)
            : setLossStopped(true)
        }
      >
        <View style={styles.outterButton}>
          {currentBlinker === 2 && blinker ? (
            <View style={styles.innerButton} />
          ) : lossStopped === true ? (
            <View style={styles.innerButtonComplete} />
          ) : null}
        </View>
        <Text style={[styles.font, styles.bold]}>
          Loss Stopped
          <Text style={[styles.bold, styles.smallFont]}>{"\n"}PAR</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Benchmarks;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingRight: 10,
    backgroundColor: "lightblue",
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
  },
  check: {
    flexDirection: "row",
  },
  extraLine: {
    flexDirection: "column",
  },
  indent: {
    left: 20,
  },
  innerButton: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 10,
  },
  innerButtonComplete: {
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
  innerCheck: {
    width: 10,
    height: 10,
    backgroundColor: "red",
  },
  innerCheckComplete: {
    width: 10,
    height: 10,
    backgroundColor: "green",
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
    backgroundColor: "white",
  },
  outterCheck: {
    width: 15,
    height: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 10,
    backgroundColor: "white",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
  },
});
