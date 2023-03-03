import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CheckListItem from "../../components/CheckListItem";

import { useSelector, useDispatch } from "react-redux";
import { pushReady } from "../../src/app/features/readyTeams/readyTeamsSlice";
import { pushEnroute } from "../../src/app/features/enrouteTeams/enrouteTeamsSlice";
import { insertRoster } from "../../src/app/features/rosterTeams/rosterTeamsSlice";

import TeamList from "../../components/TeamList";

function PracticeTop(props) {
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);

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

        <TeamList
          title={"Roster"}
          list={rosterTeams}
          listName={"roster"}
          push={insertRoster}
          pagination={true}
        />
        <TeamList
          title={"Enroute"}
          list={enrouteTeams}
          listName={"enroute"}
          push={pushEnroute}
          pagination={false}
        />
        <TeamList
          title={"Ready"}
          list={readyTeams}
          listName={"ready"}
          push={pushReady}
          pagination={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  top: {
    width: "100%",
    maxHeight: "100%",
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
});

export default PracticeTop;
