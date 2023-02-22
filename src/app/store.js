import { configureStore } from "@reduxjs/toolkit";
import enrouteTeamsReducer from "./features/enrouteTeams/enrouteTeamsSlice"
import readyTeamsReducer from "./features/readyTeams/readyTeamsSlice"

export const store = configureStore({
  reducer: {
    enrouteTeams: enrouteTeamsReducer,
    readyTeams: readyTeamsReducer,
  }
})