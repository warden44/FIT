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
      state.teams.splice(action.payload);
    },
    insertTChart: {
      reducer: (state, action) => {
        state.teams.splice(action.payload[0], 1, action.payload[1]);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            currentList: "tChart",
          },
        };
      },
    },
  },
});

export const { spliceTChart, insertTChart } = tChartSlice.actions;
export default tChartSlice.reducer;
