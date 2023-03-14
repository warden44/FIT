import { configureStore } from "@reduxjs/toolkit";
import rosterTeamsReducer from "./features/rosterTeams/rosterTeamsSlice"
import enrouteTeamsReducer from "./features/enrouteTeams/enrouteTeamsSlice"
import readyTeamsReducer from "./features/readyTeams/readyTeamsSlice"
import stagedTeamsReducer from "./features/stagedTeams/stagedTeams";
import tChartSliceReducer from "./features/tChart/tChartSlice";
import tasksSliceReducer from "./features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    enrouteTeams: enrouteTeamsReducer,
    readyTeams: readyTeamsReducer,
    rosterTeams: rosterTeamsReducer,
    stagedTeams: stagedTeamsReducer,
    tChart: tChartSliceReducer,
    tasks: tasksSliceReducer,
  }
})