import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const ElapsedTime = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [increment, setIncrement] = useState(1);

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
    <View style={styles.elapsed}>
      <Text>Elapsed Time Notifications: </Text>
      {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((fiver) => (
        <View key={fiver}>
          {minutes >= fiver ? (
            <Text style={styles.currentTime}>
              {fiver % 20 === 0 ? (
                <Text style={styles.par}>
                  {" "}
                  {fiver}
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
                  {" "}
                  {fiver}
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
  );
};

export default ElapsedTime;

const styles = StyleSheet.create({});
