// Can drag to tCharts, yellowing out the task in the task section, when returned, should gray out tasks
//needs completed key in each task, maybe an in progress key

//later on ability to click and highlight available tcharts in addition to dragging
//long press to reset to red

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      name: "Fire Attack",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 2,
      name: "Support/Backup Lines",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 3,
      name: "FDC Connection",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 4,
      name: "Standpipe Connection",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 5,
      name: "Exposure",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 6,
      name: "Search/Rescue",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 7,
      name: "Evacuation",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 8,
      name: "Ventilation",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 9,
      name: "Water Supply",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 10,
      name: "Secondary Water Supply",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    // {
    //   id: 11,
    //   name: "IRIT",
    //   background_color: "#FFBEBE",
    //   currentList: "task",
    //   tChart: 12,
    //   priority: 1,
    // },
    {
      id: 12,
      name: "RIT",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 13,
      name: "Assign Safety Officer",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 14,
      name: "Assign Accountability Officer",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 15,
      name: "Utilities",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 16,
      name: "Gas",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 17,
      name: "Electric",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 18,
      name: "Rehab",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 19,
      name: "Salvage",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 20,
      name: "Overhaul",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 21,
      name: "Medical",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 1,
    },
    {
      id: 22,
      name: "Traffic Control",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 23,
      name: "Police",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 24,
      name: "PIO",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 25,
      name: "Investigators",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 26,
      name: "Fire Marhsal",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 27,
      name: "State Fire Marhsal",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 28,
      name: "Health Department",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 29,
      name: "Occupant Services",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 30,
      name: "Board Up",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    {
      id: 31,
      name: "Red Cross",
      background_color: "#FFBEBE",
      currentList: "task",
      tChart: 12,
      priority: 2,
    },
    // {
    //   id: 18,
    //   name: "Water",
    //   background_color: "#FFBEBE",
    //   currentList: "task",
    //   tChart: 12,
    //   priority: 2,
    // },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    spliceTask: (state, action) => {
      state.tasks[action.payload.index].background_color = "#FFEA00";
    },
    pushTask: (state, action) => {
      state.tasks[action.payload.item.id - 1].background_color = "gray";
    },
  },
});

export const { spliceTask, pushTask } = tasksSlice.actions;

export default tasksSlice.reducer;
