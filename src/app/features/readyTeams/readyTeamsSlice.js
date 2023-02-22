import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    readyTeams: [
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
      ]
}

const readyTeamsSlice = createSlice ({
    name: "readyTeams",
    initialState,
    reducer: {
        splice: (state, index) => {
            state.readyTeams.splice([index], 1);
        },
        push: (state, team) => { 
            state.readyTeams.push(team);
        }
    }
})

export const {splice, push } = readyTeamsSlice.actions;

export default readyTeamsSlice.reducer;