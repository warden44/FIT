//create internal teamList that only shows when the drop down is clicked
//when item is selected in dropdown, use the index (value key) to push the team from teamList to dragTeamList
//also remove team from teamList
//dragTeamList should be mapped to drax view with a component similar to the lower half
//Issues: how do we push an item back to the teamList from the dragTeamList if we are done with it?

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import DropDownPicker from "react-native-dropdown-picker";
import AppContext from "../../components/AppContext";

function Top(props) {
  const myContext = React.useContext(AppContext);

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

  const [checkLocation, setCheckLocation] = useState(false);

  /// drop down list ///
  let something = false;
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const [items, setItems] = useState(myContext.dropTeamList);
  const [label, setLabel] = useState("roster");
  const [index, setIndex] = useState();

  useEffect(() => {
    setIndex(-1);
  }, [index]);
  // { label: "Apple", value: "apple" },
  // { label: "Banana", value: "banana" },

  const EnrouteTeams = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.team, { borderColor: item.border_color }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={[index, item.currentList]}
        longPressDelay={150}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          myContext.moveTeam(
            myContext.dragEnrouteList,
            myContext.setDragEnrouteList,
            event.dragged.payload,
            "enroute"
          );
        }}
      />
    );
  };
  const ReadyTeams = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.team, { borderColor: item.border_color }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={[index, item.currentList]}
        longPressDelay={150}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          myContext.moveTeam(
            myContext.dragReadyList,
            myContext.setDragReadyList,
            event.dragged.payload,
            "ready"
          );
        }}
      />
    );
  };

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
                checkAlarm === true
                  ? (SetAlarmCheck(false), setAlarm("none"))
                  : SetAlarmCheck(true)
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
                  alarm === alarms
                    ? (setAlarm("none"), SetAlarmCheck(false))
                    : (setAlarm(alarms), SetAlarmCheck(true))
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
                  ? (setReportCheck(false), setReport("none"))
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
                  report === reports
                    ? (setReport("none"), setReportCheck(false))
                    : (setReport(reports), setReportCheck(true))
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
                  ? (setStrategyCheck(false), setStrategy("none"))
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
                    ? (setStrategy("none"), setStrategyCheck(false))
                    : (setStrategy(choice), setStrategyCheck(true))
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
                checkMode === true
                  ? (setCheckMode(false), setMode("none"))
                  : setCheckMode(true)
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
                  mode === choice
                    ? (setMode("none"), setCheckMode(false))
                    : (setMode(choice), setCheckMode(true))
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
                  ? (setCheckCommand(false), setCommand("none"))
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
                  command === choice
                    ? (setCommand("none"), setCheckCommand(false))
                    : (setCommand(choice), setCheckCommand(true))
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
                  ? (setCheckLocation(false), setLocation("none"))
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
                    ? (setLocation("none"), setCheckLocation(false))
                    : (setLocation(choice), setCheckLocation(true))
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
        <DraxView
          style={styles.enroute}
          onReceiveDragDrop={(event) => {
            myContext.moveTeam(
              myContext.dragEnrouteList,
              myContext.setDragEnrouteList,
              event.dragged.payload,
              "enroute"
            );
          }}
        >
          {/* <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            Enroute
          </Text> */}
          <DropDownPicker
            style={styles.dropdown}
            schema={{
              label: "name",
            }}
            open={open}
            value={index}
            items={myContext.dropTeamList}
            setOpen={setOpen}
            setValue={setIndex}
            setItems={myContext.setDropTeamList}
            setlabel={label}
            maxHeight={500}
          >
            {index > -1 &&
              myContext.moveTeam(
                myContext.dragEnrouteList,
                myContext.setDragEnrouteList,
                [index, "roster"],
                "enroute"
              )}
          </DropDownPicker>
          {myContext.dragEnrouteList.map((item, index) =>
            EnrouteTeams({ item, index })
          )}
        </DraxView>
        <DraxView
          style={styles.ready}
          onReceiveDragDrop={(event) => {
            myContext.moveTeam(
              myContext.dragReadyList,
              myContext.setDragReadyList,
              event.dragged.payload,
              "ready"
            );
          }}
        >
          {/* <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            Ready For Assignment
          </Text> */}
          {myContext.dragReadyList.map((item, index) =>
            ReadyTeams({ item, index })
          )}
        </DraxView>
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
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  task: {
    width: "95%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: 2,
    marginTop: 4,
    marginBottom: 4,
  },
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
  dragging: {
    borderWidth: 10,
  },
  hoverDragging: {},
  dropdown: {
    position: "relative",
  },
  enroute: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "15%",
    height: "99%",
    backgroundColor: "lightblue",
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
  list: {
    backgroundColor: "blue",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    textAlign: "center",
  },
  mayday: {
    width: "25%",
    height: "99%",
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
  ready: {
    width: "15%",
    height: "99%",
    alignItems: "center",
    backgroundColor: "lightgreen",
    borderWidth: 2,
  },
  team: {
    width: "95%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "lightyellow",
    borderRadius: 10,
    margin: 2,
    marginTop: 4,
    marginBottom: 4,
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
