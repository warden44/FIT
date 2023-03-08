import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";

const ElapsedTime = () => {
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(19);
  const [hours, setHours] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [active, setActive] = useState();
  const [blinker, setBlinker] = useState(0);

  const [pressed, setPressed] = useState(Array(12));
  const minuteMarkers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + increment);

      if (seconds === 59) {
        setMinutes(minutes + increment);
        setSeconds(0);
        if (minutes === 19) {
          playSound();
          setActive(20);
        }
        if (minutes === 39) {
          playSound();
          setActive(40);
        }
        if (minutes === 59) {
          setHours(hours + increment);
          setMinutes(0);
          setPressed(Array(12));
          playSound();
          setActive(60);
        }
      }

      if (blinker) {
        setBlinker(false);
      } else {
        setBlinker(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/alarm.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Button title="Play Sound" onPress={playSound} />
      </View>
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
                active === fiver
                  ? (sound.unloadAsync(), setBlinker(false), setActive(null))
                  : null
              )}
            >
              {
                <Text
                  style={pressed[index] ? styles.fiverPassedTime : styles.fiver}
                >
                  {fiver % 20 === 0 ? (
                    <Text
                      style={active === fiver && blinker ? null : styles.par}
                    >
                      {fiver}
                      {"\n"}PAR
                    </Text>
                  ) : (
                    <Text>{fiver}</Text>
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
