import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrouteTeams: [
        {
          id: 13,
          label: "r",
          name: "r",
          border_color: "#ffaaff",
          value: 0,
          currentList: "ready",
        },
        {
          id: 14,
          label: "s",
          name: "s",
          border_color: "#ffaaff",
          value: 1,
          currentList: "ready",
        },
      ]
}

const enrouteTeamsSlice = createSlice({
    name: "enrouteTeams",
    initialState,
    reducers: {
        splice: (state, index) => {
            state.enrouteTeams.splice([index], 1);
        },
        push: (state, team) => { 
            state.enrouteTeams.push(team);
        }
    }
});

export const {splice, push} = enrouteTeamsSlice.actions;

export default enrouteTeamsSlice.reducer;