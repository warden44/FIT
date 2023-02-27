import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: ["", "", "", "", "", "", "", "", "", "", "", ""],
  tasks: ["", "", "", "", "", "", "", "", "", "", "", ""],
};

const tChartSlice = createSlice({
  name: "tChart",
  initialState,
  reducers: {
    spliceTChart: (state, action) => {
      state.teams.splice(action.payload, 1, "");
    },
    insertTChart: {
      reducer: (state, action) => {
        state.teams.splice(action.payload.toIndex, 1, action.payload.team);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            team: {
              ...value.team,
              currentList: "tChartTeams",
            },
          },
        };
      },
    },
    moveTChart: (state, action) => {
      state.teams.splice(action.payload.toIndex, 1, action.payload.team);
      state.teams.splice(action.payload.fromIndex, 1, "")
    },
  },
});

export const { spliceTChart, insertTChart, moveTChart } = tChartSlice.actions;
export default tChartSlice.reducer;
