import { configureStore } from "@reduxjs/toolkit";
import rosterTeamsReducer from "./features/rosterTeams/rosterTeamsSlice"
import enrouteTeamsReducer from "./features/enrouteTeams/enrouteTeamsSlice"
import readyTeamsReducer from "./features/readyTeams/readyTeamsSlice"
import tChartSliceReducer from "./features/tChart/tChartSlice";
import tasksSliceReducer from "./features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    enrouteTeams: enrouteTeamsReducer,
    readyTeams: readyTeamsReducer,
    rosterTeams: rosterTeamsReducer,
    tChart: tChartSliceReducer,
    tasks: tasksSliceReducer,
  }
})