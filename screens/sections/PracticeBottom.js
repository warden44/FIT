//refactor draxview onReceiveDragDrop section into functions that :
//1. Check where dragged item is coming from
//2. Creates draggedItem from fromList based on payload... maybe move creating tempFrom and tempTo lists to top
//2. Sets item's currentList of dragged item to receiving list || if from currentTask, also set item's tChartId to 12
//3. Creates tempTo list
//4. Pushes draggedItem to tempTo list
//5. set toList to tempToList
//6. set tempFrom list
//7. splice payload's index from tempFromList || if from currentTask, instead set index to empty string
//8. set fromList to tempFromList
// if setFunction cant be passed as param, have function return tempToList, and use setToList on the return
// params... payload, toList, setToList, toListName

import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "../../components/Timer";
import TChart from "../../components/TChart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import AppContext from "../../components/AppContext";
import * as functs from "../../utils/MoveItem";

const gestureRootViewStyle = { flex: 1 };

function PracticeBottom(props) {
  const myContext = React.useContext(AppContext);

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

  const [dragDoneList, setDragDoneList] = React.useState(DoneList);
  const [dragTaskList, setDragTaskList] = React.useState(TaskList);

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

      if (pushReplace) {  //if pushReplace param is set to true...
        pushItem.currentList = "done";  //fix attributes of item that is going to be pushed
        pushItem.tChart = 12;
        if (payload[1] === "done") {  //if sending list is "done", push to tempSendingList
          tempSendingList.push(pushItem);
        } else {  //else create temp list from dragDoneList, push, and set
          let tempPushList = [...dragDoneList];
          tempPushList.push(pushItem);
          setDragDoneList(tempPushList);
        }
      }

      setSendingList(tempSendingList); //set actual sending list to temp sending list
      setRecevingList(tempReceivingList); //set actual receiving list to temp list. Do this last incase swapping inside tCharts

    }
  }

  const userSettings = {
    dragDoneList,
    dragTaskList,
    currentTaskList,
    setDragDoneList,
    setDragTaskList,
    setCurrentTaskList,
    moveItem,
  };

  const TodoTasks = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.task, { borderColor: item.border_color }]}
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
          moveItem(
            dragTaskList,
            setDragTaskList,
            event.dragged.payload,
            "task"
          );
        }}
      />
    );
  };

  const DoneTasks = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.task, { borderColor: item.border_color }]}
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
          moveItem(
            dragDoneList,
            setDragDoneList,
            event.dragged.payload,
            "done"
          );
        }}
      />
    );
  };

  const FlatListItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const [bench, setBench] = React.useState("");
  const [checkBench, setCheckBench] = React.useState(false);

  return (
    <AppContext.Provider value={userSettings}>
      <GestureHandlerRootView style={gestureRootViewStyle}>
        <DraxProvider style={styles.container}>
          <View style={styles.todo}>
            {dragTaskList.map((item, index) =>
              TodoTasks({ item, index })
            )}
          </View>
          <View style={styles.done}>
            {dragDoneList.map((item, index) =>
              DoneTasks({ item, index })
            )}
          </View>
          <View style={styles.rightBotom}>
            <View style={styles.benchmarks}>
              {/* Benchmarks */}
              <TouchableOpacity
                style={styles.check}
                onPress={() =>
                  checkBench === true
                    ? setCheckBench(false)
                    : setCheckBench(true)
                }
              >
                <View style={styles.outterCheck}>
                  {checkBench === true && <View style={styles.innerCheck} />}
                </View>
                <Text style={[styles.bold, styles.font]}>Benchmarks:</Text>
              </TouchableOpacity>

              {[
                '"All Clear" Complete',
                "Fire Under Control",
                "Loss Stopped",
              ].map((choice) => (
                <TouchableOpacity
                  key={choice}
                  style={styles.button}
                  onPress={() =>
                    bench === choice ? setBench("none") : setBench(choice)
                  }
                >
                  <View style={styles.outterButton}>
                    {bench === choice && <View style={styles.innerButton} />}
                  </View>
                  <Text style={[styles.font, styles.bold]}>
                    {choice}
                    <Text style={[styles.bold, styles.smallFont]}>
                      {"\n"}PAR
                    </Text>
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.elapsed}>
              <Timer></Timer>
            </View>
            <View style={styles.teamCharts}>
              <TChart style={styles.tChart} tChartId={0} />
              <TChart style={styles.tChart} tChartId={1} />
              <TChart style={styles.tChart} tChartId={2} />
              <TChart style={styles.tChart} tChartId={3} />
              <TChart style={styles.tChart} tChartId={4} />
              <TChart style={styles.tChart} tChartId={5} />
              <TChart style={styles.tChart} tChartId={6} />
              <TChart style={styles.tChart} tChartId={7} />
              <TChart style={styles.tChart} tChartId={8} />
              <TChart style={styles.tChart} tChartId={9} />
              <TChart style={styles.tChart} tChartId={10} />
              <TChart style={styles.tChart} tChartId={11} />
            </View>
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  benchmarks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingRight: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  check: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  done: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  elapsed: {
    width: "100%",
  },

  exampleText: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  font: {
    fontSize: 14,
    textAlign: "center",
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
  outterButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    marginLeft: 10,
    marginRight: 5,
  },
  outterCheck: {
    width: 15,
    height: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    marginRight: 10,
  },
  rightBotom: {
    width: "55%",
    height: "95%",
    backgroundColor: "gray",
  },
  scroll: {
    //idk
  },
  smallFont: {
    fontSize: 10,
  },
  task: {
    width: "31.5%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: 2,
    marginTop: 4,
    marginBottom: 4,
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 15,
    // shadowColor: 'white',
  },
  taskAdditional: {
    borderColor: "yellow",
  },
  taskText: {
    color: "blue",
  },
  teamCharts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  tChart: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: "25%",
    height: "22%",
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    paddingBottom: 0,
  },
  tChartSection: {
    textAlign: "center",
    flex: 1,
    borderWidth: 2,
    paddingBottom: 0,
  },
  tChartTimer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  // timer: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   textAlign: 'center',
  // },
  // timerMain: {
  //   width: 75,
  //   height: 25,
  //   backgroundColor: 'lightgray',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   borderColor: 'red',
  //   margin: 5,
  //   paddingLeft: 5,
  //   paddingRight: 5,
  //   textAlign: 'center',
  //   fontSize: 24,
  //   },
  todo: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  tSection: {
    height: "25%",
  },
});

export default PracticeBottom;
