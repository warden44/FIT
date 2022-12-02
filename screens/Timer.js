import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);


  var timer;
  useEffect(()=> {

    timer = setInterval(() => {
        setSeconds(seconds+1);

        if(seconds === 59) {
            setMinutes(minutes+1);
            setSeconds(0);
            if(minutes === 59) {
              setHours(hours+1);
              setMinutes(0);
            }
        }

    }, 1000)

    return () => clearInterval(timer);
  });


  return (
    <View style={styles.timer}>
      <Text style={styles.font}>{hours < 10 && 0}{hours > 0 && hours}:{minutes < 10 && 0}{minutes}:{seconds < 10 && 0}{seconds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'red',
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  font: {
    fontSize: 25,
  }
})


export default Timer;
