import * as React from "react";

import AppContext from "../components/AppContext";

const moveItem = (ReceivingList, setRecevingList, payload, toListName) => {
  const myContext = React.useContext(AppContext);

  console.log("fuck");
  //   const idk = React.useContext(AppContext);

  //   if (payload[1] != toListName) {
  //     let tempSendingList;
  //     let tempReceivingList = [...ReceivingList];
  //     let setSendingList;

  //     if (payload[1] === "task") {
  //       tempSendingList = [...idk.dragTaskList];

  //       setSendingList = idk.setDragTaskList;
  //     } else if (payload[1] === "done") {
  //       tempSendingList = [...idk.dragDoneList];

  //       setSendingList = idk.setDragDoneList;
  //     } else if (payload[1] === "currentTask") {
  //       tempSendingList = [...idk.currentTaskList];

  //       setSendingList = idk.setCurrentTaskList;
  //     }
  //     sentItem = tempSendingList[payload[0]];

  //     sentItem.currentList = toListName;
  //     sentItem.tChart = 12;
  //     tempReceivingList.push(sentItem);
  //     setRecevingList(tempReceivingList);

  //     if (payload[1] === "currentTask") {
  //       tempSendingList[payload[0]] = "";
  //     } else {
  //       tempSendingList.splice(payload[0], 1);
  //     }

  //     setSendingList(tempSendingList);
  //   }
};

export default moveItem;
