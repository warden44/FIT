import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "./Timer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import AppContext from './AppContext';
  

function TChart(props) {

  const myContext = React.useContext(AppContext);

  const [currentTaskList, setCurrentTaskList] = React.useState([""]);

  const recievingTaskZone = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.tChartSection, { borderColor: item.border_color }]}
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
              <Text style={styles.textStyle}>
                {item.name}
              </Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let fromList;
          if (event.dragged.payload[1] === "task") {
            // if from task list
            fromList = [...myContext.taskList];

            let selected_item = fromList[event.dragged.payload[0]]; //get index of dragged item
            selected_item.currentList = "currentTask"; //set current task to current task

            let newCurrentTaskList = [...currentTaskList]; //set temp list to receiving list

            if (!newCurrentTaskList[0]) {
              //if receiving list is empty... add to list

              newCurrentTaskList[index] = selected_item; //replace receiving item with dragged item
              setCurrentTaskList(newCurrentTaskList); //set actual list to temp list

              let newFromList = [...fromList]; //set temp from list
              newFromList.splice(newFromList.indexOf(selected_item), 1); // removed dragged item from dragged list
              myContext.setDragTaskList(newFromList); // set actual from list to temp list
            } else {
              // take current task and push it to done list, add dragged task
              let pushDragDoneList = [...myContext.doneList]; //set temp to dragDoneList
              newCurrentTaskList[0].currentList = "done"; //set pushing task's current list to done
              pushDragDoneList.push(newCurrentTaskList[0]); //push current task to temp dragDoneList
              myContext.setDragDoneList(pushDragDoneList);

              newCurrentTaskList[index] = selected_item; //replace receiving item with dragged item
              setCurrentTaskList(newCurrentTaskList); //set actual list to temp list

              let newFromList = [...fromList]; //set temp from list
              newFromList.splice(newFromList.indexOf(selected_item), 1); // removed dragged item from dragged list
              myContext.setDragTaskList(newFromList); // set actual from list to temp list
            }
          } else if (event.dragged.payload[1] === "done") {
            //if from done list
            fromList = [...myContext.doneList];

            let selected_item = fromList[event.dragged.payload[0]]; //get index of dragged item
            selected_item.currentList = "currentTask"; //set current task to current task

            let newCurrentTaskList = [...currentTaskList]; //set temp list to receiving list

            if (!newCurrentTaskList[0]) {
              //if receiving list is empty... add to list

              newCurrentTaskList[index] = selected_item; //replace receiving item with dragged item
              setCurrentTaskList(newCurrentTaskList); //set actual list to temp list

              let newFromList = [...fromList]; //set temp from list
              newFromList.splice(newFromList.indexOf(selected_item), 1); // removed dragged item from dragged list
              myContext.setDragDoneList(newFromList); // set actual from list to temp list
            } else {
              // take current task and push it to done list, add dragged task
              let pushDragDoneList = [...myContext.doneList]; //set temp to dragDoneList
              newCurrentTaskList[0].currentList = "done"; //set pushing task's current list to done
              pushDragDoneList.push(newCurrentTaskList[0]); //push current task to temp dragDoneList
              fromList = [...pushDragDoneList]; // update from list with temp list

              newCurrentTaskList[index] = selected_item; //replace receiving item with dragged item
              setCurrentTaskList(newCurrentTaskList); //set actual list to temp list

              let newFromList = [...fromList]; //set temp from list
              newFromList.splice(newFromList.indexOf(selected_item), 1); // removed dragged item from dragged list
              myContext.setDragDoneList(newFromList); // set actual from list to temp list
            }
          }
          if (fromList) {
            //if fromList is set...
          }
        }}
      />
    );
  };

  return (
    <View style={styles.tChart}>
      {currentTaskList.map((item, index) => recievingTaskZone({ item, index }))}
      <View style={styles.tChartSection}>
        <Text>Team Name cock</Text>
      </View>
      <View style={styles.tChartTimer}>
        <Timer size={"smallTimer"}></Timer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default TChart;
