import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
  Switch,
} from "react-native";
import Top from "./sections/Top";
import PracticeTop from "./sections/PracticeTop";
import PracticeBottom from "./sections/PracticeBottom";
import Bottom from "./sections/Bottom";
import CheckListItem from "../components/CheckListItem";
import Mayday from "../components/Mayday";
import TeamList from "../components/TeamList";
import { insertRoster } from "../src/app/features/rosterTeams/rosterTeamsSlice";
import { pushEnroute } from "../src/app/features/enrouteTeams/enrouteTeamsSlice";
import { pushReady } from "../src/app/features/readyTeams/readyTeamsSlice";
import { pushStaged } from "../src/app/features/stagedTeams/stagedTeams";
import Timer from "../src/app/features/Timer";
import Icon from "react-native-vector-icons/Feather";
import Tasks from "../src/app/features/tasks/Tasks";
import Benchmarks from "../components/Benchmarks";
import ElapsedTime from "../components/ElapsedTime";
import TChart from "../src/app/features/tChart/TChart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { useSelector } from "react-redux";
import { useState } from "react";
function MainScreen(props) {
  const gestureRootViewStyle = { flex: 1 };

  const [mayday, setMayday] = useState(true);

  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const stagedTeams = useSelector((state) => state.stagedTeams.teams);

  return (
    <GestureHandlerRootView style={gestureRootViewStyle}>
      <DraxProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <View style={styles.containerHeader}>
            <View style={styles.headerTimer}>
              <Timer />
            </View>
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>
                Syracuse Fire Incident Tactical Worksheet
              </Text>
            </View>
            <View style={styles.headerSettings}>
              <Icon.Button
                name="settings"
                backgroundColor={"gray"}
                size={25}
                iconStyle={styles.headerSettingsButton}
              />
              {/* <Text>Settings</Text> */}
            </View>
          </View>
          <View style={styles.containerTop}>
            {/* Initial Size Up Buttons */}

            <View style={styles.topLeft}>
              <View
                style={styles.topMaydayContainer}
              >
                <View style={styles.topMaydayLabel}>
                  <Text style={[styles.topMaydayLabelText, {borderBottomWidth: 1}, mayday && {color: "white"}]}>
                    Check List
                  </Text>
                  <Text style={[styles.topMaydayLabelText, !mayday && {color: "white"}]}>
                    MAYDAY
                  </Text>
                </View>
                <View style={styles.topMaydaySwitch}>
                  <Switch
                    onValueChange={() => (
                      setMayday(mayday ? false : true),
                      console.log("settingmayday")
                    )}
                    value={mayday}
                    thumbColor={"black"}
                    trackColor={{true: "yellow", false: "yellow"}}
                  />
                </View>
              </View>
              <View style={[styles.topMayday, { opacity: mayday ? 1 : 0 }]}>
                <Mayday />
              </View>
              <View style={{ opacity: mayday ? 0 : 1 }}>
                <Text style={styles.topButtonsGroupingText}>
                  Initial Size-Up:
                </Text>
                <CheckListItem
                  title={"Working Fire Notifications:"}
                  checkList={["1st alarm", "2nd alarm", "3rd alarm"]}
                  bold={true}
                  indent={true}
                />
                <CheckListItem
                  title={"On Scene Report:"}
                  checkList={[
                    "Location / Building Type / Smoke and Fire Conditions / Threats to Exposures",
                  ]}
                  indent={true}
                />
                <CheckListItem
                  title={"Declare Strategy:"}
                  checkList={["Offensive", "Defensive"]}
                />
                <CheckListItem
                  title={"Declare Mode:"}
                  checkList={["Investigative", "Fast Action", "Command"]}
                />
                <CheckListItem
                  title={"Establish Command:"}
                  checkList={[
                    'Name / Incident Command / Designated "A" Side / Command Post Location',
                  ]}
                  indent={true}
                />
                <CheckListItem
                  title={"Designate Accountability Location:"}
                  checkList={[
                    "Initial Operation / Urgent Needs / Instruction to Incoming Units",
                  ]}
                  indent={true}
                />
              </View>
            </View>
            <View style={styles.topTeamLists}>
              <View style={styles.topTeamListHolder}>
                <TeamList
                  title={"Roster"}
                  list={rosterTeams}
                  listName={"roster"}
                  push={insertRoster}
                  pagination={true}
                />
              </View>
              <View style={styles.topTeamListHolder}>
                <TeamList
                  title={"Enroute"}
                  list={enrouteTeams}
                  listName={"enroute"}
                  push={pushEnroute}
                />
              </View>
              <View style={styles.topTeamListHolder}>
                <TeamList
                  title={"Ready"}
                  list={readyTeams}
                  listName={"ready"}
                  push={pushReady}
                />
              </View>
              <View style={styles.topTeamListHolder}>
                <TeamList
                  title={"Staged"}
                  list={stagedTeams}
                  listName={"staged"}
                  push={pushStaged}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerBottom}>
            <View style={styles.bottomTasks}>
              <Tasks />
            </View>
            <View style={styles.bottomRight}>
              <View style={styles.bottomBenchElapsed}>
                <View style={styles.bottomBenchmarks}>
                  <Benchmarks />
                </View>
                <View style={styles.bottomElapsed}>
                  <ElapsedTime />
                </View>
              </View>
              <View style={styles.bottomTCharts}>
                {Array(16)
                  .fill()
                  .map((item, index) => (
                    <TChart key={index} tChartID={index} />
                  ))}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#FFBEBE",
  },
  containerBottom: {
    width: "100%",
    height: "64%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1%",
    paddingVertical: ".25%",
  },
  containerHeader: {
    width: "100%",
    height: "6%",
    paddingHorizontal: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  containerTop: {
    width: "100%",
    height: "30%",
    borderTopColor: "black",
    borderTopWidth: 2,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1%",
    paddingVertical: ".25%",
  },

  headerSettings: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerSettingsButton: {
    marginRight: "auto",
    marginLeft: "auto",
    height: 25,
    width: 25,
  },
  headerTimer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitle: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    height: "100%",
  },
  headerTitleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    verticalAlign: "top",
    textShadowColor: "red",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  topLeft: {
    width: "42.5%",
    height: "100%",
  },
  topMayday: {
    position: "absolute",
    left: 0,
    width: "65%",
    height: "100%",
  },
  topMaydayContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "30%",
    height: "25%",
    backgroundColor: "lightgray",
    zIndex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
  },
  topMaydayLabel: {
    flex: 2,
    height: "100%",
    zIndex: 1,
    marginRight: "1%",
    padding: 1,
    justifyContent: "center",
  },
  topMaydayLabelText: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    fontWeight: "bold",
  },
  topMaydaySwitch: {
    flex: 1,
    height: "100%",
    marginLeft: "1%",
    transform: [{ rotate: "90deg" }],
  },
  topButtonsGroupingText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  topTeamLists: {
    width: "56%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topTeamListHolder: {
    flex: 1,
    marginHorizontal: ".5%",
  },
  bottomTasks: {
    width: "25%",
  },
  bottomRight: {
    width: "74%",
    backgroundColor: "lightgray",
    borderWidth: 2,
  },
  bottomBenchElapsed: {
    flexDirection: "row",
    height: "10%",
  },
  bottomBenchmarks: {
    flex: 1,
    borderRightWidth: 0.5,
    borderBottomWidth: 1,
  },
  bottomElapsed: {
    flex: 1,
    borderLeftWidth: 0.5,
    borderBottomWidth: 1,
  },
  bottomTCharts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    flexWrap: "wrap",
  },
  dragging: {
    width: 0,
    height: 0,
    borderWidth: 0,
    textAlign: "center",
  },
  dragHover: {
    width: "15%",
    height: "auto",
  },
});

export default MainScreen;
