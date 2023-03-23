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
    spliceEnroute: (state, action) => {
      state.teams.splice(action.payload.index, 1);
    },
    pushEnroute: {
      reducer: (state, action) => {
        state.teams.push(action.payload.item);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            item: {
              ...value.item,
              currentList: "enroute",

            }
          },
        };
      },
    },
  },
});

export const { spliceEnroute, pushEnroute } = enrouteTeamsSlice.actions;

export default enrouteTeamsSlice.reducer;
