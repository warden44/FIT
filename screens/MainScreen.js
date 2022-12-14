import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Top from "./sections/Top";
import PracticeBottom from "./sections/PracticeBottom";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import AppContext from "../components/AppContext";
function MainScreen(props) {
  const gestureRootViewStyle = { flex: 1 };

  const TaskList = [
    {
      id: 1,
      name: "Fire Attack",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 2,
      name: "Support/Backup Lines",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 3,
      name: "FDC Connection",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 4,
      name: "Standpipe Connection",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 5,
      name: "Exposure",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 6,
      name: "Search/Rescue",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 7,
      name: "Evacuation",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 8,
      name: "Ventilation",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 9,
      name: "Water Supply",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 10,
      name: "Secondary Water Supply",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 11,
      name: "IRIT",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 12,
      name: "RIT",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 13,
      name: "Assign Safety Officeer",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 14,
      name: "Assign Accountability Officer",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 15,
      name: "Utilities",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 16,
      name: "Gas",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 17,
      name: "Electric",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 18,
      name: "Water",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 19,
      name: "Rehab",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 20,
      name: "Salvage",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 21,
      name: "Overhaul",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 22,
      name: "Medical",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 23,
      name: "Traffic Control",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 24,
      name: "Police",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 25,
      name: "PIO",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 26,
      name: "Investigators",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 27,
      name: "Fire Marhsal",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 28,
      name: "State Fire Marhsal",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 29,
      name: "Health Department",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 30,
      name: "Occupant Services",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 31,
      name: "Board Up",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 32,
      name: "Red Cross",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
  ];
  const DoneList = [
    {
      id: 13,
      name: "M",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
    {
      id: 14,
      name: "N",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
    {
      id: 15,
      name: "O",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
    {
      id: 16,
      name: "P",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
  ];
  const [currentTaskList, setCurrentTaskList] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [currentTeamList, setCurrentTeamList] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const TeamList = [
    {
      id: 13,
      label: "M",
      name: "M",
      border_color: "#ffaaff",
      value: 0,
      currentList: "enroute",
    },
    {
      id: 14,
      label: "N",
      name: "N",
      border_color: "#ffaaff",
      value: 1,
      currentList: "enroute",
    },
    {
      id: 15,
      label: "O",
      name: "O",
      border_color: "#ffaaff",
      value: 2,
      currentList: "enroute",
    },
    {
      id: 16,
      label: "P",
      name: "P",
      border_color: "#ffaaff",
      value: 3,
      currentList: "enroute",
    },    {
      id: 17,
      label: "Q",
      name: "Q",
      border_color: "#ffaaff",
      value: 4,
      currentList: "enroute",
    },
  ];
  
  const ReadyList = [
    {
      id: 13,
      label: "x",
      name: "x",
      border_color: "#ffaaff",
      value: 0,
      currentList: "ready",
    },
    {
      id: 14,
      label: "y",
      name: "y",
      border_color: "#ffaaff",
      value: 1,
      currentList: "ready",
    },
  ];

  const [dragDoneList, setDragDoneList] = React.useState(DoneList);
  const [dragTaskList, setDragTaskList] = React.useState(TaskList);
  const [dropTeamList, setDropTeamList] = React.useState(TeamList);
  const [dragEnrouteList, setDragEnrouteList] = React.useState([]);
  const [dragReadyList, setDragReadyList] = React.useState(ReadyList)

  function indexify() {
    dropTeamList.map((team, index) => (team.value = index));
  }

  function moveItem(
    ReceivingList,
    setRecevingList,
    payload,
    toListName,
    tChartId = 12,
    pushReplace = false
  ) {
    if (payload[1] != toListName || toListName === "currentTask") {
      //if it is not sending to itself. Allow for currentTask and currentTeam so items can be moved amongst tCharts

      let tempSendingList; //initiate temporary copy sending list
      let tempReceivingList = [...ReceivingList]; //declare temp receiving list to passed parameter
      let setSendingList; //initiate method to set sending list
      let pushItem = tempReceivingList[tChartId]; //set push item in case we are pushing old item to done

      if (payload[1] === "task") {
        //if item is coming from task list
        tempSendingList = [...dragTaskList]; //declare temp sending list to dragTaskList

        setSendingList = setDragTaskList; //declare method to set sending list to setDragTaskList
      } else if (payload[1] === "done") {
        //if item is coming from done list
        tempSendingList = [...dragDoneList]; //declare temps ending list to dragDoneList

        setSendingList = setDragDoneList; //declare method to se sending list to setDragDoneList
      } else if (payload[1] === "currentTask") {
        //if item is coming from current task list
        tempSendingList = [...currentTaskList]; //declare temp sending list to currentTaskList

        setSendingList = setCurrentTaskList; //declare method to set sending list to setCurrentTaskList
      }
      let sentItem = tempSendingList[payload[0]]; //declare the item being sent by the index of the sending list

      sentItem.currentList = toListName; //change sent item's current list to receiving list name

      if (toListName === "currentTask") {
        //if item is going to a tchart, it needs to be inserted instead of pushed
        sentItem.tChart = tChartId; //declare sent item's tChart id to 12
        tempReceivingList[tChartId] = sentItem; //insert item into receiving list
      } else {
        sentItem.tChart = 12; //declare sent item's tChart id to 12
        tempReceivingList.push(sentItem); //push sent item to receiving list
      }

      if (payload[1] === "currentTask" && toListName === "currentTask") {
        //if swapping inside of currentList, just change the receiving list, or else idk just dont
        tempReceivingList[payload[0]] = ""; //erase item at what was the index
      } else if (payload[1] === "currentTask") {
        //if coming from current task list
        tempSendingList[payload[0]] = ""; //erase item at what was the index
      } else {
        tempSendingList.splice(payload[0], 1); //else splice sending list at what was the index
      }

      if (pushReplace) {
        //if pushReplace param is set to true...
        pushItem.currentList = "done"; //fix attributes of item that is going to be pushed
        pushItem.tChart = 12;
        if (payload[1] === "done") {
          //if sending list is "done", push to tempSendingList
          tempSendingList.push(pushItem);
        } else {
          //else create temp list from dragDoneList, push, and set
          let tempPushList = [...dragDoneList];
          tempPushList.push(pushItem);
          setDragDoneList(tempPushList);
        }
      }

      setSendingList(tempSendingList); //set actual sending list to temp sending list
      setRecevingList(tempReceivingList); //set actual receiving list to temp list. Do this last incase swapping inside tCharts
    }
  }
  function moveTeam(
    ReceivingList,
    setRecevingList,
    payload,
    toListName,
    tChartId = 12,
    pushReplace = false
  ) {
    if (payload[1] != toListName || toListName === "currentTeam") {
      //if it is not sending to itself. Allow for currentTask and currentTeam so items can be moved amongst tCharts

      let tempSendingList; //initiate temporary copy sending list
      let tempReceivingList = [...ReceivingList]; //declare temp receiving list to passed parameter
      let setSendingList; //initiate method to set sending list
      let pushItem = tempReceivingList[tChartId]; //set push item in case we are pushing old item to done

      if(payload[1] === "team") {
        tempSendingList = [...dropTeamList]; //declare temp sending list to dragEnrouteList

        setSendingList = setDropTeamList; //declare method to set sending list to setDragEnrouteList
      }
      else if(payload[1] === "enroute") {
        //if item is coming from task list
        tempSendingList = [...dragEnrouteList]; //declare temp sending list to dragEnrouteList

        setSendingList = setDragEnrouteList; //declare method to set sending list to setDragEnrouteList
      } else if (payload[1] === "ready") {
        //if item is coming from done list
        tempSendingList = [...dragReadyList]; //declare temps ending list to dragDoneList

        setSendingList = setDragReadyList; //declare method to se sending list to setDragDoneList
      } else if (payload[1] === "currentTeam") {
        //if item is coming from current task list
        tempSendingList = [...currentTeamList]; //declare temp sending list to currentTaskList

        setSendingList = setCurrentTeamList; //declare method to set sending list to setCurrentTaskList
      }
      let sentItem = tempSendingList[payload[0]]; //declare the item being sent by the index of the sending list
      sentItem.currentList = toListName; //change sent item's current list to receiving list name

      if (toListName === "currentTeam") {
        //if item is going to a tchart, it needs to be inserted instead of pushed
        sentItem.tChart = tChartId; //declare sent item's tChart id to 12
        tempReceivingList[tChartId] = sentItem; //insert item into receiving list
      } else {
        sentItem.tChart = 12; //declare sent item's tChart id to 12
        tempReceivingList.push(sentItem); //push sent item to receiving list
      }

      if (payload[1] === "currentTeam" && toListName === "currentTeam") {
        //if swapping inside of currentList, just change the receiving list, or else idk just dont
        tempReceivingList[payload[0]] = ""; //erase item at what was the index
      } else if (payload[1] === "currentTeam") {
        //if coming from current task list
        tempSendingList[payload[0]] = ""; //erase item at what was the index
      } else {
        tempSendingList.splice(payload[0], 1); //else splice sending list at what was the index
      }

      if (pushReplace) {
        //if pushReplace param is set to true...
        pushItem.currentList = "ready"; //fix attributes of item that is going to be pushed
        pushItem.tChart = 12;
        if (payload[1] === "ready") {
          //if sending list is "done", push to tempSendingList
          tempSendingList.push(pushItem);
        } else {
          //else create temp list from dragDoneList, push, and set
          let tempPushList = [...dragReadyList];
          tempPushList.push(pushItem);
          setDragReadyList(tempPushList);
        }
      }

      setSendingList(tempSendingList); //set actual sending list to temp sending list
      setRecevingList(tempReceivingList); //set actual receiving list to temp list. Do this last incase swapping inside tCharts
      if(payload[1] === "team") {
        indexify();
      }
    }
  }

  const userSettings = {
    dragDoneList,
    dragTaskList,
    currentTaskList,
    dropTeamList,
    dragEnrouteList,
    dragReadyList,
    currentTeamList,
    setDragDoneList,
    setDragTaskList,
    setCurrentTaskList,
    setDropTeamList,
    setDragEnrouteList,
    setDragReadyList,
    setCurrentTeamList,
    moveItem,
    moveTeam,
  };

  return (
    <AppContext.Provider value={userSettings}>
      <GestureHandlerRootView style={gestureRootViewStyle}>
        <DraxProvider style={styles.container}>
          <View style={styles.top}>
            <Top />
          </View>
          <View style={styles.bottom}>
            <PracticeBottom />
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 9,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  top: {
    flex: 5,
  },
});

export default MainScreen;
