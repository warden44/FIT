import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: 13,
      label: "r",
      name: "r",
      border_color: "#ffaaff",
      value: 0,
      currentList: "enroute",
    },
    {
      id: 14,
      label: "s",
      name: "s",
      border_color: "#ffaaff",
      value: 1,
      currentList: "enroute",
    },
  ],
};

const enrouteTeamsSlice = createSlice({
  name: "enrouteTeams",
  initialState,
  reducers: {
    spliceEnroute: (state, {payload}) => {
      state.teams.splice(payload, 1);
    },
    pushEnroute: (state, { payload }) => {
      payload.currentList = "enroute";
      state.teams.push(payload);
    },
    changeToEnroute: (state) => {
      state.teams[state.teams.length - 1].currentList = "ready";
  }
  },
});

export const { spliceEnroute, pushEnroute,changeToEnroute } = enrouteTeamsSlice.actions;

export default enrouteTeamsSlice.reducer;
