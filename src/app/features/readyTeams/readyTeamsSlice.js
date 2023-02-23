import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: 13,
      label: "t",
      name: "t",
      border_color: "#ffaaff",
      value: 0,
      currentList: "ready",
    },
    {
      id: 14,
      label: "u",
      name: "u",
      border_color: "#ffaaff",
      value: 1,
      currentList: "ready",
    },
    {
      id: 14,
      label: "v",
      name: "v",
      border_color: "#ffaaff",
      value: 1,
      currentList: "ready",
    },
  ],
};

const readyTeamsSlice = createSlice({
  name: "readyTeams",
  initialState,
  reducers: {
    spliceReady: (state, { payload }) => {
      state.teams.splice(payload, 1);
    },
    pushReady: (state, { payload }) => {
      state.teams.push(payload);
    },
    changeToReady: (state) => {
        state.teams[state.teams.length - 1].currentList = "ready";
    }
  },
});

export const { spliceReady, pushReady, changeToReady } = readyTeamsSlice.actions;

export default readyTeamsSlice.reducer;
