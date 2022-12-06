import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [hours, setHours] = useState(0);
  const [increment, setIncrement] = useState(0)

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
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <View>
      {props.size === "smallTimer" ? (
        <TouchableOpacity
          style={styles.smallTimer}
          onLongPress={() => {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
            setIncrement(0);
          }}
          onPress={() => {
            setIncrement(1);
          }}
        >
          <Text adjustsFontSizeToFit>
            {hours < 10 && 0}
            {hours > 0 && hours}:{minutes < 10 && 0}
            {minutes}:{seconds < 10 && 0}
            {seconds}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.bigTimer}
            onLongPress={() => {
              setSeconds(0);
              setMinutes(0);
              setHours(0);
              setIncrement(0);
            }}
            onPress={() => {
              setIncrement(1);
            }}
          >
            <Text style={styles.bigFont} adjustsFontSizeToFit>
              {hours < 10 && 0}
              {hours > 0 && hours}:{minutes < 10 && 0}
              {minutes}:{seconds < 10 && 0}
              {seconds}
            </Text>
          </TouchableOpacity>
          <View style={styles.elapsed}>
            <Text>Elapsed Time Notifications: </Text>
            {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((fiver) => (
              <View key={fiver}>
                {minutes >= fiver ? (
                  <Text style={styles.currentTime}>
                    {fiver % 20 === 0 ? (
                      <Text style={styles.par}>
                        {" "}{fiver}
                        {"\n"}PAR
                      </Text>
                    ) : (
                      <Text>
                        {fiver}
                        {"  "}
                      </Text>
                    )}
                  </Text>
                ) : (
                  <Text style={styles.fiver}>
                    {fiver % 20 === 0 ? (
                      <Text style={styles.par}>
                        {" "}{fiver}
                        {"\n"}PAR
                      </Text>
                    ) : (
                      <Text>
                        {fiver}
                        {"  "}
                      </Text>
                    )}
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bigFont: {
    fontSize: 20,
  },
  bigTimer: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "red",
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  currentTime: {
    opacity: .075,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    textDecorationStyle: "double"
  },
  fiver: {
    fontWeight: "bold",
  },
  elapsed: {
    flexDirection: "row",
  },
  par: {
    textAlign: "center",
    color: "red",
  },
  smallTimer: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "blue",
    margin: 2,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center",
  },

  // smallFont: {
  //   fontSize: 15,
  // },
});

export default Timer;
