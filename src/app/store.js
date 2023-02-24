import { configureStore } from "@reduxjs/toolkit";
import rosterTeamsReducer from "./features/rosterTeams/rosterTeamsSlice"
import enrouteTeamsReducer from "./features/enrouteTeams/enrouteTeamsSlice"
import readyTeamsReducer from "./features/readyTeams/readyTeamsSlice"

export const store = configureStore({
  reducer: {
    enrouteTeams: enrouteTeamsReducer,
    readyTeams: readyTeamsReducer,
    rosterTeams: rosterTeamsReducer,
  }
})