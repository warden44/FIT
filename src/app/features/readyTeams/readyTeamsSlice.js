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
    spliceReady: (state, action) => {
      state.teams.splice(action.payload.index, 1);
    },
    pushReady: {
      reducer: (state, action) => {
        state.teams.push(action.payload.item);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            item: {
              ...value.item,
              currentList: "ready",

            }
          },
        };
      },
    },
  },
});

export const { spliceReady, pushReady } =
  readyTeamsSlice.actions;

export default readyTeamsSlice.reducer;
