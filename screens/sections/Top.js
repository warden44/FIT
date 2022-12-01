//react native paper
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Top(props) {
  //const [checked, setChecked] = React.useState("first");

  const [alarm, setAlarm] = useState("");
  const [checkAlarm, SetAlarmCheck] = useState("");

  const [report, setReport] = useState("");
  const [checkReport, setReportCheck] = useState("");

  const [strategy, setStrategy] = useState("");
  const [checkStrategy, setStrategyCheck] = useState("");

  const [mode, setMode] = useState("");
  const [checkMode, setCheckMode] = useState("");

  const [command, setCommand] = useState("");
  const [checkCommand, setCheckCommand] = useState("");

  const [location, setLocation] = useState("");
  const [checkLocation, setCheckLocation] = useState("");

  return (
    //header
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Syracuse Fire Incident Tactical Worksheet
        </Text>
      </View>

      <View style={styles.top}>
        {/* Initial Size Up Buttons */}
        <View style={styles.topButtons}>
          <Text style={styles.groupingText}>Initial Size-Up:</Text>

          {/* Working Fire Notifications */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkAlarm === "true"
                  ? SetAlarmCheck("false")
                  : SetAlarmCheck("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkAlarm === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text style={styles.bold}>Working Fire Notifications:</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.wrapper, styles.indent]}>
            {["1st alarm", "2nd alarm", "3rd alarm"].map((alarms) => (
              <TouchableOpacity
                key={alarms}
                style={styles.button}
                onPress={() =>
                  alarm === alarms ? setAlarm("none") : setAlarm(alarms)
                }
              >
                <View style={styles.outterButton}>
                  {alarm === alarms && <View style={styles.innerButton} />}
                </View>
                <Text style={[styles.font, styles.bold]}>{alarms}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* On Scene Report */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkReport === "true"
                  ? setReportCheck("false")
                  : setReportCheck("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkReport === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text>On Scene Report:</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.wrapper, styles.indent]}>
            {[
              "Location / Building Type / Smoke and Fire Conditions / Threats to Exposures",
            ].map((reports) => (
              <TouchableOpacity
                key={reports}
                style={styles.button}
                onPress={() =>
                  report === reports ? setReport("none") : setReport(reports)
                }
              >
                <View style={styles.outterButton}>
                  {report === reports && <View style={styles.innerButton} />}
                </View>
                <Text style={styles.font}>{reports}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Declare Strategy */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkStrategy === "true"
                  ? setStrategyCheck("false")
                  : setStrategyCheck("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkStrategy === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text>Declare Strategy:</Text>
            </TouchableOpacity>

            {["Offensive", "Defensive"].map((choice) => (
              <TouchableOpacity
                key={choice}
                style={styles.button}
                onPress={() =>
                  strategy === choice
                    ? setStrategy("none")
                    : setStrategy(choice)
                }
              >
                <View style={styles.outterButton}>
                  {strategy === choice && <View style={styles.innerButton} />}
                </View>
                <Text style={styles.font}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Declare Mode */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkMode === "true"
                  ? setCheckMode("false")
                  : setCheckMode("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkMode === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text>Declare Mode:</Text>
            </TouchableOpacity>

            {["Investigative", "Fast Action", "Command"].map((choice) => (
              <TouchableOpacity
                key={choice}
                style={styles.button}
                onPress={() =>
                  mode === choice ? setMode("none") : setMode(choice)
                }
              >
                <View style={styles.outterButton}>
                  {mode === choice && <View style={styles.innerButton} />}
                </View>
                <Text style={styles.font}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Establish Command */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkCommand === "true"
                  ? setCheckCommand("false")
                  : setCheckCommand("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkCommand === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text>Establish Command:</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.wrapper, styles.indent]}>
            {[
              'Name / Incident Command / Designated "A" Side / Command Post Location',
            ].map((choice) => (
              <TouchableOpacity
                key={choice}
                style={styles.button}
                onPress={() =>
                  command === choice ? setCommand("none") : setCommand(choice)
                }
              >
                <View style={styles.outterButton}>
                  {command === choice && <View style={styles.innerButton} />}
                </View>
                <Text style={styles.font}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Designate Accountability Location */}
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.check}
              onPress={() =>
                checkLocation === "true"
                  ? setCheckLocation("false")
                  : setCheckLocation("true")
              }
            >
              <View style={styles.outterCheck}>
                {checkLocation === "true" && <View style={styles.innerCheck} />}
              </View>
              <Text>Designate Accountability Location:</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.wrapper, styles.indent]}>
            {[
              "Initial Operation / Urgent Needs / Instruction to Incoming Units",
            ].map((choice) => (
              <TouchableOpacity
                key={choice}
                style={styles.button}
                onPress={() =>
                  location === choice
                    ? setLocation("none")
                    : setLocation(choice)
                }
              >
                <View style={styles.outterButton}>
                  {location === choice && <View style={styles.innerButton} />}
                </View>
                <Text style={styles.font}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.enroute}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            Enroute
          </Text>
        </View>
        <View style={styles.ready}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            Ready For Assignment
          </Text>
        </View>
        <View style={styles.mayday}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            Mayday
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  check: {
    flexDirection: "row",
  },
  choice: {
    marginRight: 10,
  },
  container: {
    flex: 1,
  },
  enroute: {
    width: "15%",
    height: "95%",
    backgroundColor: "blue",
    alignSelf: "center",
    borderWidth: 2,
  },
  font: {
    fontSize: 13,
  },
  groupingText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  header: {
    alignSelf: "center",
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    top: 10,
  },
  indent: {
    left: 20,
  },
  innerButton: {
    width: 10,
    height: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  innerCheck: {
    width: 10,
    height: 10,
    backgroundColor: "red",
  },
  mayday: {
    width: "20%",
    height: "95%",
    backgroundColor: "purple",
    alignSelf: "center",
    borderWidth: 2,
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
  ready: {
    width: "15%",
    height: "95%",
    backgroundColor: "yellow",
    alignSelf: "center",
    borderWidth: 2,
  },
  top: {
    width: "100%",
    top: 10,
    borderTopColor: "black",
    borderTopWidth: 2,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  topButtons: {
    width: "40%",
  },
  wrapper: {
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
  },
});

export default Top;
