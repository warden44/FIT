import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [hours, setHours] = useState(0);
  const [increment, setIncrement] = useState(0);

  //getting current time and dates to mark date of incident
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hour = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds(); //To get the Current Seconds

  //setting consts to those markers so they dont change every second
  const [markDate, setMarkDate] = useState(date);
  const [markMonth, setMarkMonth] = useState(month);
  const [markYear, setMarkYear] = useState(year);
  const [markHour, setMarkHour] = useState(hour);
  const [markMin, setMarkMin] = useState(min);
  const [markSec, setMarkSec] = useState(sec);

  //reset date
  function resetDate() {
    setMarkDate(date);
    setMarkMonth(month);
    setMarkYear(year);
    setMarkHour(hour);
    setMarkMin(min);
    setMarkSec(sec);
  }

  //make hours AM and PM
  var timeType;
  function hourAMPM() {
    if (markHour <= 11) {
      timeType = "AM";
    } else {
      timeType = "PM";
    }

    if (markHour > 12) {
      setMarkHour(hour - 12);
    }

    if (markHour == 0) {
      setMarkHour(12);
    }
  }

  hourAMPM();

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
        <View style={styles.dateSmall}>
          <View>
            <Text>
              {markHour < 10 && 0}
              {markHour >= 0 && markHour}:{markMin < 10 && 0}
              {markMin} {timeType}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.smallTimer}
            onLongPress={() => {
              //reset timer
              setSeconds(0);
              setMinutes(0);
              setHours(0);
              setIncrement(0);

              console.log(min);
              resetDate();
              console.log(min);
            }}
            onPress={() => {
              //if timer is not running and is clicked, reset date
              if (increment === 0) {

                console.log(min);
                resetDate();
                console.log(min);


                //start timer
                setIncrement(1);
              }
            }}
          >
            <Text adjustsFontSizeToFit>
              {hours < 10 && 0}
              {hours >= 0 && hours}:{minutes < 10 && 0}
              {minutes}:{seconds < 10 && 0}
              {seconds}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.date}>
            <View>
              <Text>
                {markMonth}/{markDate}/{markYear}
              </Text>
            </View>
            <View>
              <Text>
                {markHour < 10 && 0}
                {markHour >= 0 && markHour}:{markMin < 10 && 0}
                {markMin} {timeType}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.bigTimer}
            onLongPress={() => {
              //reset timer
              setSeconds(0);
              setMinutes(0);
              setHours(0);
              setIncrement(0);

              console.log(min);
              resetDate();
              console.log(min);

            }}
            onPress={() => {
              //if timer is not running and is clicked, reset date
              if (increment === 0) {

                console.log(min);
                resetDate();
                console.log(min);


                //start timer
                setIncrement(1);
              }
            }}
          >
            <Text style={styles.bigFont} adjustsFontSizeToFit>
              {hours < 10 && 0}
              {hours >= 0 && hours}:{minutes < 10 && 0}
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
    opacity: 0.075,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    textDecorationStyle: "double",
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
  },
  dateSmall: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
