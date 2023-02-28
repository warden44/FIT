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
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 2,
      name: "Support/Backup Lines",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 3,
      name: "FDC Connection",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 4,
      name: "Standpipe Connection",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 5,
      name: "Exposure",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 6,
      name: "Search/Rescue",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 7,
      name: "Evacuation",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 8,
      name: "Ventilation",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 9,
      name: "Water Supply",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 10,
      name: "Secondary Water Supply",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 11,
      name: "IRIT",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 12,
      name: "RIT",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 13,
      name: "Assign Safety Officer",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 14,
      name: "Assign Accountability Officer",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 15,
      name: "Utilities",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 16,
      name: "Gas",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 17,
      name: "Electric",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 18,
      name: "Water",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 19,
      name: "Rehab",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 20,
      name: "Salvage",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 21,
      name: "Overhaul",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 22,
      name: "Medical",
      border_color: "red",
      currentList: "task",
      tChart: 12, priority: 1,
    },
    {
      id: 23,
      name: "Traffic Control",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 24,
      name: "Police",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 25,
      name: "PIO",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 26,
      name: "Investigators",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 27,
      name: "Fire Marhsal",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 28,
      name: "State Fire Marhsal",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 29,
      name: "Health Department",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 30,
      name: "Occupant Services",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 31,
      name: "Board Up",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
    {
      id: 32,
      name: "Red Cross",
      border_color: "yellow",
      currentList: "task",
      tChart: 12, priority: 2,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    spliceTask: (state, action) => {
      state.tasks[action.payload].border_color = "yellow";
    },
    pushTask: (state, action) => {
      state.tasks[action.payload].border_color = "gray";
    },
  },
});

export const { spliceTask, pushTask } = tasksSlice.actions;

export default tasksSlice.reducer;
