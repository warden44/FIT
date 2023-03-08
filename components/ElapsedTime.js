import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ElapsedTime = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [increment, setIncrement] = useState(1);

  const [pressed, setPressed] = useState(Array(12));
  const minuteMarkers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + increment);

      if (seconds === 59) {
        setMinutes(minutes + increment);
        setSeconds(0);
        if (minutes === 59) {
          setHours(hours + increment);
          setMinutes(0);
          setPressed(Array(12))
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Elapsed Time {"\n"}Notifications: </Text>
      <View style={styles.markerContainer}>
        {minuteMarkers.map((fiver, index) => {
          let tempPressed = pressed;
          return (
            <TouchableOpacity
              style={styles.touchableMarker}
              key={index}
              onPress={() => (
                (tempPressed[index] = tempPressed[index] ? false : true),
                setPressed(tempPressed),
                console.log(pressed)
              )}
            >
              {
                <Text style={pressed[index] ? styles.fiverPassedTime : styles.fiver}>
                  {fiver % 20 === 0 ? (
                    <Text style={styles.par}>
                      {fiver}
                      {"\n"}PAR
                    </Text>
                  ) : (
                    <Text>
                      {fiver}
                    </Text>
                  )}
                </Text>
              }
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ElapsedTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 0,
  },
  fiverPassedTime: {
    opacity: 0.075,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "line-through",
    textDecorationStyle: "double",
  },
  fiver: {
    fontWeight: "bold",
    textAlign: "center",
  },
  markerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    flex: 4,
  },
  par: {
    textAlign: "center",
    color: "red",
  },
  titleText: {
    textAlign: "left",
    verticalAlign: "center",
    marginRight: "auto",
    flex: 1,
  },
  touchableMarker: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    
  },
});
