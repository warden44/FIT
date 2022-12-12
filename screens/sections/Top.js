//react native paper
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

function Top(props) {
  //const [checked, setChecked] = React.useState("first");

  const TeamList = [
    {
      id: 13,
      label: "M",
      border_color: "#ffaaff",
      value: 1,
    },
    {
      id: 14,
      label: "N",
      border_color: "#ffaaff",
      value: 2,
    },
    {
      id: 15,
      label: "O",
      border_color: "#ffaaff",
      value: 3,
    },
    {
      id: 16,
      label: "P",
      border_color: "#ffaaff",
      value: 4,
    },
  ];

  const [alarm, setAlarm] = useState("");
  const [checkAlarm, SetAlarmCheck] = useState(false);

  const [report, setReport] = useState("");
  const [checkReport, setReportCheck] = useState(false);

  const [strategy, setStrategy] = useState("");
  const [checkStrategy, setStrategyCheck] = useState(false);

  const [mode, setMode] = useState("");
  const [checkMode, setCheckMode] = useState(false);

  const [command, setCommand] = useState("");
  const [checkCommand, setCheckCommand] = useState(false);

  const [location, setLocation] = useState("");

  /// drop down list ///
  const [checkLocation, setCheckLocation] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(TeamList);
  const [label, setLabel] = useState("team");
  // { label: "Apple", value: "apple" },
  // { label: "Banana", value: "banana" },
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
                checkAlarm === true ? SetAlarmCheck(false) : SetAlarmCheck(true)
              }
            >
              <View style={styles.outterCheck}>
                {checkAlarm === true && <View style={styles.innerCheck} />}
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
                checkReport === true
                  ? setReportCheck(false)
                  : setReportCheck(true)
              }
            >
              <View style={styles.outterCheck}>
                {checkReport === true && <View style={styles.innerCheck} />}
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
                checkStrategy === true
                  ? setStrategyCheck(false)
                  : setStrategyCheck(true)
              }
            >
              <View style={styles.outterCheck}>
                {checkStrategy === true && <View style={styles.innerCheck} />}
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
                checkMode === true ? setCheckMode(false) : setCheckMode(true)
              }
            >
              <View style={styles.outterCheck}>
                {checkMode === true && <View style={styles.innerCheck} />}
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
                checkCommand === true
                  ? setCheckCommand(false)
                  : setCheckCommand(true)
              }
            >
              <View style={styles.outterCheck}>
                {checkCommand === true && <View style={styles.innerCheck} />}
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
                checkLocation === true
                  ? setCheckLocation(false)
                  : setCheckLocation(true)
              }
            >
              <View style={styles.outterCheck}>
                {checkLocation === true && <View style={styles.innerCheck} />}
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
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            setlabel={label}
          />
          <View>
            <Text style={styles.teamName}>{label}</Text>
            {/* <Text style={styles.teamName}>Team Name</Text>
            <Text style={styles.teamName}>Team Name</Text>
            <Text style={styles.teamName}>Team Name</Text> */}
            <Text style={styles.teamName}>{label}</Text>
          </View>
        </View>
        <View style={styles.ready}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            Ready For Assignment
          </Text>
          <View>
            <Text style={styles.teamName}>Team Name</Text>
            <Text style={styles.teamName}>Team Name</Text>
            <Text style={styles.teamName}>Team Name</Text>
            <Text style={styles.teamName}>Team Name</Text>
          </View>
        </View>
        <View style={styles.mayday}>
          <Text style={styles.maydayHeader}>
            "MAYDAY" Lost or Trapped FireFighters
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>E</Text>mergency Traffic Declared
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>R</Text>IT Deployed
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>U</Text>pgrade the assignment
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>P</Text>AR on ALL crews in the hazard
            zone
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>T</Text>actical Channel assigned for
            the specific fire
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>T</Text>ools needed
          </Text>
          <Text style={styles.chartSection}>
            <Text style={styles.highlight}>T</Text>ime the MAYDAY was called
          </Text>
        </View>
      </View>
    </View>
  );
  console.log(name);
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  chartSection: {
    flex: 1,
    borderTopWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
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
    backgroundColor: "green",
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
  highlight: {
    color: "red",
    fontWeight: "bold",
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
    width: "25%",
    height: "95%",
    backgroundColor: "yellow",
    borderWidth: 2,
  },
  maydayHeader: {
    flex: 1,
    color: "white",
    backgroundColor: "red",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
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
    backgroundColor: "cyan",
    borderWidth: 2,
  },
  teamName: {
    borderTopWidth: 2,
    margin: 5,
    textAlign: "center",
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
    alignItems: "center",
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
