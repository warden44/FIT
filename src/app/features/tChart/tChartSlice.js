import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: Array(16).fill([]),
  tasks: Array(16).fill([]),
};

const tChartSlice = createSlice({
  name: "tChart",
  initialState,
  reducers: {
    spliceTChartTeam: (state, action) => {
      state.teams[action.payload.tChartID].splice(action.payload.index, 1, );
    },
    spliceTChartTask: (state, action) => {
      state.tasks[action.payload.tChartID].splice(action.payload.index, 1, );
    },
    insertTChartTeam: {
      reducer: (state, action) => {
        state.teams[action.payload.toIndex].push(action.payload.item);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            item: {
              ...value.item,
              currentList: "tChartTeams",
            },
          },
        };
      },
    },
    insertTChartTask: {
      reducer: (state, action) => {
        state.tasks[action.payload.toIndex].push(action.payload.item);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            item: {
              ...value.item,
              currentList: "tChartTasks",
            },
          },
        };
      },
    },
    // moveTChartTeam: (state, action) => {
    //   state.teams.splice(action.payload.toIndex, 1, action.payload.team);
    //   state.teams.splice(action.payload.fromIndex, 1, "");
    // },
    // moveTChartTask: (state, action) => {
    //   state.tasks.splice(action.payload.toIndex, 1, action.payload.task);
    //   state.tasks.splice(action.payload.fromIndex, 1, "");
    // },
  },
});

export const {
  spliceTChartTeam,
  spliceTChartTask,
  insertTChartTeam,
  insertTChartTask,
  // moveTChartTeam,
  // moveTChartTask,
} = tChartSlice.actions;
export default tChartSlice.reducer;
