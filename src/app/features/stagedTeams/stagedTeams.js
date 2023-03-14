import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: 13,
      label: "t",
      name: "t",
      border_color: "#ffaaff",
      value: 0,
      currentList: "staged",
    },
    {
      id: 14,
      label: "u",
      name: "u",
      border_color: "#ffaaff",
      value: 1,
      currentList: "staged",
    },
    {
      id: 14,
      label: "v",
      name: "v",
      border_color: "#ffaaff",
      value: 1,
      currentList: "staged",
    },
  ],
};

const stagedTeamsSlice = createSlice({
  name: "stagedTeams",
  initialState,
  reducers: {
    spliceStaged: (state, action) => {
      state.teams.splice(action.payload, 1);
    },
    pushStaged: {
      reducer: (state, action) => {
        state.teams.push(action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            currentList: "staged",
          },
        };
      },
    },
  },
});

export const { spliceStaged, pushStaged } =
stagedTeamsSlice.actions;

export default stagedTeamsSlice.reducer;
