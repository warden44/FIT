import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);


  var timer;
  useEffect(()=> {

    timer = setInterval(() => {
        setSeconds(seconds+1);

        if(seconds === 59) {
            setMinutes(minutes+1);
            setSeconds(0);
        }
    }, 1000)

    return () => clearInterval(timer);
  });


  return (
    <View>
      <Text>{minutes}:{seconds}</Text>
    </View>
  );
}

export default Timer;
